import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { Grid, Typography, Box, TextField, Button } from '@mui/material'
import Logo from '../../logo/logo'
import BackImage from '../media/back.svg'

export default function StatusForm() {
  const [fullName, setFullName] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('')

  const handleStatusSelection = (status) => {
    setSelectedStatus(status)
  }

  const handleNextButtonClick = () => {
    console.log('Selected status:', selectedStatus)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Handle form submission and data sending logic here
  }

  return (
    <StyledRoot>
      <Logo />
      <Link to="/firstProfile/gender" style={{ textDecoration: 'none' }}>
        <img src={BackImage} alt="back" className="imgBack" />
      </Link>

      <Typography className="title" variant="h4">
        What are you looking for?
      </Typography>

      <Typography variant="body1" className="name">
        This will be your status. You can always change it.
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          height="60vh"
          className="buttonStatus"
        >
          <Button
            variant="outlined"
            color="primary"
            className="button1"
            onClick={() => handleStatusSelection('Looking for new friends')}
          >
            Looking for new friends
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="button1"
            onClick={() => handleStatusSelection('I`m a new mom')}
          >
            I`m a new mom
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="button1"
            onClick={() =>
              handleStatusSelection('Let`s take the dogs for a walk')
            }
          >
            Let`s take the dogs for a walk
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="button1"
            onClick={() =>
              handleStatusSelection('I`m learning a new languge. Let`s talk!')
            }
          >
            I`m learning a new languge. Let`s talk!
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="button1"
            onClick={() =>
              handleStatusSelection('Let`s be friends, I`m new in town')
            }
          >
            Let`s be friends, I`m new in town
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="button1"
            onClick={() =>
              handleStatusSelection('How do you do it? Share your experience')
            }
          >
            How do you do it? Share your experience
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="button1"
            onClick={() => handleStatusSelection('My plans are to move abroad')}
          >
            My plans are to move abroad
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className="button1"
            onClick={() =>
              handleStatusSelection('I look for emotional support')
            }
          >
            I look for emotional support
          </Button>
        </Grid>
        <TextField
          variant="outlined"
          fullWidth
          label="Is there anything you'd like to add?"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          className="input"
        />

        <Grid item xs={12}>
          <Button
            name="Next"
            variant="contained"
            color="primary"
            className="button"
            type="submit"
            onClick={handleNextButtonClick}
          >
            Next
          </Button>
        </Grid>
      </form>
      <Typography variant="h2" className="dot">
        ...<span className="span">.</span>.
      </Typography>

      <img className="imgFooter" src="../img/account-footer.svg" alt="" />
    </StyledRoot>
  )
}
const StyledRoot = styled(Box)(({ theme }) => ({
  sectionName: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  '& .imgBack': {
    margin: '5vh auto',
    height: '5vh',
    width: '30px',
    display: 'block',
  },
  '& .title': {
    margin: '5vh auto',
    height: '5vh',
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
    height: '5vh',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '18px',
    color: '#444444',
    textAlign: 'center',
  },
  '& .buttonStatus': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 320px)',
    columnGap: '5px',
    margin: '5vh auto',
    justifyContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
  },
  '& .button1': {
    border: 'none',
    borderRadius: '30px',
    height: '4rem',
    fontSize: '12px',
    color: '#444444',
    pading: '0 5px',
    background: '#f2f2f2',
    textAlign: 'center',
    '&:hover': {
      background: '#FFF1EC',
      border: 'none',
    },
  },
  '& .input': {
    width: '90%',
    color: '#F1562A',
    margin: '5vh 10vh',
    borderRadius: '10px',
    height: '4rem',
    textAlign: 'center',
  },
  '& .button': {
    width: '90%',
    margin: 'auto 10vh',
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
    textAlign: 'center',
  },
  '& .span': {
    color: '#1D878C',
  },
}))
