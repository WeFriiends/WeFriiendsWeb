import { Box, Typography, Button } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import IconButton from '@mui/material/IconButton'
import { makeStyles } from 'tss-react/mui'
import { useNavigate } from 'react-router'
const ReportReceived = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <Box className={classes.mainBox}>
      <IconButton className={classes.iconButton} onClick={handleGoBack}>
        <ClearIcon className={classes.closeIcon} />
      </IconButton>
      <Box>
        <img
          src={require('./Images/alert-circle.png')}
          alt="Alert circle"
          className={classes.imgAlert}
        />
        {/* <img
          src={'./components/Report/Images/alert-circle.png'}
          alt="Alert circle"
          className={classes.imgAlert}
        /> */}
        <Typography variant="h1" className={classes.title}>
          Report Received
        </Typography>
        <Typography className={classes.content}>
          Thank you for your message. We will review it as soon as possible and
          take care about this problem.
        </Typography>
      </Box>
      <Box className={classes.groupBtn}>
        <Button variant="contained" color="primary" className={classes.linkBtn}>
          OK, thanks!
        </Button>
      </Box>
    </Box>
  )
}

export default ReportReceived

const useStyles = makeStyles()((theme) => {
  return {
    mainBox: {
      display: 'grid',
      gridTemplateRows: '1fr 2fr 2fr 1fr',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 20,
      overflow: 'hidden',
      [theme.breakpoints.up('sm')]: {
        width: 400,
        margin: '0 auto',
      },
    },
    shadowBox: {
      borderRadius: 10,
      boxShadow: '0 0 7px 1px rgba(179, 179, 179, 0.14)',
      padding: '30px 20px',
      background: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 500,
      lineHeight: '40px',
      paddingTop: 80,
      paddingBottom: 14,
      color: '#F46B5D',
      textAlign: 'center',
    },
    content: {
      paddingBottom: 15,
      fontSize: 14,
      textAlign: 'center',
    },
    linkBtn: {
      marginBottom: 8,
      height: 38,
      lineHeight: '36px',
      borderRadius: 10,
      fontSize: 12,
      fontWeight: 500,
      textTransform: 'none',
      width: '40%',
      // display: 'flex',
      // width: '124px',
      // height: '38px',
      // borderRadius: 10,
      // fontSize: 14,
      // padding: '0 14px',
      background: 'var(--rose, #F46B5D)',
    },
    imgAlert: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '25.833px',
      height: '25.833px',
      flexShrink: 0,
      strokeWidth: '2px',
      stroke: 'var(--red, #F1562A)',
    },
    groupBtn: {
      display: 'flex',
      gap: 15,
      justifyContent: 'center',
      width: '90%',
      margin: '70px auto',
    },
    // container: {
    //   position: 'relative',
    //   width: '100%',
    //   height: '100%',
    //   // flexShrink: 0,
    //   background: 'rgba(0, 0, 0, 0.02)',
    //   boxShadow: '0px 0px 7px 1px rgba(179, 179, 179, 0.14)',
    //   display: 'grid',
    //   gridTemplateRows: '1fr 2fr 2fr 1fr',
    //   alignItems: 'center',
    //   marginLeft: 20,
    //   marginRight: 20,
    //   [theme.breakpoints.up('sm')]: {
    //     width: 400,
    //     margin: '0 auto',
    //   },
    // },

    // title: {
    //   fontSize: 32,
    //   fontWeight: 600,
    //   lineHeight: '40px',
    //   paddingTop: 80,
    //   color: '#F46B5D',
    //   textAlign: 'center',
    //   margin: '0',
    // },
    // groupBtn: {
    //   width: '90%',
    //   height: '90%',
    //   borderRadius: 10,
    //   background: '#FFF',
    //   boxShadow: '0px 0px 7px 1px rgba(179, 179, 179, 0.14)',
    // },
    iconButton: {
      width: '24px',
      height: '24px',
      flexShrink: 0,
      position: 'absolute',
      top: '20px',
      right: '20px',
      borderRadius: '0',
      border: '1px solid #ccc',
    },
    closeIcon: {
      fontSize: '16px',
    },
    // content: {
    //   fontSize: 26,
    //   lineHeight: '40px',
    //   color: '#000000',
    //   textAlign: 'center',
    // },
    // link: {
    //   color: '#1D878C',
    //   fontSize: 22,
    //   textDecoration: 'none',
    //   display: 'block',
    //   textAlign: 'center',
    // },
    // linkSmall: {
    //   textDecoration: 'none',
    //   color: '#1D878C',
    //   fontSize: 13,
    // },
    // linkBtn: {
    //   width: '100%',
    //   height: '100%',
    //   textDecoration: 'none',
    //   display: 'block',
    //   background: '#FB8F67',
    //   flexShrink: 0,
    //   borderRadius: '10px',
    //   boxShadow: '0px 0px 7px 1px rgba(179, 179, 179, 0.14)',
    // },
    // // textBtn: {
    // //   color: '#000', // Цвет текста
    // //   fontFamily: 'Inter', // Шрифт
    // //   fontSize: '14px', // Размер шрифта
    // //   fontStyle: 'normal', // Стиль шрифта
    // //   fontWeight: 400, // Насыщенность шрифта (bold)
    // //   lineHeight: '22px',
    // //   padding: '14px 225px 14px 14px',
    // // },
    // p: {
    //   paddingTop: 14,
    //   textAlign: 'left',
    //   fontSize: 13,
    // },
    // text: {
    //   fontSize: 22,
    //   color: '#3B4054',
    //   textAlign: 'center',
    // },
    // startIcon: {
    //   marginRight: 16,
    // },
  }
})
