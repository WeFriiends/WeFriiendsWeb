import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'

const useBearerToken = () => {
  const [token, setToken] = useState('')
  const { user, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently()
        setToken(accessToken)
      } catch (e) {
        console.error(e)
      }
    }

    getToken()
  }, [getAccessTokenSilently, user?.sub])

  return token
}

export default useBearerToken
