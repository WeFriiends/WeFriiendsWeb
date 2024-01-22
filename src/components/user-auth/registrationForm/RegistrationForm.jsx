import { useEffect, useState, useRef } from 'react'
import accountRegistration from '../../../actions/accountRegistration'
import Logo from '../../logo/Logo'
import {
  Box,
  Typography,
  TextField,
  Button,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  FormHelperText,
  List,
  ListItem,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import { makeStyles } from 'tss-react/mui'

const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%]).{8,24}$/
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
    },
  },
})
const RegistrationForm = () => {
  const { classes } = useStyles()
  const emailRef = useRef()

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)

  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch] = useState(false)
  const [matchFocus, setMatchFocus] = useState(false)

  const [success, setSuccess] = useState(false)
  const [visible, setVisibility] = useState(false)

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  useEffect(() => {
    const result = EMAIL_REGEX.test(email)
    setValidEmail(result)
  }, [email])

  useEffect(() => {
    const result = PWD_REGEX.test(pwd)
    setValidPwd(result)
    const match = pwd === matchPwd
    setValidMatch(match)
  }, [pwd, matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let result = await accountRegistration(pwd, matchPwd, email)
    setSuccess(result)
  }

  // Need a screen and backend to resend the email
  // const sendEmail = () => {
  //   console.log('Sending Email')
  // }

  const useTogglePasswordType = () => {
    setVisibility(!visible)
  }
  return (
    <div className="registrationEmail">
      <Logo />
      {success ? (
        <Box className={classes.mainBox}>
          <Box mr={5} ml={5}>
            <Typography className={classes.title}>
              Just one more step!
            </Typography>
            <Box mb={5} mt={3}>
              <Typography variant="body1" className={classes.text}>
                We’ve sent an e-mail to{' '}
              </Typography>
              <Typography variant="body1" className={classes.textColor}>
                {email}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" className={classes.text}>
                to confirm your e-mail.
              </Typography>
              <Typography variant="body1" className={classes.text}>
                Please, check your inbox.
              </Typography>
            </Box>
            {/* <Typography variant="h3" className={classes.subTitle}>
              Didn’t get a e-mail?
            </Typography>
            <Box mb={7}>
              <Typography variant="body1" className={classes.text}>
                Please, check your spam folder or wait a little bit more.
              </Typography>
            </Box>
            <Typography variant="body1" className={classes.text}>
              Still didn’t get it?
            </Typography> */}
          </Box>
          {/* <Button
            fullWidth
            variant="contained"
            disableElevation
            onClick={sendEmail}
            className={classes.submitButton}
          >
            send me e-mail again
          </Button> */}
        </Box>
      ) : (
        <Box className={classes.mainBox}>
          <Typography className={classes.title}> Enter Email </Typography>
          <form>
            <FormControl fullWidth>
              <Typography align="left">Login</Typography>
              <CssTextField
                sx={{ backgroundColor: '#FFF1EC', borderRadius: 2.5 }}
                fullWidth
                type="email"
                id="email"
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={validEmail ? 'false' : 'true'}
                aria-describedby="emailnote"
                onFocus={() => setEmailFocus(false)}
                onBlur={() => setEmailFocus(true)}
              ></CssTextField>
              {emailFocus && !validEmail && (
                <FormHelperText sx={{ color: '#F1562A' }} id="emailnote">
                  Your Email is not correct
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth>
              <Typography display="block" align="left" marginTop={3}>
                Password
              </Typography>
              <OutlinedInput
                className={classes.borderAndBackgroundButton}
                fullWidth
                type={visible ? 'text' : 'password'}
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                required
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
                aria-invalid={validPwd ? 'false' : 'true'}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(false)}
                onBlur={(e) =>
                  e.target.value === '' ? setPwdFocus(false) : setPwdFocus(true)
                }
              ></OutlinedInput>
              {pwdFocus && !validPwd && (
                <FormHelperText id="pwdnote" component="div">
                  Your Password must have:
                  <List>
                    {pwd.length > 8 ? (
                      <ListItem sx={{ color: '#1D878C', padding: 0 }}>
                        <Box component="img" src="/img/check.svg"></Box>8 or
                        more symbols
                      </ListItem>
                    ) : (
                      <ListItem sx={{ padding: 0 }}>
                        - 8 or more symbols
                      </ListItem>
                    )}
                    {/[0-9]/i.test(pwd) ? (
                      <ListItem sx={{ color: '#1D878C', padding: 0 }}>
                        <Box component="img" src="/img/check.svg"></Box>1 or
                        more numbers
                      </ListItem>
                    ) : (
                      <ListItem sx={{ padding: 0 }}>
                        - 1 or more numbers
                      </ListItem>
                    )}

                    {/[a-zA-Z]/i.test(pwd) ? (
                      <ListItem sx={{ color: '#1D878C', padding: 0 }}>
                        <Box component="img" src="/img/check.svg"></Box>1 or
                        more Latin letters
                      </ListItem>
                    ) : (
                      <ListItem sx={{ padding: 0 }}>
                        - 1 or more Latin letters
                      </ListItem>
                    )}
                    {/[~!@#$%^&*()_+`-]/i.test(pwd) ? (
                      <ListItem sx={{ color: '#1D878C', padding: 0 }}>
                        <Box component="img" src="/img/check.svg"></Box>1 or
                        more special characters
                      </ListItem>
                    ) : (
                      <ListItem sx={{ padding: 0 }}>
                        - 1 or more special characters
                      </ListItem>
                    )}
                  </List>
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth>
              <Typography display="block" align="left" marginTop={3}>
                One more time
              </Typography>
              <OutlinedInput
                className={classes.borderAndBackgroundButton}
                fullWidth
                type={visible ? 'text' : 'password'}
                id="confrimPassword"
                onChange={(e) => setMatchPwd(e.target.value)}
                required
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
                aria-invalid={validMatch ? 'false' : 'true'}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              ></OutlinedInput>
              {matchFocus && !validMatch && (
                <FormHelperText id="confirmnote" sx={{ color: '#F1562A' }}>
                  Must match the first password input field.
                </FormHelperText>
              )}
              <Button
                fullWidth
                variant="contained"
                disableElevation
                onClick={handleSubmit}
                disabled={
                  !validEmail || !validPwd || !validMatch ? true : false
                }
                className={classes.submitButton}
              >
                submit
              </Button>
            </FormControl>
          </form>
        </Box>
      )}
    </div>
  )
}

export default RegistrationForm

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
      paddingTop: 80,
      paddingBottom: 16,
      color: '#F46B5D',
      textAlign: 'center',
    },
    subTitle: {
      fontSize: 22,
      fontWeight: 600,
      lineHeight: '40px',
      paddingTop: 28,
      paddingBottom: 8,
      color: '#F46B5D',
      textAlign: 'center',
    },
    text: {
      fontSize: 18,
      lineHeight: '22px',
      textAlign: 'center',
    },
    textColor: {
      fontSize: 18,
      lineHeight: '22px',
      textAlign: 'center',
      color: '#FB8F67',
    },
    borderAndBackgroundButton: {
      backgroundColor: '#FFF1EC',
      borderRadius: 10,
      outline: 'none',
      '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
    submitButton: {
      textTransform: 'lowercase',
      backgroundColor: '#FB8F67',
      color: '#FFFFFF',
      height: 56,
      fontSize: 18,
      fontWeight: 600,
      borderRadius: 10,
      marginTop: 45,
      ':disabled': {
        backgroundColor: '#FFFFFF',
        border: '2px solid #FB8F67',
        color: '#FB8F67',
      },
      '&: hover': {
        backgroundColor: '#FB8F67',
      },
    },
  }
})
