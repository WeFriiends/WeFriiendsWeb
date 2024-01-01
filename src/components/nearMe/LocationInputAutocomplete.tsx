import * as React from 'react'
import { useSuggestedLocations } from 'hooks/useSuggestedLocations'
import { Autocomplete, TextField } from '@mui/material'

const BOUNCE_DURATION = 500
const SUGGETIONS_LIMIT = 5

const LocationInputAutocomplete = () => {
  const [inputLocation, setInputLocation] = React.useState('')
  const suggestedLocations = useSuggestedLocations(
    inputLocation,
    BOUNCE_DURATION,
    SUGGETIONS_LIMIT
  )

  return (
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
  )
}

export default LocationInputAutocomplete
