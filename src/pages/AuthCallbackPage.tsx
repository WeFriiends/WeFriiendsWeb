import { useAuth0 } from '@auth0/auth0-react'
import AccountConfirmationMessage from 'components/userAuth/AccountConfirmationMessage'
import EmailVerified from 'components/userAuth/EmailVerified'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const AuthCallbackPage = () => {
  const { handleRedirectCallback, error } = useAuth0()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const processCallback = async () => {
      try {
        const searchParam = new URLSearchParams(location.search)
        const message = searchParam.get('message')
        const errorDecription = searchParam.get('error_description')
        console.log('errorDecription:', errorDecription)
        if (message && message.includes('Your email was verified')) {
          console.log('Email was verified')
          navigate('/email-confirmed')
        } else if (
          errorDecription &&
          errorDecription.includes('Please verify your email before logging in')
        ) {
          console.log('Please verify your email')
          navigate('/email-verify')
        }
        await handleRedirectCallback()
        navigate('/fill-profile')
      } catch (error) {
        console.error('Error during callback:', error)
      }
    }

    processCallback()
  }, [handleRedirectCallback, navigate, location.search, error])

  if (
    error &&
    error.message !== 'Please verify your email before logging in.'
  ) {
    console.error(error)
    console.log('error message:', error.message)
    return <div>Oops... {error.message}</div>
  }

  return <div>Loading...</div>

  // if (error) {
  //   console.error(error)
  //   if (error.message == 'Please verify your email before logging in.')
  //     return <AccountConfirmationMessage />
  //   else return <div>Oops... {error.message}</div>
  // }

  // return <EmailVerified />
}

export default AuthCallbackPage
