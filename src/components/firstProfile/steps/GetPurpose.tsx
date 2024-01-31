import React from 'react'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box'

interface GetPurposeProps {
  lookingFor: string
  handleLookingForChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const GetPurpose: React.FC<GetPurposeProps> = ({
  lookingFor,
  handleLookingForChange,
}: GetPurposeProps) => {
  return (
    <Box>
      <div>GetPurpose component goes here</div>
      <TextField
        label="What are you looking for?"
        variant="outlined"
        value={lookingFor}
        onChange={handleLookingForChange}
      />
    </Box>
  )
}

export default GetPurpose
