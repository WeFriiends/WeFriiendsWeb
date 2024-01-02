import { RouteObject } from 'react-router'
import { Suspense, lazy } from 'react'
import LoadingScreen from 'common/Loader'
import SignIn from 'components/userAuth/signIn/SignIn'
import RegistrationForm from 'components/userAuth/registrationForm/RegistrationForm'
import AccountCreated from 'components/userAuth/accountCreated/AccountCreated'
import CreateAccount from 'components/userAuth/createAccount/CreateAccount'
import SignInMail from 'components/userAuth/signInMail/SignInMail'
import Report from 'components/report/report'
import ReportComment from 'components/report/reportComment'
import CommentInput from 'components/report/commentInput'
import ReportReceived from 'components/report/reportReceived'
import YourLikesList from 'pages/YourLikesList'
import MessagesAndFriends from 'pages/MessagesAndFriends'
import NearMe from 'pages/NearMe'
import Match from 'components/findMatch/Match'

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  )

const Login = Loadable(lazy(() => import('components/userAuth/signIn/SignIn')))
const Register = Loadable(
  lazy(() => import('components/userAuth/registrationForm/RegistrationForm'))
)
const Home = Loadable(lazy(() => import('pages/MessagesAndFriends')))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <CreateAccount />,
  },
  {
    path: 'registration',
    children: [
      {
        path: 'register-mail',
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
        element: <SignIn />,
      },
      {
        path: 'mail-sign-in',
        element: <SignInMail />,
      },
    ],
  },
  {
    path: 'user',
    children: [
      {
        path: 'who-liked-you',
        element: <YourLikesList />,
      },
      {
        path: 'messages',
        element: <MessagesAndFriends />,
      },
      {
        path: 'near-me',
        element: <NearMe />,
      },
      {
        path: 'new-match',
        element: <Match />,
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
