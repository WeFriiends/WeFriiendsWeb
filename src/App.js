import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import CreateAccount from './components/user-auth/createAccount/createAccount'
import RegistrationForm from './components/user-auth/registrationForm/registrationForm'
import AccountCreated from './components/user-auth/accountCreated/accountCreated'
import SignIn from './components/user-auth/signIn/signIn'
import SignInMail from './components/user-auth/signInMail/signInMail'
import TestPage from './components/user-auth/testPage/testPage'
import NameProfile from './components/FirstProfile/nameProfile'
import GenderForm from './components/FirstProfile/genderForm'
import BirthProfile from './components/FirstProfile/birthProfile'
import StatusForm from './components/FirstProfile/statusForm'
import CountryForm from './components/FirstProfile/countryForm'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<CreateAccount />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/account" element={<AccountCreated />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/mailSignIn" element={<SignInMail />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/firstProfile" element={<NameProfile />} />
          <Route path="/firstProfile/gender" element={<GenderForm />} />
          <Route path="/firstProfile/birth" element={<BirthProfile />} />
          <Route path="/firstProfile/status" element={<StatusForm />} />
          <Route path="/firstProfile/country" element={<CountryForm />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
