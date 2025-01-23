import { useEffect } from 'react'
import { useProfileStore } from '../zustand/store'
import useBearerToken from './useBearToken'

const useProfileData = () => {
  const token = useBearerToken()
  const { data: profile, loading, error, getProfile } = useProfileStore()

  useEffect(() => {
    console.log('get profile data if not existed')
    if (token && !profile) {
      // to avoid re-querying if data has already been loaded
      console.log('get profile data - not existed')
      getProfile(token)
    }
  }, [getProfile, token, profile])

  return { profile, loading, error }
}

export default useProfileData
