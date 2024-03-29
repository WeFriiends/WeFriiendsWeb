import type { FC, ReactNode } from 'react'
import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import PropTypes from 'prop-types'
import SignIn from './signIn/SignIn'

interface AuthGuardProps {
  children: ReactNode
}

const AuthGuard: FC<AuthGuardProps> = (props) => {
  const { children } = props

  const { isAuthenticated } = useAuth0()
  const location = useLocation()
  const [requestedLocation, setRequestedLocation] = useState<string | null>()

  if (!isAuthenticated) {
    if (location.pathname !== requestedLocation) {
      setRequestedLocation(location.pathname)
    }

    return <SignIn />
  }

  // This is done so that in case the route changes by any chance through other
  // means between the moment of request and the render we navigate to the initially
  // requested route.
  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null)
    return <Navigate to={requestedLocation} />
  }

  return <>{children}</>
}

AuthGuard.propTypes = {
  children: PropTypes.node,
}

export default AuthGuard
