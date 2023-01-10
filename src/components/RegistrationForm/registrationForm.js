import { useEffect, useRef, useState } from 'react';

import Logo from '../logo/logo'
import './registrationForm.css'


const PWD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/

const RegistrationForm = () => {
    // const emailRef = useRef();
    // const errorRef = userRef();

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     emailRef.current.focus();
    // }, [])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
        console.log('useEffect validEmail: ', result)
    }, [email])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
        console.log("useEffect validPwd:", result)
        console.log("useEffect validMatch:", match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v2 = PWD_REGEX.test(pwd);
        if (!v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        console.log("Password for backend: ", pwd);
        console.log("Email for backend: ", email)
        setSuccess(true);
    }

    const usePasswordToggle = () => {
        const [visible, setVisibility] = useState(false);

        const icon = (
            <img src={visible ? "/img/eye.svg" : "/img/eye-hide.svg"} alt="" onClick={() => { setVisibility(visibility => !visibility) }} />
        )
        const inputType = visible ? "text" : "password"
        return [inputType, icon]
    }

    const [passwordInputType, toggleIcon] = usePasswordToggle();

    return (
        <div>
            <Logo />
            {success ? (
                <section>
                    <h1>Just one more step!</h1>
                    <p>We sent an authentication email to </p>
                    <p className='colorEmail'>
                        {email}</p>
                    <p>Please, check your mailbox.</p>
                </section>

            ) : (
                <div className='registrationForm'>
                    <h1> Enter Email</h1>
                    <form onSubmit={handleSubmit}>
                        <label for="email">Login</label>
                        <input type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="emailnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        ></input>
                        <div id="emailnote" className={emailFocus && !validEmail ? "instructions" : "offscreen"} >
                            Your Email is not correct
                        </div>
                        <label for="password">Password</label>
                        <div>
                            <input type={passwordInputType}
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                required
                                aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby="pwdnote"
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}>

                            </input>
                            <span className='password-toggle-icon'>{toggleIcon}</span>
                        </div>
                        <div id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            Your Password must have:
                            <ul>
                                <li className={pwd.length > 8 ? 'green' : 'rot'}> 8 or more symbols</li>
                                <li className={/[0-9]/i.test(pwd) ? 'green' : 'rot'}>1 or more numbers</li>
                                <li className={/[a-zA-Z]/i.test(pwd) ? 'green' : 'rot'}>1 or more Latin letters</li>
                                <li className={/[~!@#$%^&*()_+`-]/i.test(pwd) ? 'green' : 'rot'}>1 or more special characters</li>
                            </ul>
                        </div>
                        <label for="confirmPassword">One more time</label>
                        <div>
                            <input type={passwordInputType}
                                id="confrimPassword"
                                onChange={(e) => setMatchPwd(e.target.value)}
                                required
                                aria-invalid={validMatch ? "false" : "true"}
                                aria-describedby="confirmnote"
                                onFocus={() => setMatchFocus(true)}
                                onBlur={() => setMatchFocus(false)}></input>
                            <span className='password-toggle-icon'>{toggleIcon}</span>
                        </div>
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"} >
                            Must match the first password input field.
                        </p>
                        <button className='btn' disabled={!validEmail || !validPwd || !validMatch ? true : false}>submit</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default RegistrationForm