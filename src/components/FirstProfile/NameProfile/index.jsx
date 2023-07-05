import { styled } from '@mui/material/styles'
import { Grid, Typography, Box, TextField, FormHelperText } from '@mui/material'
import Buttonactive from '../../buttonActive/buttonActive'
import Logo from '../../logo/logo'
import { useState } from 'react'

const NameProfile = () => {
  const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
    },
  })

  const [name, setName] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (name.trim() === '') {
      setErrorMessage('Please enter your name')
      return
    }

    //  API request here
    console.log('Name:', name)

    const resetName = () => {
      setName('')
    }

    resetName()

    setErrorMessage('')
  }
  return (
    <StyledRoot>
      {/* <img className="imgHeader" src="../img/account-header.svg" alt="" /> */}
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
            <Grid item xs={12}>
              <CssTextField
                sx={{
                  backgroundColor: '#FFF1EC',
                  borderRadius: 2.5,
                  width: '90%',
                  margin: 'auto 10vh',
                  height: '4rem',
                }}
                type="text"
                name="name"
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></CssTextField>
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
            <Grid item xs={12}>
              <Buttonactive
                name="Next"
                variant="contained"
                color="primary"
                className="button"
              ></Buttonactive>
            </Grid>
          </Grid>
        </form>
        <Typography variant="h2" className="dot">
          .....
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
  height: '90vh',
  '& .title': {
    margin: '10vh auto',
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
    margin: '5vh auto',
    height: '4rem',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '18px',
    color: '#444444',
  },
  '& .button': {
    '&:hover': {
      color: '#f46b5d',
      background: 'white',
      border: '2px solid #f46b5d',
    },
  },
  '& .dot': {
    color: '#f46b5d',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '100px',
    textAlign: 'center',
  },
}))

export default NameProfile
