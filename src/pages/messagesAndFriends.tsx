import { Box } from '@mui/material'
import Header from 'components/header/Header'
import TabsMessagesFriends from 'components/tabsMessegeFriends/TabsMessagesFriends'
import Card from 'components/card/Card'

const MessagesAndFriends = () => {
  return (
    <Box sx={{ width: '1043px', margin: '0 auto' }}>
      <Header />
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <TabsMessagesFriends />
        <Box sx={{ marginLeft: '53px', marginTop: '36px' }}>
          <Card />
        </Box>
      </Box>
    </Box>
  )
}

export default MessagesAndFriends
