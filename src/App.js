import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import CreateAccount from './components/user-auth/createAccount/CreateAccount'
import RegistrationForm from './components/user-auth/registrationForm/RegistrationForm'
import AccountCreated from './components/user-auth/accountCreated/AccountCreated'
import SignIn from './components/user-auth/signIn/SignIn'
import SignInMail from './components/user-auth/signInMail/SignInMail'
import TestPage from './components/user-auth/testPage/TestPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<CreateAccount />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route
            path="/registration/glad-screen/:confirmationCode"
            element={<AccountCreated />}
          />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/mailSignIn" element={<SignInMail />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
