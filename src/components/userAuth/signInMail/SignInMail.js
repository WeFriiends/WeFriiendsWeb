import { useState } from 'react'
import Logo from '../../../common/Logo'
import { useAuthContext } from '../../../hooks/useAuthContext'
import { Navigate } from 'react-router-dom'
import { loginEmail } from 'actions/loginEmail'
import {
  Box,
  OutlinedInput,
  TextField,
  Typography,
  InputAdornment,
  Button,
  FormControl,
  FormHelperText,
} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { styled } from '@mui/material/styles'
import { makeStyles } from 'tss-react/mui'

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
  },
})

const SignInMail = () => {
  const { classes } = useStyles()
  const [inputEmail, setInputEmail] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [successSignIn, setSuccessSignIn] = useState()
  const [error, setError] = useState(false)
  const [errorSignIn, setErrorSignIn] = useState('')
  const { dispatch } = useAuthContext()
  const [visible, setVisibility] = useState(false)

  const checkAndSignIn = async () => {
    const result = await loginEmail(inputEmail, inputPassword)
    if (result.status === 200) {
      setSuccessSignIn(true)
      let user = { token: result.data.token }
      localStorage.setItem('user', user.token)
      dispatch({ type: 'LOGIN', payload: user })
    } else {
      if (!result.response) {
        setError(true)
        setErrorSignIn('No data')
        return
      }
      if (
        result.response.data.message ===
        'Pending Account. Please verify your email to gain access to your profile'
      ) {
        setError(true)
        setErrorSignIn(
          'Please verify your email to gain access to your profile'
        )
      } else {
        setError(true)
        setErrorSignIn('Login or Password is incorrect. Please, try again')
      }
    }
  }

  const useTogglePasswordType = () => {
    setVisibility(!visible)
  }
  return (
    <Box className={classes.mainBox}>
      {successSignIn && <Navigate to="/test" />}
      <Logo />
      <Typography variant="h1" className={classes.title} pt={10}>
        Sign In
      </Typography>
      <form>
        <FormControl fullWidth>
          <Typography variant="p" align="left" marginTop={2.5}>
            Login
          </Typography>
          <CssTextField
            sx={{ backgroundColor: '#FFF1EC', borderRadius: 2.5 }}
            type="email"
            id="email"
            onChange={(e) => setInputEmail(e.target.value)}
          ></CssTextField>
          <Typography variant="p" align="left" marginTop={3}>
            Password
          </Typography>
          <OutlinedInput
            className={classes.loginInput}
            type={visible ? 'text' : 'password'}
            id="password"
            onChange={(e) => setInputPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={useTogglePasswordType}
                >
                  {visible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          ></OutlinedInput>
          {error && (
            <FormHelperText sx={{ color: '#F1562A', marginLeft: 0 }}>
              {errorSignIn}
            </FormHelperText>
          )}
        </FormControl>
      </form>
      {/* <Link
        display="block"
        marginTop={3}
        marginBottom={6}
        href="#"
        className={classes.link}
      >
        Forgot Password?
      </Link> */}
      <Button
        onClick={checkAndSignIn}
        fullWidth
        variant="contained"
        disableElevation
        disableRipple
        className={classes.loginBtn}
      >
        Sign In
      </Button>
    </Box>
  )
}

export default SignInMail

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
    },
    loginInput: {
      backgroundColor: '#FFF1EC',
      borderRadius: 2.5,
      outline: 'none',
      '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
    link: {
      textDecoration: 'none',
      color: '#444444',
    },
    loginBtn: {
      textTransform: 'lowercase',
      backgroundColor: '#FB8F67',
      color: '#FFFFFF',
      height: 56,
      fontSize: 24,
      fontWeight: 600,
      borderRadius: 10,
      '&: hover': {
        backgroundColor: '#FB8F67',
      },
      marginTop: 45,
    },
  }
})
