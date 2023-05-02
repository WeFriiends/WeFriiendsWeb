import { Link } from "react-router-dom"
import Logo from "../../logo/logo"
import { Box } from "@mui/material"

const SignIn = () => {

    return (
        <Box
            mr={2.5} 
            ml={2.5} 
            align ='center'>
            <Logo />
            <section className="header">
                <h1> Sign In</h1>
            </section>
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