import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material'
import CreateAccount from './components/user-auth/createAccount/CreateAccount'
import RegistrationForm from './components/user-auth/registrationForm/RegistrationForm'
import AccountCreated from './components/user-auth/accountCreated/AccountCreated'
import SignIn from './components/user-auth/signIn/SignIn'
import SignInMail from './components/user-auth/signInMail/SignInMail'
import TestPage from './components/user-auth/testPage/TestPage'
import MessagesAndFriends from './pages/MessagesAndFriends'
import NearMe from './pages/NearMe'

const theme = createTheme({
  typography: {
    fontFamily: ['Inter'],
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
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
            <Route path="/messages" element={<MessagesAndFriends />} />
            <Route path="/nearMe" element={<NearMe />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
