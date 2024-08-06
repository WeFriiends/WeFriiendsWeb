import useSWR from 'swr'
import { getProfile as fetcher } from 'actions/profile'
import useBearerToken from './useBearToken'

const useProfileData = () => {
  const token = useBearerToken()

  const { data, error } = useSWR(`${token}`, fetcher)
  return {
    profile: data,
    error,
    isLoading: !data && !error,
  }
}

export default useProfileData
