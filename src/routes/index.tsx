import { RouteObject } from 'react-router'
import { ComponentType, Suspense, lazy } from 'react'
import LoadingScreen from 'common/Loader'
import AuthGuard from 'components/userAuth/AuthGuard'
import Report from 'components/report/report'
import ReportComment from 'components/report/reportComment'
import CommentInput from 'components/report/commentInput'
import ReportReceived from 'components/report/reportReceived'
import YourLikesList from 'pages/YourLikesList'
import NearMe from 'pages/NearMe'
import Match from 'components/findMatch/Match'
import Invitation from '../components/invitation/Invitation'
import AuthCallbackPage from 'pages/AuthCallbackPage'
import NameProfile from 'components/firstProfile/NameProfile'
import MessagesAndFriends from 'pages/MessagesAndFriends'

const Loadable =
  (Component: ComponentType) => (props: JSX.IntrinsicAttributes) =>
    (
      <Suspense fallback={<LoadingScreen />}>
        <Component {...props} />
      </Suspense>
    )

const Register = Loadable(
  lazy(() => import('components/userAuth/UserAuthentication'))
)

const routes: RouteObject[] = [
  { path: '/', element: <Register /> },
  // {
  //   path: '/registration',
  //   children: [
  //     {
  //       path: 'register-email',
  //       element: <RegistrationForm />,
  //     },
  //     {
  //       path: 'glad-screen/:confirmationCode',
  //       element: <AccountCreated />,
  //     },
  //     {
  //       path: 'email-already-used',
  //       element: <EmailAlreadyUsed />,
  //     },
  //   ],
  // },
  // {
  //   path: 'authentication',
  //   children: [
  //     {
  //       path: 'sign-in',
  //       element: (
  //         <GuestGuard>
  //           <Login />
  //         </GuestGuard>
  //       ),
  //     },
  //     // {
  //     //   path: 'email-sign-in',
  //     //   element: <SignInMail />,
  //     // },
  //     // {
  //     //   path: 'new-password',
  //     //   element: <NewPassword />,
  //     // },
  //     {
  //       path: 'email-sign-in',
  //       element: <SignInMail />,
  //     },
  //     {
  //       path: 'new-password',
  //       element: <RequestNewPassword />,
  //     },
  //     { path: 'check-email', element: <CheckEmail /> },
  //     {
  //       path: 'reset-password/:confirmationCode',
  //       element: <ResetPassword />,
  //     },
  //   ],
  // },
  {
    path: 'callback',
    element: <AuthCallbackPage />,
  },
  {
    path: 'user',
    children: [
      {
        path: 'fill-profile',
        element: <AuthGuard component={NameProfile} />,
      },
      {
        path: 'messages-and-friends',
        element: <AuthGuard component={MessagesAndFriends} />,
      },
      {
        path: 'who-liked-you',
        element: <AuthGuard component={YourLikesList} />,
      },
      {
        path: 'near-me',
        element: <AuthGuard component={NearMe} />,
      },
      {
        path: 'new-match',
        element: <AuthGuard component={Match} />,
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
  { path: 'invite', element: <AuthGuard component={Invitation} /> },
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
