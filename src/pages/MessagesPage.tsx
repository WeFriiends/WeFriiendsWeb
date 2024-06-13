import { Box, Typography } from '@mui/material'
import Messages from 'components/tabsMessagesFriends/Messages'

const MessagesPage = () => {
  return (
    <Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: '5.5fr 6.5fr' }}>
        <Messages />

        <Box>
          <Typography>
            Connect with others by sharing your thoughts or experiences.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default MessagesPage
