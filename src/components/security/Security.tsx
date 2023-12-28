import React, { useState } from 'react'
import {
  Typography,
  Box,
  Button,
  Backdrop,
  CircularProgress,
} from '@mui/material'
import { useDialog } from '../../context/dialogContext'
import UserAction from './UserAction'
import ActionConfirm from './ActionConfirm'

import { commonStyles } from '../../styles/commonStyles'

// в Security передавать userId френда, userName френда, id авторизованного пользователя (или оно из контекста?)
interface SecurityProps {
  userId: string //need to be passed?  type number? define the correct types for these props
  userFriendId: string // or number??
  userFriendName: string
}

const Security: React.FC<SecurityProps> = ({
  userId,
  userFriendId,
  userFriendName = 'Elena S.', // пока имя по умолчанию для тестирования
}) => {
  const { closeDialog } = useDialog()
  const { classes } = commonStyles()
  const [currentStep, setCurrentStep] = useState<string>('securityOptions')

  const [isBackdropOpen, setIsBackdropOpen] = useState(false)

  const handleStepChange = (step: string) => {
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
          Delete from friends {userFriendName}
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
          <UserAction
            classes={classes}
            closeDialog={closeDialog}
            handleStepChange={handleStepChange}
            userFriendId={userFriendId}
            userFriendName={userFriendName}
            actionText="delete"
            action="Deleted"
          />
        )
      case 'userDeleted':
        return (
          <ActionConfirm
            classes={classes}
            closeDialog={closeDialog}
            userFriendName={userFriendName}
            title="User deleted"
            actionConfirm="deleted"
          />
        )
      case 'blockUser':
        return (
          <UserAction
            classes={classes}
            closeDialog={closeDialog}
            handleStepChange={handleStepChange}
            userFriendId={userFriendId}
            userFriendName={userFriendName}
            actionText="block"
            action="Blocked"
          />
        )
      case 'userBlocked':
        return (
          <ActionConfirm
            classes={classes}
            closeDialog={closeDialog}
            userFriendName={userFriendName}
            title="User blocked"
            actionConfirm="blocked"
          />
        )
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
