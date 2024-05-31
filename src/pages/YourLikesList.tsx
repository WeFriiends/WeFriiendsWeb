import { Container, Box } from '@mui/material'

import YouLikesProfiles from '../components/yourLikesList/YouLikesProfiles'

export default function YourLikesList() {
  return (
    <Container component="main" sx={{ flexGrow: 1 }}>
      <Box>
        <YouLikesProfiles />
      </Box>
    </Container>
  )
}
