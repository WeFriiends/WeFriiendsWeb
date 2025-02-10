import { useEffect } from 'react'
import { useProfileStore } from '../zustand/store'
import useBearerToken from './useBearToken'

const useProfileData = () => {
  const token = useBearerToken()
  const { data: profile, loading, error, getProfile } = useProfileStore()

  useEffect(() => {
    if (token && !profile) {
      // to avoid re-querying if data has already been loaded
      getProfile(token)
    }
  }, [getProfile, token, profile])

  return { profile, loading, error }
}

export default useProfileData
