import axios from 'axios'
export const getUsersNearMeData = async () => {
  try {
    const response = await axios.get('users.json')
    if (response.status === 200) {
      return response.data
    } else {
      throw new Error('Failed to fetch data')
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
