import * as React from 'react'
import Box from '@mui/material/Box'

import {
  Container,
  useMediaQuery,
  Autocomplete,
  TextField,
} from '@mui/material'
import Header from '../components/header/Header'
import NearMeProfiles from '../components/nearMe/NearMeProfiles'
import FooterAppBar from '../components/footerAppBar/FooterAppBar'

export default function NearMe() {
  const isMobile = useMediaQuery<boolean>('(max-width:600px)')

  return (
    <Container component="main" sx={{ flexGrow: 1 }}>
      <Autocomplete
        freeSolo
        options={['1', '2']}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Input your street"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
      {isMobile ? (
        <Box sx={{ pb: 7 }}>
          <NearMeProfiles isMobile={isMobile} />
          <FooterAppBar />
        </Box>
      ) : (
        <Box>
          <Header />
          <NearMeProfiles isMobile={isMobile} />
        </Box>
      )}
    </Container>
  )
}
