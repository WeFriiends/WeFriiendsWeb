import { useState } from "react";
import Logo from "../../logo/logo";
import ButtonActive from "../../buttonActive/buttonActive";
import "./signInMail.css";
import axios from "axios";
import { useAuthContext } from "../../../hooks/useAuthContext";
import useTogglePasswordType from "../../../hooks/useTogglePasswordType";
import { Navigate } from "react-router-dom";
import LoginEmail from "../../../actions/loginEmail";
import { Container, OutlinedInput, TextField, Typography, InputAdornment, Link, Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none'
    },
  },
});

const SignInMail = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [successSignIn, setSuccessSignIn] = useState();
  const [error, setError] = useState(false);
  const [errorSignIn, setErrorSignIn] = useState("");
  const { dispatch } = useAuthContext();
  const [visible, setVisibility] = useState(false);


  const checkAndSignIn = async () => {
    const result = await LoginEmail(inputEmail, inputPassword);
    if (result.status === 200) {
      setSuccessSignIn(true);
      let user = { token: result.data.token };
      localStorage.setItem("user", user.token);
      dispatch({ type: "LOGIN", payload: user });
    } else {
      if (
        result.response.data.message ===
        "Pending Account. Please verify your email to gain access to your profile"
      ) {
        setError(true);
        setErrorSignIn(
          "Please verify your email to gain access to your profile"
        );
      } else {
        setError(true);
        setErrorSignIn("Login or Password is incorrect. Please, try again");
      }
    }
  };

  const useTogglePasswordType = () => {
    setVisibility(!visible);
  }
  return (
    <Container maxWidth = 'xs' align ="center">
      {successSignIn && <Navigate to="/test" />}
      <Logo />
      <Typography
        variant="h1"
        fontSize={32} 
        fontWeight='600' 
        lineHeight='40px' 
        pt={10} 
        color='#F46B5D' >
        Sign In
      </Typography>
      <form>
        <Typography 
         variant="p"
         align="left"
         marginTop={2.5}>
          Login
        </Typography>
        <CssTextField
          sx= {{backgroundColor:"#FFF1EC",borderRadius: 2.5}}
          type="email"
          id="email"
          onChange={(e) => setInputEmail(e.target.value)}
        ></CssTextField>
        <Typography
        variant="p"
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
        <div id="errornote" className={error ? "instructions" : "offscreen"}>
          {errorSignIn}
        </div>
      </form>
      <Link
        display= "block"
        marginTop={3}
        marginBottom={6}
        underline="none"
        color="#444444"
        href="#">Forgot Password?</Link>
      <Button 
      onClick={checkAndSignIn} 
      fullWidth 
      variant="contained"
      disableElevation 
      sx={{textTransform:'lowercase', 
            backgroundColor:'#FB8F67', 
            color:'#FFFFFF', 
            height: '56px', 
            fontSize:'24px',
            fontWeight: "600",
            borderRadius:"10px"}} >
       Sign In
      </Button>
</Container>
  );
};

export default SignInMail;
