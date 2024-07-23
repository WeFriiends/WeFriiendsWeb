import { useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'

const useBearerToken = () => {
  const [token, setToken] = useState('')
  const { user, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    const getToken = async () => {
      const domain = process.env.REACT_APP_AUTH0_DOMAIN

      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: `https://${domain}/api/v2/`,
            scope: 'read:current_user',
          },
        })
        console.log({ accessToken })
        setToken(accessToken)
      } catch (e) {
        console.log(e)
      }
    }

    getToken()
  }, [getAccessTokenSilently, user?.sub])
  console.log({ user })
  console.log({ token })

  return token
}

export default useBearerToken
