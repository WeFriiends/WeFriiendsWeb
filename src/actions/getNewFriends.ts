import { UserProfileData } from 'types/UserProfileData'
import axiosInstance from './axiosInstance'

export const getNewFriends = async (url: string) => {
  try {
    const response = await axiosInstance.get(url)
    return response.data as Array<UserProfileData>
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
