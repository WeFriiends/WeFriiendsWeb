import { useState } from 'react'
import {
  Typography,
  Box,
  Button,
  Backdrop,
  CircularProgress,
} from '@mui/material'
import { useDialog } from '../../context/dialogContext'
import DeleteUser from './DeleteUser'
import UserDeleted from './UserDeleted'
import BlockUser from './BlockUser'
import UserBlocked from './UserBlocked'

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

  const renderStep = () => {
    switch (currentStep) {
      case 'securityOptions':
        return renderSecurityOptions()
      case 'deleteUser':
        return (
          <DeleteUser
            classes={classes}
            closeDialog={closeDialog}
            handleStepChange={handleStepChange}
          />
        )
      case 'userDeleted':
        return <UserDeleted classes={classes} closeDialog={closeDialog} />
      case 'blockUser':
        return (
          <BlockUser
            classes={classes}
            closeDialog={closeDialog}
            handleStepChange={handleStepChange}
          />
        )
      case 'userBlocked':
        return <UserBlocked classes={classes} closeDialog={closeDialog} />
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
