import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useNavigate } from 'react-router'
import React from 'react'
import { CommonModal } from '../commonModal/CommonModal'
import { commonStyles } from '../../styles/commonStyles'

const ReportReceived = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }
  const commonClasses = commonStyles().classes

  return (
    <CommonModal
      isOpened={true}
      modalTitle={'modal-modal-title'}
      modalDescription={'modal-modal-description'}
      onClose={handleGoBack}
      shortHeight
    >
      <Box className={classes.reportContainer}>
        <img
          src="/img/report/icon-alert.svg"
          alt="Alert circle"
          className={classes.imgAlert}
        />
        <Box>
          <Typography variant="h2" className={classes.title}>
            Report Received
          </Typography>
          <Typography className={classes.content}>
            Thank you for your message. We will review it as soon as possible
            and take care about this problem.
          </Typography>
        </Box>

        <Button
          variant="contained"
          fullWidth
          className={`${commonClasses.submitButton} ${classes.okBtn}`}
        >
          OK, thanks!
        </Button>
      </Box>
    </CommonModal>
  )
}

export default ReportReceived

const useStyles = makeStyles()(() => {
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
    },
    imgAlert: {
      margin: '0 auto',
    },

    okBtn: {
      textTransform: 'none',
      maxWidth: 260,
      height: 60,
      margin: '40px auto 0',
    },
  }
})
