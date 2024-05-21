import { Box } from '@mui/material'
import NavBar from 'components/navBar/NavBar'
import TabsMessagesFriends from 'components/tabsMessagesFriends/TabsMessagesFriends'
import UserProfile from 'components/userProfile/UserProfile'
import useFriendsData from 'hooks/useFriendsData'

const MessagesAndFriends = () => {
  const { friendsData, selectFriend } = useFriendsData()
  return (
    <Box sx={{ width: '1043px', margin: '0 auto' }}>
      <NavBar />
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <TabsMessagesFriends onClick={selectFriend} />
        <Box sx={{ paddingLeft: '53px', paddingTop: '36px' }}>
          <UserProfile user={friendsData} />
        </Box>
      </Box>
    </Box>
  )
}

export default MessagesAndFriends
