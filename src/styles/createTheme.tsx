import { createTheme } from '@mui/material/styles'

const rose = '#F46B5D'
const fish = '#FB8F67'
const red = '#F1562A'
const grey = '#444444'
const green = '#1D878C'

const theme: Record<string, any> = createTheme({
  spacing: 5,
  palette: {
    primary: {
      main: rose,
      light: fish,
      dark: red,
    },
    secondary: {
      main: green,
    },
    text: {
      primary: grey,
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: {
      fontSize: 32,
      lineHeight: 1.25, // 40px
      fontWeight: 600,
      color: rose,
    },
    h2: {
      fontSize: 24,
      lineHeight: 1.3, // 31.2px
      fontWeight: 600,
      color: rose,
    },
    h3: {
      fontSize: 20,
      lineHeight: 1.3, // 26px
      fontWeight: 600,
      color: rose,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.57, // 22px
      fontWeight: 400,
    },
  },
  components: {
    MuiAccordion: {
      defaultProps: {
        style: {
          boxShadow: 'none',
        },
      },
    },
  },
})

export default theme
