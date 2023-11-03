import React from 'react'
import { Typography, Box, Button } from '@mui/material'

interface UserActionProps {
  classes: Record<string, string>
  closeDialog: () => void
  handleStepChange: (step: string) => void
  userFriendId: string
  userFriendName: string
  actionText: string
  action: string
}

const UserAction: React.FC<UserActionProps> = ({
  classes,
  closeDialog,
  handleStepChange,
  userFriendId,
  userFriendName,
  actionText,
  action,
}) => (
  <>
    <Typography
      variant="h1"
      className={`${classes.titleSecondary} ${classes.textCapitalizee}`}
    >
      {`${actionText} ${userFriendName}`}
    </Typography>

    <Typography className={classes.subTitleSecondary}>
      Are you sure you want to
      {actionText === 'block' ? ' block user' : ' delete user from friends'}?
    </Typography>

    <Box className={classes.buttonGroup}>
      <Button
        variant="outlined"
        className={`${classes.dialogBtn}  ${classes.textLow}`}
        onClick={closeDialog}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        className={`${classes.dialogBtn}  ${classes.textlow}`}
        onClick={() => handleStepChange(`user${action}`)}
        // тут запрос в БД, состояние меняем после блокирования или удаления юзера
      >
        {actionText}
      </Button>
    </Box>
  </>
)

export default UserAction
