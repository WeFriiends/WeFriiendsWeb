import React, { useState } from 'react'
import Logo from '../logo/Logo'
import {
  Box,
  FormControl,
  FormHelperText,
  OutlinedInput,
  Typography,
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { commonStyles } from 'styles/commonStyles'
import theme from 'styles/createTheme'

const BirthdayForm = () => {
  const { classes } = useStyles()
  const commonClasses = commonStyles().classes
  const [dateOfBirth, setDateOfBirth] = useState<string>('')
  const [error, setError] = useState<string>('')
  const handleDateOfBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '')

    let formattedDate = input
    if (input.length > 2) {
      formattedDate = `${formattedDate.slice(0, 2)}/${input.slice(2)}`
    }
    if (input.length > 4) {
      formattedDate = `${formattedDate.slice(0, 5)}/${formattedDate.slice(5)}`
    }
    setDateOfBirth(formattedDate)

    if (formattedDate.length === 10) {
      validateDate(formattedDate)
    } else {
      setError('')
    }
  }

  const validateDate = (dateString: string) => {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
    if (!dateRegex.test(dateString)) {
      setError('Invalid date. Please provide a valid date.')
      return
    }
    const [day, month, year] = dateString.split('/').map(Number)
    const parsedDate = new Date(`${year}-${month}-${day}`)
    const today = new Date()

    if (parsedDate > today) {
      setError('Invalid date. Please provide a valid date.')
      return
    }
    const age = today.getFullYear() - parsedDate.getFullYear()
    const monthDiffer = today.getMonth() - parsedDate.getMonth()
    const dayDiffer = today.getDate() - parsedDate.getDate()

    if (age > 100) {
      setError('Invalid date. Please provide a valid date.')
    } else if (
      age < 18 ||
      (age === 18 && (monthDiffer < 0 || (monthDiffer === 0 && dayDiffer < 0)))
    ) {
      setError(
        'Unfortunately, we are unable to register anyone under 18 years old.'
      )
    } else {
      setError('')
    }
  }
  return (
    <Box className={commonClasses.mainBox}>
      <Logo />
      <Typography variant="h1" className={commonClasses.title} pt={10}>
        More about you.
      </Typography>
      <Typography
        variant="body1"
        className={`${commonClasses.text} ${classes.profileText}`}
        pt={5}
      >
        What&apos;s your date of birth?
      </Typography>
      <FormControl>
        <OutlinedInput
          className={classes.profileInput}
          type="text"
          value={dateOfBirth}
          onChange={handleDateOfBirthChange}
          placeholder="DD/MM/YYYY"
          inputProps={{ maxLength: 10 }}
          required
        />
        {error && (
          <FormHelperText sx={{ color: '#F1562A' }}>{error}</FormHelperText>
        )}
      </FormControl>
    </Box>
  )
}

export default BirthdayForm

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
