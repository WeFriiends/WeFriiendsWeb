import { Box, Typography, Button } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import IconButton from '@mui/material/IconButton'
import { makeStyles } from 'tss-react/mui'
import { useNavigate, useParams } from 'react-router'
import CommentInput from './commentInput'

const ReportComment = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }

  const { buttonName } = useParams()

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

        <Typography variant="h1" className={classes.title}>
          Report
        </Typography>
        <Typography className={classes.content}>
          Select the reason for the complaint – we will definitely take action
        </Typography>
      </Box>
      <Box className={classes.shadowBox}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.linkBtn}
        >
          <img
            src={require('./Images/check.png')}
            alt="check"
            className={classes.checkImg}
            // style={{ width: '20px', height: '20px', marginLeft: '10px' }}
          />

          {buttonName}
        </Button>
        <CommentInput />
      </Box>
    </Box>
  )
}

export default ReportComment

const useStyles = makeStyles()((theme) => {
  return {
    mainBox: {
      display: 'grid',
      //gridTemplateRows: '1fr 2fr 2fr 1fr',
      //rowGap: '0',
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
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      background: 'var(--fish, #FB8F67)',
      boxShadow: '0px 0px 7px 1px rgba(179, 179, 179, 0.14)',
      borderRadius: 10,
      fontSize: 14,
      padding: '0 14px',
      '&:hover': {
        backgroundColor: 'var(--fish, #FB8F67)',
      },
      flexShrink: 0,
      paddingTop: 10,
      paddingBottom: 10,
      textAlign: 'left',
      textTransform: 'none',
      color: '#FFF',
      marginBottom: 5,
    },
    imgAlert: {
      display: 'block',
      marginTop: '80px',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '31px',
      height: '31px',
      flexShrink: 0,
      strokeWidth: '2px',
      stroke: 'var(--red, #F1562A)',
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
    checkImg: {
      fontSize: '16px',
    },
  }
})
