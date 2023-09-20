import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Grid, Typography, Box, Button } from '@mui/material'
import Logo from '../../logo/logo'
import MaleImage from '../media/Male.svg'
import FemaleImage from '../media/Female.svg'
import BackImage from '../media/back.svg'
import { Link } from 'react-router-dom'

const GenderForm = () => {
  const [selectedGender, setSelectedGender] = useState('')

  const handleGenderSelection = (gender: React.SetStateAction<string>) => {
    setSelectedGender(gender)
  }

  const handleNextButtonClick = () => {
    console.log('Selected gender:', selectedGender)
  }

  return (
    <StyledRoot>
      <Logo />
      <Link to="/firstProfile/birth" style={{ textDecoration: 'none' }}>
        <img src={BackImage} alt="back" className="imgBack" />
      </Link>

      <Typography variant="h4" className="title">
        More about you
      </Typography>

      <Typography variant="body1" className="name">
        What´s your gender?
      </Typography>

      <Grid className="buttonGender">
        <img
          src={FemaleImage}
          alt="Female"
          onClick={() => handleGenderSelection('Female')}
          className={selectedGender === 'Female' ? 'invert-color' : ''}
        />
        <img
          src={MaleImage}
          alt="Male"
          onClick={() => handleGenderSelection('Male')}
          className={selectedGender === 'Male' ? 'invert-color' : ''}
        />
        <Button
          className="button1"
          onClick={() => handleGenderSelection('Female')}
          style={{ color: selectedGender === 'Female' ? '#fb8f67' : '#444444' }}
        >
          Female
        </Button>
        <Button
          className="button1"
          onClick={() => handleGenderSelection('Male')}
          style={{ color: selectedGender === 'Male' ? '#fb8f67' : '#444444' }}
        >
          Male
        </Button>
      </Grid>
      <Link
        to="/firstProfile/status"
        style={{ textDecoration: 'none', display: 'flex' }}
      >
        <Button
          className="button"
          variant="contained"
          color="primary"
          type="submit"
          name="Next"
          disabled={!selectedGender}
          onClick={handleNextButtonClick}
          sx={{
            '&:disabled': {
              backgroundColor: '#ffffff',
              color: '#fb8f67',
            },
          }}
        >
          Next
        </Button>
      </Link>

      <Typography variant="h2" className="dot">
        ..<span className="span">.</span>..
      </Typography>

      <img className="imgFooter" src="../img/account-footer.svg" alt="" />
    </StyledRoot>
  )
}
const StyledRoot = styled(Box)(() => ({
  sectionName: {
    display: 'flex',
    flexDirection: 'column',
    height: '90vh',
  },
  '& .imgBack': {
    margin: '5vh auto',
    height: '7vh',
    width: '50px',
    display: 'block',
  },
  '& .title': {
    margin: '5vh auto',
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
    height: '30px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '18px',
    color: '#444444',
    textAlign: 'center',
  },
  '& .buttonGender': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 120px)',
    columnGap: '10px',
    margin: '5vh auto',
    justifyContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
  },
  '& .button1': {
    border: 'none',
    pading: '0 10px',
    backgroundColor: 'transparent',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '18px',
    color: '#444444',
    textAlign: 'center',
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
    textAlign: 'center',
    color: '#f46b5d',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '100px',
  },
  '& .span': {
    color: '#1D878C',
  },
  '& .invert-color': {
    filter: 'invert(10%)',
  },
}))

export default GenderForm
