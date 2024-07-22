import { RouteObject } from 'react-router'
import { ComponentType, Suspense, lazy } from 'react'
import AuthGuard from 'components/userAuth/AuthGuard'
import LoadingScreen from 'common/svg/Loader'
import ReportReceived from 'components/report/ReportReceived'
import YourLikesList from 'pages/YourLikesList'
import NearMe from 'pages/NearMe'
import AuthCallbackPage from 'pages/AuthCallbackPage'
import NameProfile from 'components/firstProfile/NameProfile'
import Friends from 'pages/FriendsPage'
import Invitation from '../components/invitation/Invitation'
import ErrorPage from 'pages/ErrorPage'
import Match from '../components/findMatch/Match'
import ReportAction from '../components/report/ReportAction'
import ReportForm from '../components/report/ReportForm'
import UserIsBlocked from '../components/report/UserIsBlocked'
import Messages from 'pages/MessagesPage'
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
        // element: <NameProfile />,
        element: <AuthGuard component={NameProfile} />,
      },
      {
        element: <NavBar />,
        children: [
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
    ],
  },

  {
    path: 'report',
    children: [
      {
        path: 'choose-action',
        element: <ReportAction />,
      },
      {
        path: 'report-form',
        element: <ReportForm />,
      },
      {
        path: 'report-received',
        element: <ReportReceived />,
      },
      {
        path: 'user-is-blocked',
        element: <UserIsBlocked />,
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
