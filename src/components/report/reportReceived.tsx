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
          src="/img/report/alert-circle.png"
          alt="Alert circle"
          className={classes.imgAlert}
        />
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
      //gridTemplateRows: '1fr 2fr 1fr 1fr',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 20,
      overflow: 'hidden',
      position: 'relative',
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
      paddingTop: 70,
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
      height: 38,
      lineHeight: '36px',
      borderRadius: 10,
      fontSize: 12,
      fontWeight: 500,
      textTransform: 'none',
      width: '40%',
      padding: '0 14px',
      background: 'var(--rose, #F46B5D)',
      '&:hover': {
        backgroundColor: 'var(--fish, #FB8F67)',
      },
    },
    imgAlert: {
      display: 'block',
      marginTop: '100px',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '31px',
      height: '31px',
      flexShrink: 0,
      strokeWidth: '2px',
      stroke: 'var(--red, #F1562A)',
    },
    groupBtn: {
      display: 'flex',
      justifyContent: 'center',
      width: '90%',
      margin: '70px auto',
    },

    iconButton: {
      width: '24px',
      height: '24px',
      flexShrink: 0,
      position: 'absolute',
      top: '30px',
      right: '0',
      borderRadius: '0',
      border: '1px solid #ccc',
    },
    closeIcon: {
      fontSize: '16px',
    },
  }
})
