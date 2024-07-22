import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'
import React, { useState } from 'react'
import { CommonModal } from '../commonModal/CommonModal'
import { commonStyles } from '../../styles/commonStyles'

const ReportReceived = () => {
  const { classes } = useStyles()
  const [isModalVisible, setIsModalVisible] = useState(true)
  const hideModal = () => setIsModalVisible(false)

  const commonClasses = commonStyles().classes

  return (
    <CommonModal
      isOpened={isModalVisible}
      modalTitle={'modal-modal-title'}
      modalDescription={'modal-modal-description'}
      onClose={hideModal}
      height={320}
    >
      <Box className={classes.reportContainer}>
        <Typography variant="h2" className={classes.title}>
          User is blocked
        </Typography>

        <Button
          variant="contained"
          fullWidth
          disableRipple
          className={`${commonClasses.submitButton} ${classes.okBtn}`}
          onClick={hideModal}
        >
          OK, thanks!
        </Button>
      </Box>
    </CommonModal>
  )
}

export default ReportReceived

const useStyles = makeStyles()({
  reportContainer: {
    display: 'grid',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    paddingTop: 40,
    paddingBottom: 5,
  },
  content: {
    fontSize: 14,
    textAlign: 'center',
    margin: '0 5px',
    color: theme.palette.common.black,
  },
  imgAlert: {
    margin: '0 auto',
  },
  okBtn: {
    textTransform: 'none',
    maxWidth: 260,
    height: 60,
    margin: '40px auto 0',
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: theme.palette.primary.main,
    },
  },
})
