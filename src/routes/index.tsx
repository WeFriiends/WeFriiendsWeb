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
import Invite from '../components/invite/Invite'

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
  { path: 'invite', element: <Invite /> },
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
