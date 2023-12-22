import { Suspense, lazy } from 'react'
import LoadingScreen from 'common/Loader'

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  )

// const Login = Loadable(lazy(() => import('./pages/authentication/Login')))
// const Register = Loadable(lazy(() => import('./pages/authentication/Register')))

// const Home = Loadable(lazy(() => import('./pages/home/Home')))
