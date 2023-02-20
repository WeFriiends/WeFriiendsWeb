import { Link } from "react-router-dom"
import Logo from "../logo/logo"
import "./signIn.css"

const SignIn = () => {

    return (
        <div className="signIn">
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
        </div>
    )
}

export default SignIn