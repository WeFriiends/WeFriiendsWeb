import { styled } from '@mui/material/styles'
import {
  Grid,
  Typography,
  Box,
  FormControl,
  MenuItem,
  Select,
  FormHelperText,
  Button,
} from '@mui/material'
import Logo from '../../logo/logo'
import BackImage from '../media/back.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const BirthProfile = () => {
  const [formData, setFormData] = useState({
    selectedDay: '',
    selectedMonth: '',
    selectedYear: '',
    isNumeric: false,
  })
  const [error, setError] = useState('')

  const minDay = 1
  const maxDay = 31
  const minMonth = 1
  const maxMonth = 12
  const minYear = 1943
  const maxYear = 2010

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
      isNumeric: /^\d+$/.test(value),
    }))
    setError('')
  }

  const generateOptions = (
    minValue: number,
    maxValue: number
  ): JSX.Element[] => {
    const options: JSX.Element[] = []
    for (let i = minValue; i <= maxValue; i++) {
      const value = i < 10 ? `0${i}` : `${i}`
      options.push(
        <MenuItem key={value} value={value}>
          {value}
        </MenuItem>
      )
    }
    return options
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    if (
      !/^\d+$/.test(formData.selectedDay) ||
      !/^\d+$/.test(formData.selectedMonth) ||
      !/^\d+$/.test(formData.selectedYear)
    ) {
      setError('Please enter your day of birth')
      return
    }

    console.log(formData)

    setError('')
    window.location.href = '/firstProfile/gender'

    // Send data to backend
    // ...
  }

  return (
    <StyledRoot>
      <Logo />
      <Link to="/firstProfile" style={{ textDecoration: 'none' }}>
        <img src={BackImage} alt="back" className="imgBack" />
      </Link>
      <StyledSection>
        <Typography variant="h4" className="title">
          Tell us about you
        </Typography>
        <Typography variant="body1" className="name">
          What´s your day of birth?
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            height="40vh"
          >
            <FormControl sx={{ m: -5, minWidth: 70 }}>
              <Select
                className="select"
                labelId="birth-day-label"
                id="birth-day"
                label="DD"
                name="selectedDay"
                value={formData.selectedDay}
                onChange={handleChange}
                displayEmpty
                sx={{
                  color: formData.isNumeric ? '#444444' : '#D3D3D3',
                }}
              >
                <MenuItem value="" disabled>
                  DD
                </MenuItem>
                {generateOptions(minDay, maxDay)}
              </Select>
            </FormControl>
            <FormControl sx={{ m: -5 }}>
              <Select
                className="select"
                labelId="birth-month-label"
                id="birth-month"
                name="selectedMonth"
                value={formData.selectedMonth}
                onChange={handleChange}
                displayEmpty
                sx={{
                  color: formData.isNumeric ? '#444444' : '#D3D3D3',
                }}
              >
                <MenuItem value="" disabled>
                  MM
                </MenuItem>
                {generateOptions(minMonth, maxMonth)}
              </Select>
            </FormControl>
            <FormControl sx={{ m: -5, minWidth: 70 }}>
              <Select
                className="select"
                labelId="birth-year-label"
                id="birth-year"
                name="selectedYear"
                value={formData.selectedYear}
                onChange={handleChange}
                displayEmpty
                sx={{
                  color: formData.isNumeric ? '#444444' : '#D3D3D3',
                }}
              >
                <MenuItem value="" disabled>
                  YYYY
                </MenuItem>
                {generateOptions(minYear, maxYear)}
              </Select>
            </FormControl>

            {error && (
              <Grid item xs={12}>
                <FormHelperText
                  sx={{ color: '#F1562A', marginLeft: 0, textAlign: 'center' }}
                >
                  {error}
                </FormHelperText>
              </Grid>
            )}

            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
              }}
            >
              <Button
                name="Next"
                variant="contained"
                color="primary"
                className="button"
                type="submit"
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </form>

        <Typography variant="h2" className="dot">
          .<span className="span">.</span>...
        </Typography>
      </StyledSection>
      <img className="imgFooter" src="../img/account-footer.svg" alt="" />
    </StyledRoot>
  )
}

const StyledRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),

  '& .imgBack': {
    margin: '4vh auto',
    height: '7vh',
    width: '50px',
    display: 'block',
  },
}))

const StyledSection = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '80vh',

  '& .select': {
    backgroundColor: '#FFF1EC',
    borderRadius: 10,
    width: '50%',
    margin: 'auto 10vh',
    height: '4rem',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '18px',
    textAlign: 'center',

    '& fieldset': {
      border: 'none',
    },
  },

  '& .title': {
    margin: '3vh auto',
    height: '4rem',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '32px',
    lineHeight: '40px',
    textAlign: 'center',
    color: '#f46b5d',
  },
  '& .name': {
    margin: '4vh auto',
    height: '4rem',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '18px',
    color: '#444444',
  },
  '& .button': {
    width: '90%',
    margin: 'auto',
    height: '4rem',
    background: '#ffffff',
    borderRadius: '10px',
    border: '2px solid #f46b5d',
    color: '#fb8f67',
    fontSize: '18px',
    fontWeight: '600',
    '&:hover': {
      color: '#ffffff',
      background: '#fb8f67',
      border: 'none',
    },
  },
  '& .dot': {
    margin: 'auto 0',
    color: '#f46b5d',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '100px',
    textAlign: 'center',
  },
  '& .span': {
    color: '#1D878C',
  },
}))

export default BirthProfile
