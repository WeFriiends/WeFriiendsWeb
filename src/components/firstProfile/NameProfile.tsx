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
import { useState } from 'react'
import useLocalStorageState from '../../hooks/useLocalStorageState'
import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid'

const FULLNAME_REGEX = /^[a-zA-Zа-яА-ЯёЁ\s\p{L}]{2,15}$/u

const NameProfile = () => {
  const { classes } = useStyles()
  const [fullName, setFullName] = useLocalStorageState<string>(
    'profileData.fullName',
    ''
  )
  const [error, setError] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(false)

  // const userId = //
  // const requestBody = {
  //   id: userId,
  //   name: fullName,
  // }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    if (fullName.trim() === '') {
      setError('Please enter your full name')
    } else if (!FULLNAME_REGEX.test(fullName)) {
      setIsValid(true)
    } else {
      try {
        await axios.post('api/addName', fullName)
        setError('')
        setIsValid(false)
        setFullName('')
      } catch (error) {
        console.error('Error saving profile:', error)
      }
    }
  }

  const handleInputChange = (event: { target: { value: string } }) => {
    setError('')
    setFullName(event.target.value)
    setIsValid(
      event.target.value.length >= 2        
    && !FULLNAME_REGEX.test(event.target.value)
    )
  }

  return (
    <Box className={classes.mainBox}>
      <Logo />
      <Typography variant="h1" className={classes.title} pt={10}>
        Let&apos;s get started!
      </Typography>
      <Typography variant="body1" className={classes.text} pt={5}>
        What&apos;s your name?
      </Typography>
      <form>
        <FormControl fullWidth>
          <OutlinedInput
            className={classes.profileInput}
            type="text"
            id="fullName"
            onChange={handleInputChange}
          ></OutlinedInput>
          {isValid && (
            <FormHelperText sx={{ color: '#F1562A' }}>
              Your name must be 2 to 15 letters, no numbers, symbols or bad words.  
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
