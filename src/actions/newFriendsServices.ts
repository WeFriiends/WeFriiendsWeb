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

export const addNewFriend = async (
  url: string,
  friendData: UserProfileData
) => {
  try {
    const response = await axiosInstance.post(url, friendData)

    return response.data
  } catch (error) {
    console.error('Error posting data:', error)
  }
}
