import { useState } from "react";
import Logo from "../../logo/logo";
import ButtonActive from "../../buttonActive/buttonActive";
import "./signInMail.css";
import axios from "axios";
import { useAuthContext } from "../../../hooks/useAuthContext";
import useTogglePasswordType from "../../../hooks/useTogglePasswordType";
import { Navigate } from "react-router-dom";
import LoginEmail from "../../../actions/loginEmail";

const SignInMail = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [successSignIn, setSuccessSignIn] = useState();
  const [error, setError] = useState(false);
  const [errorSignIn, setErrorSignIn] = useState("");
  const { dispatch } = useAuthContext();

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

  const [passwordType, toggleIcon] = useTogglePasswordType();

  return (
    <div className="signInMail">
      {successSignIn && <Navigate to="/test" />}
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
            onChange={(e) => setInputPassword(e.target.value)}
          ></input>
          <span className="password-toggle-icon">{toggleIcon}</span>
        </div>
        <div id="errornote" className={error ? "instructions" : "offscreen"}>
          {errorSignIn}
        </div>
      </form>
      <a href="#">Forgot Password?</a>
      <ButtonActive name="sign in" onClick={checkAndSignIn} />
    </div>
  );
};

export default SignInMail;
