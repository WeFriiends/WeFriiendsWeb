import Logo from '../logo/Logo'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  OutlinedInput,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { makeStyles } from 'tss-react/mui'
import { commonStyles } from 'styles/commonStyles'

const FULLNAME_REGEX = /^[a-zA-Zа-яА-ЯёЁ\s\p{L}]{2,15}$/u

const NameProfile = () => {
  const { classes } = useStyles()
  const commonClasses = commonStyles().classes
  const [fullName, setFullName] = useState('')
  const [error, setError] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(false)

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (fullName.trim() === '') {
      setError('Please enter your full name')
    } else {
      setError('')
      setIsValid(false)
      setFullName('')
    }
  }

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
      <form onSubmit={handleSubmit}>
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
          <Button
            fullWidth
            variant="outlined"
            className={`${commonClasses.submitButton} ${classes.nextButton}`}
            type="submit"
            onClick={handleSubmit}
          >
            Next
          </Button>
          <Typography variant="h2" className={classes.dot}>
            <span className={classes.span}>.</span>....
          </Typography>
        </FormControl>
      </form>
    </Box>
  )
}
export default NameProfile

const useStyles = makeStyles()(() => {
  return {
    profileText: {
      fontSize: 18,
      lineHeight: '27px',
      color: '#444444',
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
    nextButton: {
      textTransform: 'capitalize',
      backgroundColor: '#FFFFFF',
      color: '#F46B5D',
      border: '2px solid #FB8F67',
      ':disabled': {
        backgroundColor: '#FFFFFF',
        border: '2px solid #FB8F67',
        color: '#F46B5D',
      },
      '&:hover:not(:disabled)': {
        backgroundColor: '#F46B5D',
        color: '#FFFFFF',
        border: '2px solid #FB8F67',
      },
    },
    dot: {
      margin: 'auto 0',
      color: '#f46b5d',
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: '100px',
      textAlign: 'center',
    },
    span: {
      color: '#1D878C',
    },
  }
})
