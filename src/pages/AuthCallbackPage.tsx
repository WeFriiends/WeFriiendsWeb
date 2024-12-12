import { useAuth0 } from '@auth0/auth0-react'
import Logo from 'components/logo/Logo'
import AccountConfirmationMessage from 'components/userAuth/AccountConfirmationMessage'

const AuthCallbackPage = () => {
  const { error } = useAuth0()

  if (error) {
    console.error(error)
    if (error.message == 'Please verify your email before logging in.')
      return <AccountConfirmationMessage />
    else return <div>Oops... {error.message}</div>
  }

  return <Logo />
}

export default AuthCallbackPage
