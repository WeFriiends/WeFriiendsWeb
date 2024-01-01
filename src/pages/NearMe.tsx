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
import { useSuggestedLocations } from 'hooks/useSuggestedLocations'

export default function NearMe() {
  const isMobile = useMediaQuery<boolean>('(max-width:600px)')

  const [inputLocation, setInputLocation] = React.useState('')
  const suggestedLocations = useSuggestedLocations(inputLocation)

  return (
    <Container component="main" sx={{ flexGrow: 1 }}>
      <Autocomplete
        freeSolo
        filterOptions={(x) => x}
        options={suggestedLocations}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option}>
              {option}
            </li>
          )
        }}
        renderInput={(params) => (
          <TextField
            onChange={(e) => setInputLocation(e.target.value)}
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
