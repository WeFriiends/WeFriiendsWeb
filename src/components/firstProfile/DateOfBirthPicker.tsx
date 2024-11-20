import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs'
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from 'utils/localStorage'
import { FormHelperText, Typography, Box } from '@mui/material'
import theme from 'styles/createTheme'
import { makeStyles } from 'tss-react/mui'

const DateOfBirthPicker = () => {
  const { classes } = useStyles()

  const [dob, setDob] = React.useState<Dayjs | null>(
    dayjs(getItemFromLocalStorage('dob'))
  )
  const [error, setError] = useState<string | null>(null)

  const validateDate = (dateValue: Dayjs | null) => {
    if (dateValue) {
      const age = new Date().getFullYear() - dateValue.year()
      if (age < 18 || age > 150) {
        setError('Please enter a valid date of birth.')
      } else {
        setError(null)
      }
    }
  }
  const onChangePicker = (newValue: Dayjs | null) => {
    setDob(newValue)
    validateDate(newValue)
    if (error === null) {
      setItemToLocalStorage('dob', newValue)
    }
  }

  return (
    <>
      <Typography variant="h1" className={classes.title} pt={10}>
        {`Let's get started!`}
      </Typography>
      <Typography variant="body1" className={classes.description}>
        {"What's your date of birth?"}
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box className={classes.dateWrapper}>
          <DatePicker
            className={classes.dateInput}
            value={dob}
            onChange={(newValue) => onChangePicker(newValue)}
          />
          {!dob && !error && (
            <FormHelperText>{`Please, note - you won’t be able to change this field later`}</FormHelperText>
          )}
          <FormHelperText>{error}</FormHelperText>
        </Box>
      </LocalizationProvider>
    </>
  )
}

export default DateOfBirthPicker

const useStyles = makeStyles()(() => ({
  title: {
    marginBottom: 60,
    padding: 0,
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
  dateWrapper: {
    maxWidth: 220,
    margin: '0 auto',
  },
  dateInput: {
    backgroundColor: '#FFF1EC',
    borderRadius: 10,
    '& .MuiInputBase-input.MuiOutlinedInput-input': {
      height: 60,
      padding: 0,
      textAlign: 'center',
    },
    '& .MuiButtonBase-root.MuiIconButton-root': {
      padding: '0 20px 0 0',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 0,
    },
  },
}))
