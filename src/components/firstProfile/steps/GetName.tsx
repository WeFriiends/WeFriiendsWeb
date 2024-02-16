import React, { useState } from 'react'
import { TextField } from '@mui/material'
import withProfileComponentHOC from '../FirstProfileHOC'

type GetNameProps = {
  name: string
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const GetName: React.FC<GetNameProps> = ({ name, handleNameChange }) => {
  return (
    <>
      <TextField
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleNameChange}
      />
    </>
  )
}
export default withProfileComponentHOC(
  GetName,
  `Let's get started!`,
  'What is your name?'
)
