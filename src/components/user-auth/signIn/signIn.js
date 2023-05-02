import { Link } from "react-router-dom"
import Logo from "../../logo/logo"
import { Box, Typography } from "@mui/material"

const SignIn = () => {

    return (
        <Box
            mr={2.5} 
            ml={2.5} 
            align ='center'>
            <Logo />
            <Typography 
                variant='h1' 
                fontSize={32} 
                fontWeight='600' 
                lineHeight='40px' 
                pt={10} 
                color='#F46B5D' >
                Sign In?
            </Typography>
            <section className="account">
                <button> <img src="/img/facebook.svg" alt="" /></button>
                <button> <img src="/img/google1.svg" alt="" /></button>
                <Link to="/mailSignIn">
                    <button> e-mail</button>
                </Link>
            </section>
            <section className="signUp">
                <p>Don't have an account?</p>
                <a href="/"> Sign Up</a>
            </section>
        </Box>
    )
}

export default SignIn