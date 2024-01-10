import Logo from '../logo/Logo'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  OutlinedInput,
  Typography,
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useState } from "react";

const FULLNAME_REGEX = /^[a-zA-Z\s]{2,50}$/

const NameProfile = () => {
  const { classes } = useStyles()
  const [fullName, setFullName] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(false)

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!fullName.trim()) {
      setError('Please enter your full name')
    } else {
      setFullName('')
      const profileData = {
        fullName,
      }
      localStorage.setItem('profileData', JSON.stringify(profileData))
    }
  }

  const handleInputChange = (event: { target: { value: string } }) => {
    setError('')
    if (FULLNAME_REGEX.test(event.target.value) || event.target.value === '') {
      setIsValid(false)
      setFullName(event.target.value)
    } else {
      setIsValid(true)
    }
  }


  return (
    <Box className={classes.mainBox}>
      <Logo />
      <Typography variant="h1" className={classes.title} pt={10}>
        Let's get started!
      </Typography>
      <Typography variant="body1" className={classes.text} pt={5}>
        What's your name?
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
            <FormHelperText sx={{ color: '#F1562A' }}>
              Invalid name. Please enter valid full name.
            </FormHelperText>
          )}
          {error && (
            <FormHelperText sx={{ color: '#F1562A' }}>{error}</FormHelperText>
          )}
          <Button
            fullWidth
            variant="outlined"
            className={classes.nextButton}
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

const useStyles = makeStyles()((theme) => {
  return {
    mainBox: {
      marginLeft: 20,
      marginRight: 20,
      [theme.breakpoints.up('sm')]: {
        width: 400,
        margin: '0 auto',
      },
    },
    title: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: '40px',
      color: '#F46B5D',
      textAlign: 'center',
    },
    text: {
      fontSize: 18,
      lineHeight: '27px',
      color: '#444444',
      textAlign: 'center',
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
      border: '2px solid #FB8F67',
      color: '#FB8F67',
      height: 56,
      fontSize: 18,
      fontWeight: 600,
      borderRadius: 10,
      '&: hover': {
        backgroundColor: '#FB8F67',
        color: '#FFFFFF',
        border: '2px solid #FB8F67',
      },
      marginTop: 70,
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
    textCenter: {
      textAlign: 'center',
    },
  }
})
