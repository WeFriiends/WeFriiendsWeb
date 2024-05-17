import * as React from 'react'
import { useSuggestedLocations } from 'hooks/useSuggestedLocations'
import { Autocomplete, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const BOUNCE_DURATION = 500
const SUGGETIONS_LIMIT = 5

const LocationInputAutocomplete = () => {
  const [inputLocation, setInputLocation] = React.useState('')
  const [isFocused, setIsFocused] = React.useState(false)
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
      getOptionLabel={(option) => {
        if (typeof option === 'string') {
          return option
        } else {
          return option.displayName
        }
      }}
      renderInput={(params) => (
        <TextField
          sx={{
            "input[type='search']::-webkit-search-cancel-button": {
              display: 'none',
            },
          }}
          onChange={(e) => setInputLocation(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...params}
          variant="standard"
          InputProps={{
            ...params.InputProps,
            type: 'search',
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
                <span
                  style={{
                    display:
                      isFocused || inputLocation.length ? 'none' : 'inline',
                  }}
                >
                  Search city
                </span>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  )
}

export default LocationInputAutocomplete
