import { useState } from 'react'
import TextField from '@mui/material/TextField'
import { makeStyles } from 'tss-react/mui'
import theme from 'styles/createTheme'
import { FormHelperText, Typography, Box } from '@mui/material'
import { setItemToLocalStorage } from 'utils/localStorage'
import { commonStyles } from 'styles/commonStyles'
import NameValidationBox from './NameValidationBox'

const NameInput = () => {
  const { classes } = useStyles()
  const commonClasses = commonStyles().classes

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
      <Typography variant="h1" className={commonClasses.title} pt={10}>
        {`Let's get started!`}
      </Typography>
      <TextField
        className={classes.profileInput}
        value={fullName}
        onChange={(e) => handleInputChange(e.target.value)}
        error={!!error}
        // helperText={hasTyped && (error || '15 symbols max.')}
        fullWidth
      />
      {!hasTyped && (
        <FormHelperText sx={{ color: '#1D878C' }}>
          {`Please, note - you won’t be able to change this field later`}
        </FormHelperText>
      )}
      {hasTyped && !error && (
        <FormHelperText sx={{ color: '#1D878C' }}>
          {`15 symbols max.`}
        </FormHelperText>
      )}
      {error && <NameValidationBox />}
    </>
  )
}

export default NameInput

const useStyles = makeStyles()(() => ({
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
}))
