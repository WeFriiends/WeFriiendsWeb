import React from 'react'
import { TextField } from '@mui/material'

interface GetNameProps {
  name: string
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const GetName: React.FC<GetNameProps> = ({ name, handleNameChange }) => {
  return (
    <div>
      <h3>Name component goes here</h3>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleNameChange}
      />
    </div>
  )
}
export default GetName
