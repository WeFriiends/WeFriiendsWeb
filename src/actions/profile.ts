import axios, { AxiosResponse } from 'axios'
import { UserPicsType } from '../types/UserProfileData'

// Define the base URL for your API
const API_BASE_URL = 'http://localhost:8080/api/profile'
//const API_BASE_URL = 'https://wefriiends.com/wefriiendsprofile/api/profile'

function base64ToBlob(base64: string, mimeType: string): Blob {
  const byteCharacters = atob(base64)
  const byteNumbers = Array.from(byteCharacters, (char) => char.charCodeAt(0))
  const byteArray = new Uint8Array(byteNumbers)
  return new Blob([byteArray], { type: mimeType })
}

interface Location {
  lat: number
  lng: number
  country: string
  city: string
  street: string
  houseNumber: string
}

interface UserPreferences {
  aboutMe?: string
  selectedLanguages?: string[]
  Smoking?: string[]
  EducationalLevel?: string[]
  Children?: string[]
  Drinking?: string[]
  Pets?: string[]
  Interests?: string[]
}

interface ProfileData {
  name: string
  dateOfBirth: string
  gender: string
  location: Location
  reasons: string[]
  userPreferences: UserPreferences
  userPicsStorage: UserPicsType[]
}

// Function to create a profile
export const createProfile = async (
  data: ProfileData,
  token: string
): Promise<any> => {
  const {
    name,
    dateOfBirth,
    gender,
    location,
    reasons,
    userPreferences,
    userPicsStorage,
  } = data

  const choosenFiles: UserPicsType[] = userPicsStorage.filter(
    (cf: UserPicsType) => cf.url
  )
  const formData = new FormData()

  formData.append('name', name)
  formData.append('dateOfBirth', dateOfBirth)
  formData.append('gender', gender)
  formData.append('location', JSON.stringify(location))
  formData.append('reasons', JSON.stringify(reasons))
  formData.append('preferences', JSON.stringify(userPreferences))

  choosenFiles.forEach((cf, index) => {
    if (cf.url) {
      const fileBase64 = cf.url
      const [header, base64Data] = fileBase64.split(',')
      const [, mimeType] = header.match(/:(.*?);/) || []
      const blob = base64ToBlob(base64Data, mimeType)
      formData.append(`file${index}`, blob, cf.fileName)
    } else {
      // Handle the case where cf.url is null or undefined
      console.error(`cf.url is null or undefined for index ${index}`)
    }
  })

  const response = await axios.post(API_BASE_URL, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
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

// Function to delete a profile
export const deleteProfile = async (token: string | null) => {
  const response = await axios.delete(API_BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}
