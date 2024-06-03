import { RouteObject } from 'react-router'
import { ComponentType, Suspense, lazy } from 'react'
import LoadingScreen from 'common/svg/Loader'
import RegistrationForm from 'components/userAuth/registrationForm/RegistrationForm'
import AccountCreated from 'components/userAuth/accountCreated/AccountCreated'
import SignInMail from 'components/userAuth/signInMail/SignInMail'
import Report from 'components/report/report'
import ReportComment from 'components/report/reportComment'
import CommentInput from 'components/report/commentInput'
import ReportReceived from 'components/report/reportReceived'
import YourLikesList from 'pages/YourLikesList'
import NearMe from 'pages/NearMe'
import GuestGuard from 'components/userAuth/GuestGuard'
import Invitation from '../components/invitation/Invitation'
import ErrorPage from 'pages/ErrorPage'
import ResetPassword from 'components/userAuth/signInMail/forgotPassword/resetPassword/ResetPassword'
import RequestNewPassword from 'components/userAuth/signInMail/forgotPassword/inputEmail/RequestNewPassword'
import EmailAlreadyUsed from 'components/userAuth/registrationForm/EmailAlreadyUsed'
import CheckEmail from 'components/userAuth/signInMail/forgotPassword/inputEmail/CheckEmail'
import Messages from 'pages/Messages'
import Match from '../components/findMatch/Match'
import ModalDialog from '../common/ModalDialog'

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
        element: <RequestNewPassword />,
      },
      { path: 'check-email', element: <CheckEmail /> },
      {
        path: 'reset-password/:confirmationCode',
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: 'user',
    children: [
      {
        path: 'messages-and-friends',
        element: (
          // <AuthGuard>
          <Home />
          // </AuthGuard>
        ),
      },
      {
        path: 'messages',
        element: (
          // <AuthGuard>
          <Messages />
          // </AuthGuard>
        ),
      },
      {
        path: 'who-liked-you',
        element: (
          // <AuthGuard>
          <YourLikesList />
          // </AuthGuard>
        ),
      },
      {
        path: 'near-me',
        element: (
          // <AuthGuard>
          <NearMe />
          // </AuthGuard>
        ),
      },
      {
        path: 'new-match',
        element: (
          <>
            Hello World!
            <Match
              isMatchModalOpen={true}
              onClose={() => void {}}
              onChat={() => void {}}
              friendsAvatar={'test.jpg'}
            />
          </>
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
  {
    path: 'modal-dialog',
    element: (
      <ModalDialog>
        <div>Text example</div>
        <br />
        <div>Text example. Text example. Text example.</div>
        <div>Text example</div>
        <div>Text example</div>
        <div>Text example</div>
        Hello World.
      </ModalDialog>
    ),
  },
  { path: 'invite', element: <Invitation /> },
  { path: 'error-400', element: <ErrorPage code={400} /> }, // Route is working for demonstration
  { path: 'error-500', element: <ErrorPage code={500} /> }, // Route is working for demonstration
  { path: '*', element: <ErrorPage /> }, // Route is working for demonstration
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
