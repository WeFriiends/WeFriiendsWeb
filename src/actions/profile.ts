import axios, { AxiosResponse } from 'axios'
import { getItemsFromLocalStorage } from 'utils/localStorage'

// Define the base URL for your API
const API_BASE_URL = 'http://localhost:8080/api/profile'
function base64ToBlob(base64: string, mimeType: string): Blob {
  const byteCharacters = atob(base64)
  const byteNumbers = Array.from(byteCharacters, (char) => char.charCodeAt(0))
  const byteArray = new Uint8Array(byteNumbers)
  return new Blob([byteArray], { type: mimeType })
}

// Function to create a profile
export const createProfile = async ({ token }: { token: string | null }) => {
  const {
    name,
    dob,
    gender,
    lat,
    lng,
    country,
    city,
    street,
    houseNumber,
    selectedStatuses,
    userPreferences,
    userPicsStorage: photos,
  } = getItemsFromLocalStorage([
    'name',
    'dob',
    'gender',
    'lat',
    'lng',
    'country',
    'city',
    'street',
    'houseNumber',
    'selectedStatuses',
    'userPreferences',
    'userPicsStorage',
  ])
  const choosenFiles: ChoosenFile[] = photos.filter((cf: ChoosenFile) => cf.url)
  const formData = new FormData()

  formData.append('name', name)
  formData.append('dateOfBirth', dob)
  formData.append('gender', gender)
  formData.append(
    'location',
    JSON.stringify({ lat, lng, country, city, street, houseNumber })
  )
  formData.append('reasons', JSON.stringify(selectedStatuses))
  formData.append('preferences', JSON.stringify(userPreferences))

  interface ChoosenFile {
    id: string
    url: string
    fileName: string
  }
  choosenFiles.forEach((cf, index) => {
    const fileBase64 = cf.url
    const [header, base64Data] = fileBase64.split(',')
    const [, mimeType] = header.match(/:(.*?);/) || []
    const blob = base64ToBlob(base64Data, mimeType)
    formData.append(`file${index}`, blob, cf.fileName)
  })

  const response = await fetch('http://localhost:8080/api/profile', {
    method: 'POST',
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`)
  }

  const result = await response.json()
  console.log('Upload successful:', result)

  return result
}

// Function to get the current profile
export const getProfile = async (token: string | null): Promise<Profile> => {
  const response: AxiosResponse<Profile> = await axios.get(API_BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

// Function to update a profile
export const updateProfile = async (
  profileData: {
    name: string
    dateOfBirth: string
    coordinates?: { lat: number; lng: number }
    country?: string
    city?: string
  },
  token: string | null
) => {
  const response = await axios.put(API_BASE_URL, profileData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

export const deleteProfile = async (token: string | null) => {
  const response = await axios.delete(API_BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}
