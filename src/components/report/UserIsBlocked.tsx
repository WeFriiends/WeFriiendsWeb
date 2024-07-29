import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'
import { commonStyles } from '../../styles/commonStyles'

type UserIsBlockedProps = {
  closeModal: () => void
}

const UserIsBlocked: React.FC<UserIsBlockedProps> = ({ closeModal }) => {
  const { classes } = useStyles()
  const handleCloseModal = () => closeModal()

  const commonClasses = commonStyles().classes

  return (
    <Box className={classes.reportContainer}>
      <Typography variant="h2" className={classes.title}>
        User is blocked
      </Typography>

      <Button
        variant="contained"
        fullWidth
        disableRipple
        className={`${commonClasses.submitButton} ${classes.okBtn}`}
        onClick={handleCloseModal}
      >
        OK, thanks!
      </Button>
    </Box>
  )
}

export default UserIsBlocked

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
