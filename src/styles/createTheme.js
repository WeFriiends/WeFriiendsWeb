import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
  },
  palette: {
    text: {
      primary: '#444444',
    },
    primary: {
      main: '#F46B5D',
      light: '#FB8F67',
      dark: '#F1562A',
      contrastText: '#fff',
    },
  },
})

export default theme
