import { useState } from 'react'
import { UserProfileData } from '../types/UserProfileData'
import dataProfile from '../components/userProfile/userProfile.json'

function useFriendsData() {
  const [friendsData, setFriendsData] = useState(dataProfile as UserProfileData)
  const [isStartChat, setIsStartChat] = useState(false)

  const selectFriend = (user: UserProfileData) => {
    setFriendsData(user)
    setIsStartChat(true)
  }

  return { friendsData, selectFriend, isStartChat }
}
export default useFriendsData
