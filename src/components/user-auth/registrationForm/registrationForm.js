
import { useEffect, useState, useRef } from 'react';
import accountRegistration from '../../../actions/accountRegistration';
import ButtonActive from '../../buttonActive/buttonActive';
import Logo from '../../logo/logo';
// import './registrationForm.css'
import useTogglePasswordType from '../../../hooks/useTogglePasswordType';
import { Box, Typography, TextField, Button, OutlinedInput, InputAdornment, IconButton, FormControl, FormHelperText, List, ListItem } from '@mui/material';
import { Diversity2, Visibility, VisibilityOff } from '@mui/icons-material';
import {styled} from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';


const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none'
      },
    },
  });
const RegistrationForm = () => {
    const emailRef = useRef();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [success, setSuccess] = useState(false);
    const [visible, setVisibility] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])


    const handleSubmit = async (e) => {
        e.preventDefault();
        let result = await accountRegistration(pwd, matchPwd, email)
        setSuccess(result)
    }

    // Need a screen and backend to resend the email
    const sendEmail = () => {
        console.log("Sending Email")
    }

    const useTogglePasswordType = () => {
        setVisibility(!visible);
      }
    return (
        <div className='registrationEmail'>
            <Logo />
            {success ? (
                <section>
                    <div className='div-text'>
                        <h1>Just one more step!</h1>
                        <div>
                            <p>We've sent an e-mail to </p>
                            <p className='colorEmail'>
                                {email}</p>
                        </div>
                        <div>
                            <p>to confirm your e-mail.</p>
                            <p>Please, check your mailbox.</p>
                        </div>
                        <h3>Didn't get a e-mail?</h3>
                        <div>
                            <p>Please, check your spam folder or wait a little bit more.</p>
                        </div>
                        <p>Still didn't get it?</p>
                    </div>
                    <ButtonActive name='send  me e-mail again' onClick={sendEmail} />
                </section>

            ) : (
                <Box  
                    mr={2.5} 
                    ml={2.5} 
                    >
                    <Typography
                        variant="h1"
                        fontSize={32} 
                        fontWeight='600' 
                        lineHeight='40px' 
                        pt={10} 
                        pb={2}
                        color='#F46B5D'
                        align='center' >
                        Enter Email
                    </Typography>
                  
                    <form onSubmit={handleSubmit}>
                    <FormControl fullWidth>
                        <Typography                       
                            align="left"
                        >
                            Login
                        </Typography>                                            
                        <CssTextField 
                            sx= {{backgroundColor:"#FFF1EC",borderRadius: 2.5}}
                            fullWidth
                            type="email"
                            id="email"
                            ref = {emailRef}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="emailnote"
                            onFocus={() => setEmailFocus(false)}
                            onBlur={() => setEmailFocus(true)}
                        ></CssTextField>
                        {emailFocus && !validEmail && <FormHelperText sx={{color:"#F1562A"}} id="emailnote">Your Email is not correct</FormHelperText>}
                    </FormControl>
                    <FormControl fullWidth>
                        <Typography 
                            display="block"
                            align="left"
                            marginTop={3}>
                            Password
                        </Typography>                        
                        <OutlinedInput
                            sx= {{backgroundColor:"#FFF1EC", borderRadius: 2.5, outline:"none",
                            "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                border: "none"
                            },
                            }}
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
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(false)}
                            onBlur={(e) => (e.target.value === '' ? setPwdFocus(false) : setPwdFocus(true))}
                        >
                        </OutlinedInput> 
                        {pwdFocus && !validPwd  && <FormHelperText id="pwdnote" component="div">
                            Your Password must have:
                            <List>
                                {(pwd.length > 8) ? <ListItem sx={{color:"#1D878C", padding: 0}}><Box component="img" src='/img/check.svg'></Box>8 or more symbols</ListItem> :
                                                    <ListItem sx={{padding: 0}}>- 8 or more symbols</ListItem>}
                                {(/[0-9]/i.test(pwd)) ? <ListItem sx={{color:"#1D878C", padding: 0}}><Box component="img" src='/img/check.svg'></Box>1 or more numbers</ListItem> :
                                                        <ListItem sx={{padding: 0}}>- 1 or more numbers</ListItem>}
                                                        
                                {(/[a-zA-Z]/i.test(pwd)) ? <ListItem sx={{color:"#1D878C", padding: 0}}><Box component="img" src='/img/check.svg'></Box>1 or more Latin letters</ListItem> :
                                                            <ListItem sx={{padding: 0}}>- 1 or more Latin letters</ListItem>}
                                {(/[~!@#$%^&*()_+`-]/i.test(pwd)) ? <ListItem sx={{color:"#1D878C", padding: 0}}><Box component="img" src='/img/check.svg'></Box>1 or more special characters</ListItem> :
                                                                    <ListItem sx={{padding: 0}}>- 1 or more special characters</ListItem>}
                            </List>
                        </FormHelperText>}
                        </FormControl>
                        <FormControl fullWidth>
                        <Typography 
                            display="block"
                            align="left"
                            marginTop={3}>
                            One more time
                        </Typography> 
                        <OutlinedInput
                            sx= {{backgroundColor:"#FFF1EC", borderRadius: 2.5, outline:"none",
                            "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                border: "none"
                            },
                            }}
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
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={()=> setMatchFocus(false)}
                        >
                        </OutlinedInput>                        
                        {matchFocus && !validMatch && <FormHelperText id="confirmnote" sx={{color:"#F1562A"}}>Must match the first password input field.</FormHelperText>}
                        <Button                            
                            fullWidth 
                            variant="contained"
                            disableElevation 
                            sx={{textTransform:'lowercase', 
                                    backgroundColor:'#FB8F67', 
                                    color:'#FFFFFF', 
                                    height: '56px', 
                                    fontSize:'24px',
                                    fontWeight: "600",
                                    borderRadius:"10px",
                                    marginTop:"45px"}} >
                            submit
                            </Button>
                        {/* <button className='btn' disabled={!validEmail || !validPwd || !validMatch ? true : false}>submit</button> */}
                        </FormControl>
                    </form>
                    
                </Box>
            )}
        </div>
    )
}

export default RegistrationForm