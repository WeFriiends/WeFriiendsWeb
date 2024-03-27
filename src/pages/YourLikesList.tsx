import { Container, Box } from '@mui/material'
import NavBar from '../components/navBar/NavBar'

import YouLikesProfiles from '../components/yourLikesList/YouLikesProfiles'

export default function YourLikesList() {
  return (
    <Container component="main" sx={{ flexGrow: 1 }}>
      <Box>
        <NavBar />
        <YouLikesProfiles />
      </Box>
    </Container>
  )
}
