import { useState } from 'react'
import { Box } from '@mui/material'
import Header from 'components/header/Header'
import TabsMessagesFriends from 'components/tabsMessagesFriends/TabsMessagesFriends'
import UserProfile, {
  UserProfileData,
} from 'components/userProfile/UserProfile'
import dataProfile from '../../src/components/userProfile/userProfile.json'

const MessagesAndFriends = () => {
  const [friendsData, setFriendsData] = useState(dataProfile)

  const getFriendsData = (user: UserProfileData) => {
    setFriendsData(user)
  }
  return (
    <Box sx={{ width: '1043px', margin: '0 auto' }}>
      <Header />
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <TabsMessagesFriends onClick={getFriendsData} />
        <Box sx={{ paddingLeft: '53px', paddingTop: '36px' }}>
          <UserProfile user={friendsData} />
        </Box>
      </Box>
    </Box>
  )
}

export default MessagesAndFriends
