import { createTheme } from '@mui/material/styles'

const theme: Record<string, any> = createTheme({
  spacing: 5,
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

theme.typography.body2 = {
  fontSize: 14,
  lineHeight: 1.57, // 22px
  fontWeight: 400,
}

theme.typography.h1 = {
  fontSize: 32,
  lineHeight: 1.25, // 40px
  fontWeight: 600,
  color: theme.palette.primary.main,

  [theme.breakpoints.up('md')]: {
    fontSize: 24,
    lineHeight: 1.5, // 36px
  },
}

theme.typography.h2 = {
  fontSize: 24,
  lineHeight: 1.3, // 31.2px
  fontWeight: 600,
  color: theme.palette.primary.main,
}

theme.typography.h3 = {
  fontSize: 20,
  lineHeight: 1.3, // 26px
  fontWeight: 600,
  color: theme.palette.primary.main,
}

export default theme
