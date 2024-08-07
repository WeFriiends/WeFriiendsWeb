import type { ComponentType } from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import LoadingScreen from 'common/svg/Loader'

interface AuthenticationGuardProps {
  component: ComponentType<object>
}

const AuthGuard = ({ component }: AuthenticationGuardProps) => {
  const Component = withAuthenticationRequired(component, {
    //instance of a React component that will be rendered while the user is being redirected to the login page
    //instead of loader you can use animation with moving sticks (Figma design)
    onRedirecting: () => <LoadingScreen />,
  })

  return <Component />
}

export default AuthGuard
