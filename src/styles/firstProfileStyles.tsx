import { makeStyles } from 'tss-react/mui'
export const firstProfileStyles = makeStyles()((theme) => {
  return {
    mainBox: {
      marginLeft: 20,
      marginRight: 20,
      [theme.breakpoints.up('sm')]: {
        width: 400,
        margin: '0 auto',
      },
    },
    title: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: '40px',
      color: '#F46B5D',
      textAlign: 'center',
    },
    text: {
      fontSize: 18,
      lineHeight: '27px',
      color: '#444444',
      textAlign: 'center',
      paddingBottom: '50px',
    },
    profileInput: {
      backgroundColor: '#FFF1EC',
      borderRadius: 10,
      outline: 'none',
      '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
    nextButton: {
      textTransform: 'capitalize',
      backgroundColor: '#FFFFFF',
      border: '2px solid #FB8F67',
      color: '#FB8F67',
      height: 56,
      fontSize: 18,
      fontWeight: 600,
      borderRadius: 10,
      '&: hover': {
        backgroundColor: '#FB8F67',
        color: '#FFFFFF',
        border: '2px solid #FB8F67',
      },
      marginTop: 70,
    },
    dot: {
      margin: 'auto 0',
      color: '#f46b5d',
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: '100px',
      textAlign: 'center',
    },
    span: {
      color: '#1D878C',
    },
    textCenter: {
      textAlign: 'center',
    },
  }
})
