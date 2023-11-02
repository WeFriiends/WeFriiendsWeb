import React from 'react'
import { Typography, Box, Button } from '@mui/material'

interface UserBlockedProps {
  classes: Record<string, string>
  closeDialog: () => void
  userFriendName: string
}

const UserBlocked: React.FC<UserBlockedProps> = ({
  classes,
  closeDialog,
  userFriendName,
}) => (
  <>
    <Typography variant="h1" className={classes.titleSecondary}>
      User blocked
    </Typography>

    <Typography className={classes.subTitleSecondary}>
      {userFriendName} is blocked.
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

export default UserBlocked
