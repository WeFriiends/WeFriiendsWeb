import { Box, Typography } from '@mui/material'
import PageWrapper from './PageWrapper'

const Messages = () => {
  return (
    <PageWrapper>
      <Box sx={{ display: 'grid', gridTemplateColumns: '5.5fr 6.5fr' }}>
        {/* <TabsMessagesFriends /> */}

        <Box>
          <Typography>
            Connect with others by sharing your thoughts or experiences.
          </Typography>
        </Box>
      </Box>
    </PageWrapper>
  )
}
export default Messages
