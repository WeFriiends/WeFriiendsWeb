import { Box, Typography } from '@mui/material'
import NavBar from 'components/navBar/NavBar'

const Messages = () => {
  return (
    <Box sx={{ width: '1024px', margin: '0 auto', padding: '0 30px' }}>
      <NavBar />
      <Box sx={{ display: 'grid', gridTemplateColumns: '5.5fr 6.5fr' }}>
        {/* <TabsMessagesFriends /> */}

        <Box>
          <Typography>
            Connect with others by sharing your thoughts or experiences.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default Messages
