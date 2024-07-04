import { useAuth0 } from '@auth0/auth0-react'
import Logo from 'components/logo/Logo'

const AuthCallbackPage = () => {
  const { error } = useAuth0()

  if (error) {
    console.error(error)
    return <div>Oops... {error.message}</div>
  }

  return <Logo />
}

export default AuthCallbackPage
