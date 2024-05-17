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
import Match from './components/findMatch/Match'
import LocationManual from './components/firstProfile/LocationManual'
import Report from 'components/report/report'
import ReportComment from 'components/report/reportComment'
import ReportReceived from 'components/report/reportReceived'
import CommentInput from 'components/report/commentInput'
import YourLikesList from './pages/YourLikesList'
import { ActivePageProvider } from './context/activePageContext'

const theme = createTheme({
  typography: {
    fontFamily: ['Inter'],
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ActivePageProvider>
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
              <Route path="/locationManual" element={<LocationManual />} />
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
              <Route path="/commentInput" component={CommentInput} />
              <Route path="/reportReceived" element={<ReportReceived />} />
              <Route path="/whoLikedYou" element={<YourLikesList />} />
            </Routes>
          </div>
        </Router>
      </ActivePageProvider>
    </ThemeProvider>
  )
}

export default App
