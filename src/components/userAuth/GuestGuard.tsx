import type { FC, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useAuth0 } from '@auth0/auth0-react'

interface GuestGuardProps {
  children: ReactNode
}

const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
  const { isAuthenticated } = useAuth0()

  if (isAuthenticated) {
    return <Navigate to="user/messages-and-friends" />
  }

  return <>{children}</>
}

GuestGuard.propTypes = {
  children: PropTypes.node,
}

export default GuestGuard
