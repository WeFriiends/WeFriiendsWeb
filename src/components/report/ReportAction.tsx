import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useNavigate } from 'react-router'
import { CommonModal } from '../commonModal/CommonModal'
import theme from '../../styles/createTheme'

const ReportAction = () => {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }

  const handleBlock = () => {
    alert('handle block')
    navigate('/report/user-is-blocked')
  }

  return (
    <CommonModal
      isOpened={true}
      modalTitle={'modal-modal-title'}
      modalDescription={'modal-modal-description'}
      onClose={handleGoBack}
      height={320}
    >
      <Box className={classes.reportContainer}>
        <img
          src="/img/report/icon-alert.svg"
          alt="Alert circle"
          className={classes.imgAlert}
        />
        <Typography variant="h2" className={classes.title}>
          Report user
        </Typography>
        <Box className={classes.btnContainer}>
          <Button
            onClick={handleBlock}
            className={classes.linkBtn}
            disableFocusRipple
            disableRipple
            disableElevation
          >
            Block
          </Button>
          <Button
            href={'/report/report-form'}
            className={classes.linkBtn}
            disableFocusRipple
            disableRipple
            disableElevation
          >
            Report
          </Button>
        </Box>
      </Box>
    </CommonModal>
  )
}

export default ReportAction

const useStyles = makeStyles()({
  reportContainer: {
    display: 'grid',
  },
  title: {
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 40,
  },
  imgAlert: {
    margin: '0 auto',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 20,
    margin: '0 15px',
  },
  linkBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    flexGrow: 1,
    flexBasis: 0,
    borderRadius: 10,
    padding: '0 14px',
    boxShadow: '0 0 7px 1px rgba(179, 179, 179, 0.35)',
    textTransform: 'none',
    color: theme.palette.text.primary,
    marginBottom: 10,
    fontSize: 14,
    transition: 'color .3s, background-color .3s',
    height: 50,
    fontWeight: 400,
    '&:active, &:hover': {
      fontWeight: 600,
      background: theme.palette.primary.light,
      color: theme.palette.common.white,
    },
  },
})
