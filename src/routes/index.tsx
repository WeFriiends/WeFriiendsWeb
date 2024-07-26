import { RouteObject } from 'react-router'
import { ComponentType, Suspense, lazy } from 'react'
import AuthGuard from 'components/userAuth/AuthGuard'
import LoadingScreen from 'common/svg/Loader'
import Report from 'components/report/report'
import ReportComment from 'components/report/reportComment'
import CommentInput from 'components/report/commentInput'
import ReportReceived from 'components/report/reportReceived'
import YourLikesList from 'pages/YourLikesList'
import NearMe from 'pages/NearMe'
import AuthCallbackPage from 'pages/AuthCallbackPage'
// import MessagesAndFriends from 'pages/MessagesAndFriends'
// import Invitation from '../components/invitation/Invitation'
// import ErrorPage from 'pages/ErrorPage'
// import Messages from 'pages/Messages'
import FirstProfile from 'pages/FirstProfile'
// import NameProfile from 'components/firstProfile/NameProfile'
import Friends from 'pages/FriendsPage'
import Invitation from '../components/invitation/Invitation'
import ErrorPage from 'pages/ErrorPage'
import Messages from 'pages/MessagesPage'
import UserAccount from 'pages/UserAccount'
import NavBar from 'components/navBar/NavBar'
import TabsMessagesFriends from 'components/tabsMessagesFriends/TabsMessagesFriends'

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
  {
    path: 'callback',
    element: <AuthCallbackPage />,
  },
  {
    path: 'user',
    children: [
      {
        path: 'fill-profile',
        // element: <FirstProfile />,
        element: <AuthGuard component={FirstProfile} />,
      },
      {
        element: <NavBar />,
        children: [
          {
            path: 'account',
            element: <UserAccount />,
            // element: <AuthGuard component={YourLikesList} />,
          },
          {
            element: <TabsMessagesFriends />,
            children: [
              {
                path: 'friends',
                element: <Friends />,
                // element: <AuthGuard component={Friends} />,
              },
              {
                path: 'messages',
                element: <Messages />,
                // element: <AuthGuard component={Messages} />,
              },
            ],
          },
          {
            path: 'who-liked-you',
            element: <YourLikesList />,
            // element: <AuthGuard component={YourLikesList} />,
          },
          {
            path: 'near-me',
            element: <NearMe />,
            // element: <AuthGuard component={NearMe} />,
          },
        ],
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
