import { useState } from "react"
import Logo from "../logo/logo"
import ButtonActive from "../buttonActive/buttonActive"
import "./signInMail.css"
import axios from "axios"


const SignInMail = () => {
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [successSignIn, setSuccessSignIn] = useState();
    const [error, setError] = useState(false);
    const [errorSignIn, setErrorSignIn] = useState('');

    const checkAndSignIn = () => {
        console.log("Email: ", inputEmail)
        console.log("Password: ", inputPassword)
        axios.post('http://localhost:3001/api/auth/signin', { email: inputEmail, password: inputPassword })
            .then(result => {
                console.log("result signIn:", result)
                if (result.status === 200) {
                    setSuccessSignIn(true)
                    console.log("status: ", result.status)
                }
            })
            .catch(err => {
                console.log("Error: ", err.response.data.message)
                if (err.response.data.message === "Pending Account. Please verify your email to gain access to your profile") {
                    setError(true)
                    setErrorSignIn("Please verify your email to gain access to your profile")
                    console.log("errorSignIn:", errorSignIn)
                } else {
                    setError(true)
                    setErrorSignIn("Login or Password is incorrect. Please, try again")
                }
            })
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
                <div id="errornote" className={error ? "instructions" : "offscreen"} >
                    {errorSignIn}
                </div>
            </form>
            <a href="#">Forgot Password?</a>
            <ButtonActive name="sign in" onClick={checkAndSignIn} />

        </div>
    )
}

export default SignInMail

