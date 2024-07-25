import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { makeStyles } from 'tss-react/mui'
import theme from 'styles/createTheme'
import { FormHelperText, Typography } from '@mui/material'
import { setItemToLocalStorage } from 'utils/localStorage'
import { commonStyles } from 'styles/commonStyles'

const NameInput = () => {
  const { classes } = useStyles()
  const commonClasses = commonStyles().classes

  const [fullName, setFullName] = useState('')
  const [error, setError] = useState<string | null>(null)

  const validateName = (value: string) => {
    const regex = /^[a-zA-Z]{2,15}$/
    if (!regex.test(value)) {
      setError(
        'Name should contain 2-15 letters only, without numbers or special characters.'
      )
      return
    }
    setError(null)
  }

  const handleInputChange = (value: string) => {
    // setError(null)
    setFullName(value)
    validateName(value)
    setItemToLocalStorage('name', value)
  }

  const helperText = error || '15 symbols max.'

  return (
    <>
      <Typography variant="h1" className={commonClasses.title} pt={10}>
        {`Let's get started!`}
      </Typography>
      <TextField
        className={classes.profileInput}
        value={fullName}
        onChange={(e) => {
          handleInputChange(e.target.value)
          setError(null)
        }}
        error={!!error}
        helperText={error}
        fullWidth
        // variant="outlined"
        // onBlur={validateName}
      />
      <FormHelperText sx={{ color: '#1D878C' }}>{helperText}</FormHelperText>
    </>
  )
}

export default NameInput

const useStyles = makeStyles()(() => {
  return {
    profileText: {
      fontSize: 18,
      lineHeight: '27px',
      color: theme.palette.text.primary,
      paddingBottom: '50px',
    },
    profileInput: {
      backgroundColor: '#FFF1EC',
      borderRadius: 10,
      outline: 'none',
      '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
  }
})
