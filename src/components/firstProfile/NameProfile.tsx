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
import useProfileData from '../../hooks/useProfileData'
import axios from 'axios'
import { commonStyles } from 'styles/commonStyles'

const FULLNAME_REGEX = /^[a-zA-Zа-яА-ЯёЁ\s\p{L}]{2,15}$/u

const NameProfile = () => {
  const { classes } = commonStyles()
  const [fullName, setFullName] = useProfileData<string>(
    'profileData.fullName',
    ''
  )
  const [error, setError] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(false)

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
      event.target.value.length >= 2 && !FULLNAME_REGEX.test(event.target.value)
    )
  }

  return (
    <Box className={classes.mainBox}>
      <Logo />
      <Typography variant="h1" className={classes.title} pt={10}>
        Let&apos;s get started!
      </Typography>
      <Typography variant="body1" className={classes.profileText} pt={5}>
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
            className={`${classes.submitButton} ${classes.nextButton}`}
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
