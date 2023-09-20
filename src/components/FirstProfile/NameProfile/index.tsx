import { styled } from '@mui/material/styles'
import {
  Grid,
  Typography,
  Box,
  TextField,
  FormHelperText,
  Button,
} from '@mui/material'
import Logo from '../../logo/logo'
import { useState, useRef, useEffect } from 'react'

const NameProfile = () => {
  const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
    },
    '& input': {
      textAlign: 'center',
    },
  })

  const [fullName, setFullName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [isInvalid, setIsInvalid] = useState(false)

  const handleChange = (event: { target: { value: any } }) => {
    const enteredFullName = event.target.value
    const regex = /^[a-zA-Z\s]+$/

    if (regex.test(enteredFullName) || enteredFullName === '') {
      setIsInvalid(false)
      setFullName(enteredFullName.trim())
    } else {
      setIsInvalid(true)
    }
  }

  useEffect(() => {
    if (inputRef.current !== null) {
      // Добавляем проверку на null
      inputRef.current.focus()
    }
  }, [fullName])

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()

    if (fullName.trim() === '') {
      setErrorMessage('Please enter your full name')
      return
    }
    console.log('Full Name:', fullName)

    sendDataToBackend()
    setFullName('')
    setErrorMessage('')
    window.location.href = '/firstProfile/birth'
  }

  const sendDataToBackend = () => {
    // Replace this with actual API
    const url = 'your-backend-endpoint'

    const data = {
      name: fullName,
    }
    // actual API
    fetch('backend-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: fullName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data sent to backend:', data)
      })
      .catch((error) => {
        console.error('Error sending data to backend:', error)
      })
  }

  return (
    <StyledRoot>
      <Logo />
      <StyledSection>
        <Typography variant="h4" className="title">
          Let´s get started!
        </Typography>
        <Typography variant="body1" className="name">
          What´s your name?
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
              }}
            >
              <CssTextField
                inputRef={inputRef}
                sx={{
                  backgroundColor: '#FFF1EC',
                  borderRadius: 2.5,
                  width: '90%',
                  margin: 'auto',
                  height: '4rem',
                }}
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={fullName}
                onChange={handleChange}
              />
              {isInvalid && (
                <FormHelperText
                  sx={{
                    color: '#F1562A',
                    marginLeft: 0,
                    marginTop: '10px',
                    textAlign: 'center',
                  }}
                >
                  Invalid characters detected. Please enter only letters and
                  spaces.
                </FormHelperText>
              )}
              {errorMessage && (
                <FormHelperText
                  sx={{
                    color: '#F1562A',
                    marginLeft: 0,
                    marginTop: '10 px',
                    textAlign: 'center',
                  }}
                >
                  {errorMessage}
                </FormHelperText>
              )}
            </Grid>
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
          <span className="span">.</span>....
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
}))

const StyledSection = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '90vh',
  '& .title': {
    margin: 'auto',
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

export default NameProfile
