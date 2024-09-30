// Code for the UserAccount page should be refactored. Maybe to use state management
// to avoid double fetching of the user data. For now it's created for testing purposes.

import { useAuth0 } from '@auth0/auth0-react'
import { deleteProfile } from 'actions/profile'
import useBearerToken from 'hooks/useBearToken'
import useProfileData from 'hooks/useProfileData'

const UserAccount = () => {
  const { logout } = useAuth0()
  const token = useBearerToken()

  const { profile, error, isLoading } = useProfileData()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const deleteAccount = async () => {
    await deleteProfile(token)
  }

  return (
    <div>
      <h1>User Account</h1>
      <div>
        <h2>Name: {profile?.name}</h2>
        <h2>Date of Birth: {profile?.dateOfBirth.toString()}</h2>
        <h2>Gender: {profile?.gender}</h2>
        <h2>Gender: {location?.city}</h2>
        <h2>Gender: {location?.street}</h2>
        <h2>
          Reasons:
          {profile?.reasons?.map((r) => (
            <p key={r}>{r}</p>
          ))}
        </h2>
      </div>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
      <button onClick={deleteAccount}>Delete account</button>
    </div>
  )
}

export default UserAccount
