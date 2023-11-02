import { Typography, Box, Button } from '@mui/material'
import React from 'react'

interface DeleteUserProps {
  classes: Record<string, string>
  closeDialog: () => void
  handleStepChange: (step: string) => void
  userFriendId: string
  userFriendName: string
}

const DeleteUser: React.FC<DeleteUserProps> = ({
  classes,
  closeDialog,
  handleStepChange,
  userFriendId,
  userFriendName,
}) => {
  return (
    <>
      <Typography variant="h1" className={classes.titleSecondary}>
        Delete {userFriendName}
      </Typography>

      <Typography className={classes.subTitleSecondary}>
        Are you sure you want to delete the user from friends?
      </Typography>

      <Box className={classes.buttonGroup}>
        <Button
          variant="outlined"
          className={classes.dialogBtn}
          onClick={closeDialog}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          className={classes.dialogBtn}
          onClick={() => handleStepChange('userDeleted')} // тут запрос в БД, состояние меняем после удаления юзера из друзей
        >
          Delete
        </Button>
      </Box>
    </>
  )
}

export default DeleteUser
