import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Dayjs } from 'dayjs'
import { setItemToLocalStorage } from 'utils/localStorage'
import { FormHelperText, Typography } from '@mui/material'
import { commonStyles } from 'styles/commonStyles'
import theme from 'styles/createTheme'

const DateOfBirthPicker = () => {
  const commonClasses = commonStyles().classes

  const [dob, setDob] = React.useState<Dayjs | null>(null)
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
      <Typography variant="h1" className={commonClasses.title} pt={10}>
        {`Let's get started!`}
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={dob}
          onChange={(newValue) => onChangePicker(newValue)}
        />
        {!dob && !error && (
          <FormHelperText
            sx={{ color: theme.palette.secondary.main }}
          >{`Please, note - you won’t be able to change this field later`}</FormHelperText>
        )}
        <FormHelperText sx={{ color: theme.palette.primary.dark }}>
          {error}
        </FormHelperText>
      </LocalizationProvider>
    </>
  )
}

export default DateOfBirthPicker
