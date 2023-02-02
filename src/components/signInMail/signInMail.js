import Logo from "../logo/logo"
import ButtonActive from "../buttonActive/buttonActive"
import "./signInMail.css"

const SignInMail = () => {

    return (
        <div className="signInMail">
            <Logo />
            <section className="header">
                <h1> Sign In</h1>
            </section>
            <form>
                <label htmlFor="email">Login</label>
                <input type="email" id="email"></input>
                <label htmlFor="password">Password</label>
                <input type="password" id="password">
                </input>
            </form>
            <a href="#">Forgot Password?</a>
            <ButtonActive name="sign in" />
        </div>
    )
}

export default SignInMail

