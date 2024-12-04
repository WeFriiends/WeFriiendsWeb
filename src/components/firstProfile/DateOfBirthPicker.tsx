import React, { useEffect, useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs'
import { getItemFromLocalStorage } from 'utils/localStorage'
import { FormHelperText, Typography, Box } from '@mui/material'
import theme from 'styles/createTheme'
import { makeStyles } from 'tss-react/mui'
import { validateDob } from './utils/validateDob'

interface DateOfBirthPickerProps {
  showWithError: boolean
  onDobChange: (value: Dayjs | null) => void
}

const DateOfBirthPicker = ({
  showWithError = false,
  onDobChange,
}: DateOfBirthPickerProps) => {
  const { classes } = useStyles()
  const initialDob = dayjs(getItemFromLocalStorage('dob'))
  const [error, setError] = useState<string | null>(null)

  const onChangePicker = (newValue: Dayjs | null) => {
    // hide the error on start changing
    setError(null)

    if (newValue === null || !validateDob(newValue)) {
      setError('Invalid date. Please provide a valid date.')
    } else {
      setError(null)
    }
    onDobChange(newValue)
  }

  useEffect(() => {
    if (showWithError) {
      setError('Invalid date. Please provide a valid date.')
    }
  }, [showWithError])

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
            value={dayjs(initialDob)}
            onChange={(newValue) => onChangePicker(newValue)}
          />
          {!error && (
            <FormHelperText>{`Please, note - you won’t be able to change this field later`}</FormHelperText>
          )}
          <FormHelperText error={true}>{error}</FormHelperText>
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
