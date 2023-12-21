import { Container, Box, useMediaQuery } from '@mui/material'
import Header from '../components/header/Header'

import FooterAppBar from '../components/footerAppBar/FooterAppBar'
import YouLikesProfiles from '../components/yourLikesList/YouLikesProfiles'

export default function YourLikesList() {
  const isMobile = useMediaQuery<boolean>('(max-width:600px)')

  return (
    <Container component="main" sx={{ flexGrow: 1 }}>
      {isMobile ? (
        <Box sx={{ pb: 7 }}>
          <YouLikesProfiles isMobile={isMobile} />
          <FooterAppBar />
        </Box>
      ) : (
        <Box>
          <Header />
          <YouLikesProfiles isMobile={isMobile} />
        </Box>
      )}
    </Container>
  )
}
