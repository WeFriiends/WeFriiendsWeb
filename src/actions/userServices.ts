import axios from 'axios'
import { UserObjectType } from 'common/types/userTypes'

export const getUsersData = async (url: string) => {
  try {
    const response = await axios.get(url)
    return response.data as Array<UserObjectType>
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
