import Logo from '../logo/Logo'
import {
  Box,
  Button,
  FormControl, FormHelperText,
  OutlinedInput,
  TextField,
  Typography
} from "@mui/material";
import { makeStyles } from "tss-react/mui"
import { styled } from "@mui/material/styles"
import { useState } from "react";

const FULLNAME_REGEX = /^[a-zA-Z\s]{2,50}$/

const NameProfile = () => {

  const [fullName, setFullName] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [isValid, setIsValid] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(0)


  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if(!fullName.trim() && currentPage === 0){
      setError('Please enter your full name')
      return;
    }else{
      console.log('fullName:', fullName)
      setCurrentPage((prevPage) => prevPage + 1)
      setFullName('')
      setError('')
    }
  }

  const handleInputChange = (event: { target: { value: any } }) => {
    if(FULLNAME_REGEX.test(event.target.value) || event.target.value === ''){
      setIsValid(false)
      setFullName(event.target.value)
      console.log(fullName)
    }else{
      setIsValid(true)
    }
  }

  const { classes } = useStyles()
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

  return (
    <Box className={classes.mainBox}>
      <Logo />
      <Typography variant="h1" className={classes.title} pt={10}>
        Let's get started!
      </Typography>
      <Typography variant="body1" className={classes.text} pt={5}>
        What's your name?
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth>
          <CssTextField>
            sx={{ backgroundColor: '#FFF1EC', borderRadius: 2.5 }}
            type="text"
            id="name"
          </CssTextField>
        <OutlinedInput
          className={classes.profileInput}
          type="text"
          id="fullName"
          onChange={handleInputChange}
        ></OutlinedInput>
          {isValid && (
            <FormHelperText sx={{ color: '#F1562A' }}>
              Invalid name. Please enter valid full name.
            </FormHelperText>
          )}
          {error && (
            <FormHelperText sx={{ color: '#F1562A' }}>
              {error}
            </FormHelperText>
          )}
          <Button
            fullWidth
            variant="outlined"
            className={classes.nextButton}
            type="submit"
            onClick={handleSubmit}
          >
            Next
          </Button>
          <Typography variant="h2"
                      className={classes.dot}>
            <span className={classes.span}>.</span>....
          </Typography>
        </FormControl>
      </form>
    </Box>
  )
}
export default NameProfile

const useStyles = makeStyles()((theme) => {
  return {
    mainBox: {
      marginLeft: 20,
      marginRight: 20,
      [theme.breakpoints.up('sm')]: {
        width: 400,
        margin: '0 auto',
      },
    },
    title: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: '40px',
      color: '#F46B5D',
      textAlign: 'center',
    },
    text: {
      fontSize: 18,
      lineHeight: '27px',
      color: '#444444',
      textAlign: 'center',
    },
    profileInput: {
      backgroundColor: '#FFF1EC',
      borderRadius: 10,
      outline: 'none',
      '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
    nextButton: {
      textTransform: 'capitalize',
      backgroundColor: '#FFFFFF',
      border: '2px solid #FB8F67',
      color: '#FB8F67',
      height: 56,
      fontSize: 18,
      fontWeight: 600,
      borderRadius: 10,
      '&: hover': {
        backgroundColor: '#FB8F67',
        color: '#FFFFFF',
        border: '2px solid #FB8F67',
      },
      marginTop: 70,
    },
    dot: {
      margin: 'auto 0',
      color: '#f46b5d',
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: '100px',
      textAlign: 'center',
    },
    span: {
      color: '#1D878C',
    },
    textCenter: {
      textAlign: 'center',
    },
  }
})
