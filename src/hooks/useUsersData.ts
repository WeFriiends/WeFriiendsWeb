import useSWR from 'swr'
import { getUsersData as fetcher } from 'actions/userServices'

const useUsersData = () => {
  const { data, error } = useSWR('/users.json', fetcher)

  return {
    data,
    error,
    isLoading: !data && !error,
  }
}
export default useUsersData
