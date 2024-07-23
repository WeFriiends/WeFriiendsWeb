// DatePicker.tsx
import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { Dayjs } from 'dayjs'
import { setItemToLocalStorage } from 'utils/localStorage'

const DateOfBirthPicker = () => {
  const [value, setValue] = React.useState<Dayjs | null>(null)
  const [error, setError] = useState<string | null>(null)

  const validateDate = () => {
    if (!value) {
      setError('Date of birth is required.')
      return false
    }
    // const age = new Date().getFullYear() - value.getFullYear()
    // if (age < 0 || age > 150) {
    //   setError('Please enter a valid date of birth.')
    //   return false
    // }
    setError(null)
    return true
  }
  const onChangePicker = (newValue: Dayjs | null) => {
    setValue(newValue)
    validateDate()
    setItemToLocalStorage('dob', newValue)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={value}
        onChange={(newValue) => onChangePicker(newValue)}
        // renderInput={(params) => (
        //   <TextField
        //     {...params}
        //     fullWidth
        //     variant="outlined"
        //     error={!!error}
        //     helperText={error}
        //     onBlur={validateDate}
        //   />
        // )}
      />
    </LocalizationProvider>
  )
}

export default DateOfBirthPicker
