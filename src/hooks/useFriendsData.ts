import { useState } from 'react'
import { UserProfileData } from '../types/UserProfileData'
import dataProfile from '../components/userProfile/userProfile.json'

function useFriendsData() {
  const [friendsData, setFriendsData] = useState(dataProfile as UserProfileData)

  const selectFriend = (user: UserProfileData) => {
    setFriendsData(user)
  }
  return { friendsData, selectFriend }
}
export default useFriendsData
