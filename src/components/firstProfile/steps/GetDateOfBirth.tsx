import React from 'react'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box'

interface GetDateOfBirthProps {
  dob: string
  handleDobChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const GetDateOfBirth: React.FC<GetDateOfBirthProps> = ({
  dob,
  handleDobChange,
}) => {
  return (
    <Box>
      <h3>Date Of Birth component goes here</h3>
      <TextField
        label="Day"
        variant="outlined"
        type="number"
        value={dob}
        onChange={handleDobChange}
      />
    </Box>
  )
}

export default GetDateOfBirth
