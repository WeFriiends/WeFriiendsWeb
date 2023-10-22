import { useState } from 'react'
import {
  Typography,
  Box,
  Button,
  Backdrop,
  CircularProgress,
} from '@mui/material'
import { useDialog } from '../../context/dialogContext'

import { commonStyles } from '../../styles/commonStyles'

// в Security передавать userId, userName френда, id авторизованного пользователя (или оно из контекста?)
const Security = () => {
  const { closeDialog } = useDialog()
  const { classes } = commonStyles()
  const [currentStep, setCurrentStep] = useState('securityOptions')
  const [isBackdropOpen, setIsBackdropOpen] = useState(false)

  const handleStepChange = (step) => {
    setIsBackdropOpen(true)
    setTimeout(() => {
      setCurrentStep(step)
      setIsBackdropOpen(false)
    }, 300)
  }

  const renderSecurityOptions = () => (
    <>
      <Typography variant="h1" className={classes.titleSecondary}>
        Security
      </Typography>

      <Typography className={classes.subTitleSecondary}>
        Select the reason for the complaint – we will definitely take action
      </Typography>
      <Box className={classes.shadowBox}>
        <Button
          fullWidth
          className={classes.dialogOption}
          onClick={() => handleStepChange('deleteUser')}
        >
          Delete from friends Elena S.
        </Button>
        <Button fullWidth className={classes.dialogOption}>
          Report
        </Button>
        <Button
          fullWidth
          className={classes.dialogOption}
          onClick={() => handleStepChange('blockUser')}
        >
          Block user
        </Button>
        <Button fullWidth className={classes.dialogOption}>
          Security materials
        </Button>
      </Box>
    </>
  )

  const renderDeleteUser = () => (
    <>
      <Typography variant="h1" className={classes.titleSecondary}>
        Delete Elena S.
      </Typography>

      <Typography className={classes.subTitleSecondary}>
        Are you sure you want to delete user from friends?
      </Typography>

      <Box className={classes.buttonGroup}>
        <Button
          variant="outlined"
          className={classes.dialogBtn}
          onClick={closeDialog}
        >
          cancel
        </Button>
        <Button
          variant="contained"
          className={classes.dialogBtn}
          onClick={() => handleStepChange('userDeleted')} // тут запрос в БД, состояние меняем после удаления юзера из друзей
        >
          delete
        </Button>
      </Box>
    </>
  )

  const renderUserDeleted = () => (
    <>
      <Typography variant="h1" className={classes.titleSecondary}>
        User deleted
      </Typography>

      <Typography className={classes.subTitleSecondary}>
        Elena S. is deleted from your friends.
      </Typography>

      <Box className={classes.buttonGroup}>
        <Button
          variant="contained"
          className={classes.dialogBtn}
          onClick={closeDialog}
        >
          OK, thanks!
        </Button>
      </Box>
    </>
  )

  const renderBlockUser = () => (
    <>
      <Typography variant="h1" className={classes.titleSecondary}>
        Block Elena S.
      </Typography>

      <Typography className={classes.subTitleSecondary}>
        Are you sure you want to block user?
      </Typography>

      <Box className={classes.buttonGroup}>
        <Button
          variant="outlined"
          className={classes.dialogBtn}
          onClick={closeDialog}
        >
          cancel
        </Button>
        <Button
          variant="contained"
          className={classes.dialogBtn}
          onClick={() => handleStepChange('userBlocked')} // тут запрос в БД, состояние меняем после блокирования юзера
        >
          block
        </Button>
      </Box>
    </>
  )

  const renderUserBlocked = () => (
    <>
      <Typography variant="h1" className={classes.titleSecondary}>
        User blocked
      </Typography>

      <Typography className={classes.subTitleSecondary}>
        Elena S. is blocked.
      </Typography>

      <Box className={classes.buttonGroup}>
        <Button
          variant="contained"
          className={classes.dialogBtn}
          onClick={closeDialog}
        >
          OK, thanks!
        </Button>
      </Box>
    </>
  )

  const renderStep = () => {
    switch (currentStep) {
      case 'securityOptions':
        return renderSecurityOptions()
      case 'deleteUser':
        return renderDeleteUser()
      case 'userDeleted':
        return renderUserDeleted()
      case 'blockUser':
        return renderBlockUser()
      case 'userBlocked':
        return renderUserBlocked()
      default:
        return null
    }
  }

  return (
    <>
      {renderStep()}
      <Backdrop
        open={isBackdropOpen}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

export default Security
