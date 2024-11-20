import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import { makeStyles } from 'tss-react/mui'
import theme from 'styles/createTheme'
import { FormHelperText, Typography } from '@mui/material'
import { getItemFromLocalStorage } from 'utils/localStorage'
import { validateName } from '../utils/validateName'

// todo: Validation for all the steps of First Profile Carousel.
// todo: check for working backend WeFriendsProfile, showing the error if it is not running.
// todo: add instruction to ReadMe: how to run backend.

interface NameInputProps {
  showWithError: boolean
  onNameChange: (value: string) => void
}

const NameInput = ({ showWithError = false, onNameChange }: NameInputProps) => {
  const { classes } = useStyles()
  const [fullName, setFullName] = useState(getItemFromLocalStorage('name'))
  const [hasError, setHasError] = useState(false)
  //'Name should contain 2-15 letters only, spaces allowed in between, without numbers or special characters.'
  const [hasTyped, setHasTyped] = useState(false)

  const handleInputChange = (value: string) => {
    setFullName(value) // show text in input
    setHasTyped(true)
    if (validateName(value)) {
      setHasError(true)
    } else {
      setHasError(false)
    }
    onNameChange(value)
  }

  useEffect(() => {
    if (showWithError) {
      setHasTyped(true)
      setHasError(true)
    }
  }, [showWithError, fullName])

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
        fullWidth
      />
      {!hasTyped && (
        <FormHelperText>
          {`Please, note - you won’t be able to change this field later`}
        </FormHelperText>
      )}
      {hasTyped && !hasError && (
        <FormHelperText>{`15 symbols max.`}</FormHelperText>
      )}
      {hasError && (
        <FormHelperText className={classes.errorBox}>
          <h4>Your name</h4>
          <p>- shouldn’t contain numbers</p>
          <p>- has 2-15 symbols</p>
          <p>- has no special characters</p>
        </FormHelperText>
      )}
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
  errorBox: {
    width: '100%',
    padding: 20,
    boxShadow: '0px 0px 5px #D9D9D9',
    borderRadius: 10,
    color: '#F1562A',
    textAlign: 'left',
    h4: {
      fontSize: 14,
      lineHeight: '22px',
      fontWeight: 500,
      marginBottom: 10,
    },
    p: {
      fontSize: 12,
      lineHeight: '18px',
    },
  },
}))
