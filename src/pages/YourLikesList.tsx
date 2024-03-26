import { Container, Box, useMediaQuery } from '@mui/material'
import Header from '../components/header/Header'

import FooterAppBar from '../components/footerAppBar/FooterAppBar'
import YouLikesProfiles from '../components/yourLikesList/YouLikesProfiles'

export default function YourLikesList() {
  const isMobile = useMediaQuery<boolean>('(max-width:1023px)')

  return (
    <Container component="main" sx={{ flexGrow: 1 }}>
      {isMobile ? (
        <Box>
          <YouLikesProfiles />
          <FooterAppBar />
        </Box>
      ) : (
        <Box>
          <Header />
          <YouLikesProfiles />
        </Box>
      )}
    </Container>
  )
}
