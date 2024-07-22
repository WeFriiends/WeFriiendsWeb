import axios from 'axios'
import { getBearerToken } from './getBearerToken'

// Define the base URL for your API
const API_BASE_URL = 'http://localhost:8080/api/profile'

// Function to create a profile
export const createProfile = async (profileData: {
  name: string
  dateOfBirth: string
  coordinates?: { lat: number; lng: number }
  country?: string
  city?: string
}) => {
  const token = await getBearerToken()

  const response = await axios.post(API_BASE_URL, profileData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

// Function to get the current profile
export const getProfile = async () => {
  const token = await getBearerToken()

  const response = await axios.get(API_BASE_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}

// Function to update a profile
export const updateProfile = async (profileData: {
  name: string
  dateOfBirth: string
  coordinates?: { lat: number; lng: number }
  country?: string
  city?: string
}) => {
  const token = await getBearerToken()

  const response = await axios.put(API_BASE_URL, profileData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return response.data
}
