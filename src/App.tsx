import { useRoutes } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from '@mui/material'
import { ActivePageProvider } from './context/activePageContext'
import theme from 'styles/createTheme'
import { AuthContextProvider } from 'context/authContext'
import { DialogProvider } from 'context/dialogContext'
import routes from 'routes'

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
