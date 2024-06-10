import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useNavigate } from 'react-router'
import { CommonModal } from '../commonModal/CommonModal'

const Report = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }

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
        <Box>
          <Button
            href="report/reportComment/Spam"
            fullWidth
            className={classes.linkBtn}
          >
            Spam
          </Button>
          <Button
            href="report/reportComment/Report abuse"
            fullWidth
            className={classes.linkBtn}
          >
            Report abuse
          </Button>
          <Button
            href="/reportComment/Inappropriate photos"
            fullWidth
            className={classes.linkBtn}
          >
            Inappropriate photos
          </Button>
          <Button
            href="/reportComment/Other"
            fullWidth
            className={classes.linkBtn}
          >
            Other
          </Button>
        </Box>
      </Box>
    </CommonModal>
  )
}

export default Report

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
      paddingBottom: 45,
    },
    imgAlert: {
      margin: '0 auto',
    },
    linkBtn: {
      borderRadius: 10,
      padding: 15,
      boxShadow: '0 0 7px 1px rgba(179, 179, 179, 0.35)',
      textAlign: 'left',
      textTransform: 'none',
      lineHeight: '20px',
      color: theme.palette.text.primary,
      marginBottom: 10,
      fontWeight: 400,
      transition: 'color .3s, background-color .3s',
      '&:active, &:hover': {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
      },
    },
  }
})
