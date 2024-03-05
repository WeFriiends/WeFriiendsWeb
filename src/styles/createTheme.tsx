import { createTheme } from '@mui/material/styles'

const theme: Record<string, any> = createTheme({
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

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    large: true // adds variant=large for Button MUI - naming?
  }
}

theme.components.MuiButton = {
  variants: [
    {
      props: {
        variant: 'large',
      },
      style: {
        textTransform: 'lowercase',
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
        height: 60,
        width: 180,
        fontSize: 18,
        fontWeight: 600,
        borderRadius: 10,
        '&: hover': {
          backgroundColor: theme.palette.primary.main,
        },
      },
    },
  ],
}

theme.typography.body2 = {
  fontSize: 14,
  lineHeight: 1.57,
}

theme.typography.h1 = {
  fontSize: 32,
  lineHeight: 1.25,
  fontWeight: 600,

  [theme.breakpoints.up('md')]: {
    fontSize: 24,
    lineHeight: 1.5,
  },
}

theme.typography.h2 = {
  fontSize: 24,
  lineHeight: 1.46,
  fontWeight: 600,
  textAlign: 'center',
}

export default theme
