import type { FC, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useAuthContext } from 'hooks/useAuthContext'

interface GuestGuardProps {
  children: ReactNode
}

const GuestGuard: FC<GuestGuardProps> = ({ children }) => {
  const auth = useAuthContext()

  if (auth.user) {
    return <Navigate to="user/messages-and-friends" />
  }

  return <>{children}</>
}

GuestGuard.propTypes = {
  children: PropTypes.node,
}

export default GuestGuard
