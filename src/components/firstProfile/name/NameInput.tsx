import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { makeStyles } from 'tss-react/mui'
import theme from 'styles/createTheme'
import { FormHelperText, Typography } from '@mui/material'
import { setItemToLocalStorage } from 'utils/localStorage'
import NameValidationBox from './NameValidationBox'

// todo: Validation for all the steps of First Profile Carousel.
// todo: check for working backend WeFriendsProfile, showing the error if it is not running.
// todo: add instruction to ReadMe: how to run backend.

const NameInput = () => {
  const { classes } = useStyles()
  const [fullName, setFullName] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [hasTyped, setHasTyped] = useState(false)

  const validateName = (value: string) => {
    const regex = /^[a-zA-Z ]{2,15}$/
    if (!regex.test(value) || value.startsWith(' ') || value.endsWith(' ')) {
      setError(
        'Name should contain 2-15 letters only, spaces allowed in between, without numbers or special characters.'
      )
    } else {
      setError(null)
    }
  }

  const handleInputChange = (value: string) => {
    setFullName(value)
    setHasTyped(true)
    validateName(value)
    if (error === null) {
      setItemToLocalStorage('name', value)
    }
  }

  return (
    <>
      <Typography variant="h1" className={classes.title}>
        {"Let's get started!"}
      </Typography>
      <Typography variant="body1" className={classes.description}>
        {"What's your name?"}
      </Typography>
      <TextField
        className={classes.profileInput}
        value={fullName}
        onChange={(e) => handleInputChange(e.target.value)}
        error={!!error}
        fullWidth
      />
      {!hasTyped && (
        <FormHelperText>
          {`Please, note - you won’t be able to change this field later`}
        </FormHelperText>
      )}
      {hasTyped && !error && (
        <FormHelperText>{`15 symbols max.`}</FormHelperText>
      )}
      {error && <NameValidationBox />}
    </>
  )
}

export default NameInput

const useStyles = makeStyles()(() => ({
  title: {
    marginTop: 80,
    marginBottom: 60,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    lineHeight: 1.5,
    fontWeight: 500,
    marginBottom: 45,
    color: theme.palette.text.primary,
    textAlign: 'center',
  },
  profileInput: {
    backgroundColor: theme.customPalette.authBtnBg,
    borderRadius: 10,
    height: 66,
    lineHeight: '66px',
    outline: 'none',
    border: 0,
    '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiInputBase-input.MuiOutlinedInput-input': {
      lineHeight: '66px',
      height: '66px',
      padding: '0 24px',
      fontSize: 18,
      color: theme.customPalette.colorActiveGrey,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 0,
    },
  },
}))
