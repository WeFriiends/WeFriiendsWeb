import { useState } from "react"
import Logo from "../logo/logo"
import ButtonActive from "../buttonActive/buttonActive"
import "./signInMail.css"


const SignInMail = () => {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const checkAndSignIn = () => {
        console.log("Email: ", inputEmail)
        console.log("Password: ", inputPassword)
    }

    const useTogglePasswordType = () => {
        const [visible, setVisibility] = useState(false);
        const icon = (
            <img src={visible ? "/img/eye.svg" : "/img/eye-hide.svg"} alt="" onClick={() => { setVisibility(visibility => !visibility) }} />
        )
        const inputType = visible ? "text" : "password"
        return [inputType, icon]
    }

    const [passwordType, toggleIcon] = useTogglePasswordType();

    return (
        <div className="signInMail">
            <Logo />
            <section className="header">
                <h1> Sign In</h1>
            </section>
            <form>
                <label htmlFor="email">Login</label>
                <input
                    type="email"
                    id="email"
                    onChange={(e) => setInputEmail(e.target.value)}
                ></input>
                <label htmlFor="password">Password</label>
                <div>
                    <input
                        type={passwordType}
                        id="password"
                        onChange={(e) => setInputPassword(e.target.value)}>
                    </input>
                    <span className='password-toggle-icon'>{toggleIcon}</span>
                </div>
            </form>
            <a href="#">Forgot Password?</a>
            <ButtonActive name="sign in" onClick={checkAndSignIn} />
        </div>
    )
}

export default SignInMail

