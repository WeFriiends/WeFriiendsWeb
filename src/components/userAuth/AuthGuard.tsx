import type { FC, ComponentType } from 'react'
import { withAuthenticationRequired } from '@auth0/auth0-react'
import Loader from 'common/Loader'

const AuthGuard: FC<{ component: ComponentType<object> }> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    //instance of a React component that will be rendered while the user is being redirected to the login page
    //instead of loader you can use animation with moving I sticks
    onRedirecting: () => <Loader />,
  })

  return <Component />
}

export default AuthGuard
