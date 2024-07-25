import React, { useState } from 'react'
import { TextField, Box, Button } from '@mui/material'

type LocationInputProps = {
  onLocationChange: (location: { city: string; street: string }) => void
}

const LocationInput: React.FC<LocationInputProps> = ({ onLocationChange }) => {
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')

  const handleSubmit = () => {
    onLocationChange({ city, street })
  }

  return (
    <Box>
      <TextField
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Street"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        style={{ marginTop: '10px' }}
      >
        Submit
      </Button>
    </Box>
  )
}

export default LocationInput
