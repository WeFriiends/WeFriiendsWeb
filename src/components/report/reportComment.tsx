import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useNavigate, useParams } from 'react-router'
import CommentInput from './commentInput'
import { CommonModal } from '../commonModal/CommonModal'
import React from 'react'

const ReportComment = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }

  const { buttonName } = useParams()

  return (
    <CommonModal
      isOpened={true}
      modalTitle={'modal-modal-title'}
      modalDescription={'modal-modal-description'}
      onClose={handleGoBack}
    >
      <Box className={classes.reportContainer}>
        <img
          src="/img/report/icon-alert.svg"
          alt="Alert circle"
          className={classes.imgAlert}
        />
        <Box>
          <Typography variant="h2" className={classes.title}>
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
            className={classes.linkBtn}
            disableFocusRipple
            disableRipple
            disableElevation
          >
            {buttonName}
            <img
              src="/img/report/check.svg"
              alt="check"
              className={classes.checkImg}
            />
          </Button>
          <CommentInput />
        </Box>
      </Box>
    </CommonModal>
  )
}

export default ReportComment

const useStyles = makeStyles()((theme) => {
  return {
    reportContainer: {
      display: 'grid',
    },
    title: {
      textAlign: 'center',
      paddingTop: 15,
      paddingBottom: 15,
    },
    content: {
      fontSize: 14,
      textAlign: 'center',
      paddingBottom: 20,
    },
    shadowBox: {
      [theme.breakpoints.down(370)]: {
        borderRadius: 10,
        boxShadow: '0 0 7px 1px rgba(179, 179, 179, 0.14)',
        padding: '30px 20px',
        marginBottom: 10,
      },
    },
    linkBtn: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: theme.palette.primary.light,
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 600,
      padding: '0 14px',
      flexShrink: 0,
      paddingTop: 10,
      paddingBottom: 10,
      textAlign: 'left',
      textTransform: 'none',
      color: theme.palette.common.white,
      height: 50,
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
    },
    imgAlert: {
      margin: '0 auto',
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
