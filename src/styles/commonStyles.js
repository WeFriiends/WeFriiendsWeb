import { makeStyles } from 'tss-react/mui'

export const commonStyles = makeStyles()((theme) => {
  const primaryColor = '#F46B5D'
  const secondaryColor = '#1D878C'
  const primaryBtnBg = '#FB8F67'
  const textColor = '#444444'
  const boxShadow = '0 0 7px 1px rgba(179, 179, 179, 0.14)'

  return {
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
    },
    mainBox: {
      display: 'grid',
      gridTemplateRows: '1fr 2fr 2fr 1fr',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 20,
      [theme.breakpoints.up('sm')]: {
        width: 400,
        margin: '0 auto',
      },
    },
    shadowBox: {
      borderRadius: 10,
      boxShadow: boxShadow,
      padding: '30px 20px',
      background: '#fff',
    },
    title: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: '40px',
      paddingTop: 80,
      color: primaryColor,
      textAlign: 'center',
    },
    subTitle: {
      fontSize: 26,
      lineHeight: '40px',
      color: textColor,
      textAlign: 'center',
    },
    titleSecondary: {
      fontSize: 24,
      fontWeight: 500,
      lineHeight: '40px',
      paddingTop: 80,
      paddingBottom: 14,
      color: primaryColor,
      textAlign: 'center',
    },
    subTitleSecondary: {
      paddingBottom: 15,
      fontSize: 14,
      textAlign: 'center',
    },
    dialogOption: {
      display: 'block',
      backgroundColor: '#fff',
      marginBottom: 8,
      color: '#000',
      boxShadow: boxShadow,
      height: 50,
      lineHeight: '50px',
      borderRadius: 10,
      fontSize: 14,
      padding: '0 14px',
      textAlign: 'left',
      textTransform: 'none',
      transition: '0.3s backgroundColor, 0.3s color',
      '&:hover, &:active': {
        backgroundColor: primaryBtnBg,
        color: '#fff',
      },
    },
    dialogBtn: {
      marginBottom: 8,
      boxShadow: boxShadow,
      height: 38,
      lineHeight: '36px',
      borderRadius: 10,
      fontSize: 12,
      fontWeight: 500,
      textTransform: 'none',
      width: '40%',
    },
    buttonGroup: {
      display: 'flex',
      gap: 15,
      justifyContent: 'center',
      width: '90%',
      margin: '70px auto',
    },
    link: {
      color: secondaryColor,
      fontSize: 22,
      textDecoration: 'none',
      display: 'block',
      textAlign: 'center',
    },
    linkSmall: {
      textDecoration: 'none',
      color: secondaryColor,
      fontSize: 13,
    },
    linkBtn: {
      display: 'block',
      textTransform: 'lowercase',
      backgroundColor: '#FFF1EC',
      color: '#444444',
      paddingTop: 18,
      paddingBottom: 18,
      borderRadius: 10,
      fontSize: 18,
      textDecoration: 'none',
      textAlign: 'center',
    },
    p: {
      paddingTop: 14,
      textAlign: 'left',
      fontSize: 13,
    },
    text: {
      fontSize: 22,
      color: '#3B4054',
      textAlign: 'center',
    },
  }
})