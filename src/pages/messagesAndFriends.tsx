import { Box } from '@mui/material'
import Header from '../components/header/Header'
import TabsMessagesFriends from '../components/tabsMessegeFriends/TabsMessegesFriends'
import Card from '../components/card/Card'

function MessagesAndFriends() {
  return (
    <Box sx={{ width: '1043px', margin: '0 auto' }}>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <TabsMessagesFriends />
        <Box sx={{ marginLeft: '113px', marginTop: '36px' }}>
          <Card />
        </Box>
      </Box>
    </Box>
  )
}

export default MessagesAndFriends
