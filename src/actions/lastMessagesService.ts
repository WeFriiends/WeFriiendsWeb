import axiosInstance from './axiosInstance'
import { UserLastMessage } from 'types/UserLastMessage'

export const getLastMessages = async (
  id: string
): Promise<UserLastMessage[] | undefined> => {
  try {
    const response = await axiosInstance.get(id)
    return response.data
  } catch (error) {
    console.error('Error fetching data for last messages')
  }
}
