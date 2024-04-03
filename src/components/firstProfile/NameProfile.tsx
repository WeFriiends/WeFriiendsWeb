import Logo from '../logo/Logo'
import {
  Box,
  FormControl,
  FormHelperText,
  OutlinedInput,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import { commonStyles } from 'styles/commonStyles'
import theme from 'styles/createTheme'

const FULLNAME_REGEX = /^[a-zA-Zа-яА-ЯёЁ\s\p{L}]{2,15}$/u

const NameProfile = () => {
  const { classes } = useStyles()
  const commonClasses = commonStyles().classes
  const [fullName, setFullName] = useState('')
  const [error, setError] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(false)

  const handleInputChange = (event: { target: { value: string } }) => {
    setError('')
    setFullName(event.target.value)
    setIsValid(
      event.target.value.length >= 2 && !FULLNAME_REGEX.test(event.target.value)
    )
  }

  return (
    <Box className={commonClasses.mainBox}>
      <Logo />
      <Typography variant="h1" className={commonClasses.title} pt={10}>
        Let&apos;s get started!
      </Typography>
      <Typography
        variant="body1"
        className={`${commonClasses.text} ${classes.profileText}`}
        pt={5}
      >
        What&apos;s your name?
      </Typography>

      <FormControl fullWidth>
        <OutlinedInput
          className={classes.profileInput}
          type="text"
          id="fullName"
          onChange={handleInputChange}
        ></OutlinedInput>
        {isValid && (
          <FormHelperText sx={{ color: '#1D878C' }}>
            15 symbols max.
          </FormHelperText>
        )}
        {error && (
          <FormHelperText sx={{ color: '#1D878C' }}>{error}</FormHelperText>
        )}
      </FormControl>
    </Box>
  )
}
export default NameProfile

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
