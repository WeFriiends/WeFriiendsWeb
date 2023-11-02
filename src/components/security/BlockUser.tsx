import React from 'react'
import { Typography, Box, Button } from '@mui/material'

interface BlockUserProps {
  classes: Record<string, string>
  closeDialog: () => void
  handleStepChange: (step: string) => void
  userFriendId: string
  userFriendName: string
}

const BlockUser: React.FC<BlockUserProps> = ({
  classes,
  closeDialog,
  handleStepChange,
  userFriendId,
  userFriendName,
}) => (
  <>
    <Typography variant="h1" className={classes.titleSecondary}>
      Block {userFriendName}
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

export default BlockUser
