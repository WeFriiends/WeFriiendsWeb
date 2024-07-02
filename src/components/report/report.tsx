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
  const reportReasons = [
    { text: 'Spam', href: 'report/reportComment/Spam' },
    { text: 'Report abuse', href: 'report/reportComment/Report abuse' },
    {
      text: 'Inappropriate photos',
      href: '/reportComment/Inappropriate photos',
    },
    { text: 'Other', href: '/reportComment/Other' },
  ]

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
          {reportReasons.map((reason) => (
            <Button
              key={reason.text} // Add a unique key for each item
              href={reason.href}
              fullWidth
              className={classes.linkBtn}
              disableFocusRipple
              disableRipple
              disableElevation
            >
              {reason.text}
              <img
                src="/img/report/check.svg"
                alt="check"
                className={classes.checkImg}
              />
            </Button>
          ))}
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
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 10,
      padding: '0 14px',
      boxShadow: '0 0 7px 1px rgba(179, 179, 179, 0.35)',
      textAlign: 'left',
      textTransform: 'none',
      color: theme.palette.text.primary,
      marginBottom: 10,
      fontSize: 14,
      flexShrink: 0,
      transition: 'color .3s, background-color .3s',
      height: 50,
      fontWeight: 500,
      '&:active, &:hover': {
        fontWeight: 500,
        background: theme.palette.primary.light,
        color: theme.palette.common.white,
      },
    },
    checkImg: {
      fontSize: '16px',
    },
  }
})
