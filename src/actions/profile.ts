import axios from 'axios'

// Define the base URL for your API
const API_BASE_URL = 'http://localhost:8080/api/profile'
// const API_BASE_URL = 'https://wefriiends.com/wefriiendsprofile/api/profile'

// Function to create a profile
export const createProfile = async (
  profileData: {
    name: string
    dateOfBirth: string
    location: {
      lat: number
      lng: number
      country?: string
      city?: string
      street?: string
      houseNumber?: string
    }
    photos?: string[]
    gender: string
    reasons: string[]
  },
  token: string | null
) => {
  const response = await axios.post(API_BASE_URL, profileData, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })

  return response.data
}
