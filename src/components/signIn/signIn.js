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
                <button> e-mail</button>
            </section>
            <section className="signUp">
                <p>Don't have an account?</p>
                <a href="signIn"> Sign Up</a>
            </section>
        </div>
    )
}

export default SignIn