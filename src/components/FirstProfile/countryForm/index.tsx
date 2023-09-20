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

const CountryForm = () => {
  const [formData, setFormData] = useState({
    selectedCountry: '',
  })
  const [error, setError] = useState('')

  const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Argentina',
    'Australia',
    'Austria',
    'Belgium',
    'Brazil',
    'Canada',
    'Chile',
    'China',
    'Colombia',
    'Czech Republic',
    'Denmark',
    'Egypt',
    'Finland',
    'France',
    'Germany',
    'Greece',
    'Hungary',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Japan',
    'Jordan',
    'Kenya',
    'Malaysia',
    'Mexico',
    'Netherlands',
    'New Zealand',
    'Nigeria',
    'Norway',
    'Pakistan',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'Saudi Arabia',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'South Africa',
    'South Korea',
    'Spain',
    'Sweden',
    'Switzerland',
    'Thailand',
    'Turkey',
    'UAE',
    'Ukraine',
    'United Kingdom',
    'United States',
    'Vietnam',
    'Zimbabwe',
  ]

  const handleChange = (event: { target: { value: any } }) => {
    const { value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedCountry: value,
    }))
    setError('')
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    if (!formData.selectedCountry) {
      setError('Please select a country')
      return
    }

    console.log(formData)

    setError('')
    // Continue with your logic
    // ...
  }

  return (
    <StyledRoot>
      <Logo />
      <Link to="/firstProfile/status" style={{ textDecoration: 'none' }}>
        <img src={BackImage} alt="back" className="imgBack" />
      </Link>
      <StyledSection>
        <Typography variant="body1" className="name">
          Select your location
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            height="40vh"
          >
            <FormControl sx={{ alignItems: 'center' }}>
              <Select
                className="select"
                labelId="country-label"
                id="country"
                name="selectedCountry"
                value={formData.selectedCountry}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Select a country
                </MenuItem>
                {countries.map((country) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))}
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

            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Button
                name="Next"
                variant="contained"
                color="primary"
                className="button"
                type="submit"
              >
                Select
              </Button>
            </Grid>
          </Grid>
        </form>

        <Typography variant="h2" className="dot">
          ....<span className="span">.</span>
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
    width: '90vw',
    margin: 'auto 5vw',
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

  '& .name': {
    margin: 'auto',
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

export default CountryForm
