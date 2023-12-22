import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material'
import CreateAccount from './components/userAuth/createAccount/CreateAccount'
import RegistrationForm from './components/userAuth/registrationForm/RegistrationForm'
import AccountCreated from './components/userAuth/accountCreated/AccountCreated'
import SignIn from './components/userAuth/signIn/SignIn'
import SignInMail from './components/userAuth/signInMail/SignInMail'
import TestPage from './components/userAuth/testPage/TestPage'
import MessagesAndFriends from './pages/MessagesAndFriends'
import NearMe from './pages/NearMe'
import Match from './components/findMatch/Match'
import Report from 'components/report/report'
import ReportComment from 'components/report/reportComment'
import ReportReceived from 'components/report/reportReceived'
import CommentInput from 'components/report/commentInput'

const theme = createTheme({
  typography: {
    // fontFamily: ['Inter'],
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/registration" element={<RegistrationForm />} />Í
          <Route
            path="/registration/glad-screen/:confirmationCode"
            element={<AccountCreated />}
          />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/mailSignIn" element={<SignInMail />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/messages" element={<MessagesAndFriends />} />
          <Route path="/nearMe" element={<NearMe />} />
          <Route path="newMatch" element={<Match />} />
          <Route path="/report" element={<Report />} />
          <Route
            path="/reportComment/:buttonName"
            element={<ReportComment />}
          />
          <Route path="/commentInput" element={<CommentInput />} />
          <Route path="/reportReceived" element={<ReportReceived />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
