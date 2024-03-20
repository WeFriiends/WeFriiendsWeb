import { RouteObject } from 'react-router'
import { ComponentType, Suspense, lazy } from 'react'
import LoadingScreen from 'common/Loader'
import RegistrationForm from 'components/userAuth/registrationForm/RegistrationForm'
import AccountCreated from 'components/userAuth/accountCreated/AccountCreated'
import SignInMail from 'components/userAuth/signInMail/SignInMail'
import Report from 'components/report/report'
import ReportComment from 'components/report/reportComment'
import CommentInput from 'components/report/commentInput'
import ReportReceived from 'components/report/reportReceived'
import YourLikesList from 'pages/YourLikesList'
import NearMe from 'pages/NearMe'
import Match from 'components/findMatch/Match'
import AuthGuard from 'components/userAuth/AuthGuard'
import GuestGuard from 'components/userAuth/GuestGuard'
import Invitation from '../components/invitation/Invitation'
import ErrorPage from 'pages/ErrorPage'
import NewPassword from 'components/userAuth/signInMail/forgotPassword/NewPassword'
import EmailAlreadyUsed from 'components/userAuth/registrationForm/EmailAlreadyUsed'

const Loadable =
  (Component: ComponentType) => (props: JSX.IntrinsicAttributes) =>
    (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    )

const Register = Loadable(
  lazy(() => import('components/userAuth/createAccount/CreateAccount'))
)
const Login = Loadable(lazy(() => import('components/userAuth/signIn/SignIn')))
const Home = Loadable(lazy(() => import('pages/MessagesAndFriends')))

const routes: RouteObject[] = [
  { path: '/', element: <Register /> },
  {
    path: '/registration',
    children: [
      {
        path: 'register-email',
        element: <RegistrationForm />,
      },
      {
        path: 'glad-screen/:confirmationCode',
        element: <AccountCreated />,
      },
      {
        path: 'email-already-used',
        element: <EmailAlreadyUsed />,
      },
    ],
  },
  {
    path: 'authentication',
    children: [
      {
        path: 'sign-in',
        element: (
          <GuestGuard>
            <Login />
          </GuestGuard>
        ),
      },
      {
        path: 'email-sign-in',
        element: <SignInMail />,
      },
      {
        path: 'new-password',
        element: <NewPassword />,
      },
    ],
  },
  {
    path: 'user',
    children: [
      {
        path: 'messages-and-friends',
        element: (
          <AuthGuard>
            <Home />
          </AuthGuard>
        ),
      },
      {
        path: 'who-liked-you',
        element: (
          <AuthGuard>
            <YourLikesList />
          </AuthGuard>
        ),
      },
      {
        path: 'near-me',
        element: (
          <AuthGuard>
            <NearMe />
          </AuthGuard>
        ),
      },
      {
        path: 'new-match',
        element: (
          <AuthGuard>
            <Match />
          </AuthGuard>
        ),
      },
    ],
  },

  {
    path: 'report',
    children: [
      {
        path: 'main-form',
        element: <Report />,
      },
      {
        path: 'reportComment/:buttonName',
        element: <ReportComment />,
      },
      {
        path: 'commentInput',
        element: <CommentInput />,
      },
      {
        path: 'reportReceived',
        element: <ReportReceived />,
      },
    ],
  },
  // todo: The error processing, Axios/API integration, and refactoring needed after backend is working. (We need to do more with Axios to handle errors better. Right now, error handling is spread out in different files of action directory, which makes it hard to manage. I believe we should create an API to handle backend communication and error processing in a centralized manner.)
  { path: 'invite', element: <Invitation /> },
  { path: 'error-400', element: <ErrorPage code={400} /> },
  { path: 'error-500', element: <ErrorPage code={500} /> },
  { path: '*', element: <ErrorPage /> },
  //left code underneath as example of using path for common layout
  // {
  //   path: '*',
  //   element: <MainLayout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Home />,
  //     },
  //   ],
  // },
]

export default routes
