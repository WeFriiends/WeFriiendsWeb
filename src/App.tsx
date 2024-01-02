import { useRoutes } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from '@mui/material'
import { ActivePageProvider } from './context/activePageContext'
import MessagesAndFriends from './pages/MessagesAndFriends'
import NearMe from './pages/NearMe'
import Match from './components/findMatch/Match'
import Report from 'components/report/report'
import ReportComment from 'components/report/reportComment'
import ReportReceived from 'components/report/reportReceived'
import CommentInput from 'components/report/commentInput'
import YourLikesList from './pages/YourLikesList'
import CreateAccount from 'components/userAuth/createAccount/CreateAccount'
import RegistrationForm from 'components/userAuth/registrationForm/RegistrationForm'
import AccountCreated from 'components/userAuth/accountCreated/AccountCreated'
import SignInMail from 'components/userAuth/signInMail/SignInMail'
import theme from 'styles/createTheme'
import { AuthContextProvider } from 'context/authContext'
import { DialogProvider } from 'context/dialogContext'
import routes from 'routes'

// function App() {
//   return (
//     <Routes>
//       <Route exact path="/" element={<CreateAccount />} />
//       <Route path="/registration" element={<RegistrationForm />} />
//       <Route
//         path="/registration/glad-screen/:confirmationCode"
//         element={<AccountCreated />}
//       />
//       <Route path="/signIn" element={<SignIn />} />
//       <Route path="/mailSignIn" element={<SignInMail />} />
//       {/* <Route path="/test" element={<TestPage />} /> */}
//       <Route path="/messages" element={<MessagesAndFriends />} />
//       <Route path="/nearMe" element={<NearMe />} />
//       <Route path="newMatch" element={<Match />} />

//       <Route path="/report" element={<Report />} />
//       <Route path="/reportComment/:buttonName" element={<ReportComment />} />
//       <Route path="/commentInput" element={<CommentInput />} />
//       <Route path="/reportReceived" element={<ReportReceived />} />
//       <Route path="/whoLikedYou" element={<YourLikesList />} />
//     </Routes>
//   )
// }

const App = () => {
  const content = useRoutes(routes)
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <DialogProvider>
          <ActivePageProvider>{content}</ActivePageProvider>
        </DialogProvider>
      </AuthContextProvider>
    </ThemeProvider>
  )
}

export default App
