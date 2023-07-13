import { styled } from '@mui/material/styles'
import { Grid, Typography, Box, Button } from '@mui/material'
import Logo from '../../logo/logo'
import MaleImage from '../media/Male.svg'
import FemaleImage from '../media/Female.svg'
import BackImage from '../media/back.svg'
import { Link } from 'react-router-dom'

const GenderForm = () => {
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
        <img src={FemaleImage} alt="Female" />
        <img src={MaleImage} alt="Male" />
        <Button className="button1">Female</Button>
        <Button className="button1">Male</Button>
      </Grid>

      <Button
        className="button"
        variant="contained"
        color="primary"
        type="submit"
        name="Next"
      >
        Next
      </Button>

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
    height: '30px',
    width: '30px',
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
    columnGap: '5px',
    margin: '5vh auto',
    justifyContent: 'center',
  },
  '& .button1': {
    border: 'none',
    backgroundColor: 'transparent',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '18px',
    color: '#444444',
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
  },
  '& .span': {
    color: '#1D878C',
  },
}))

export default GenderForm
