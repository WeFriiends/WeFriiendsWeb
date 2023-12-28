import React from 'react'
import { Typography, Box, Button } from '@mui/material'

interface ActionConfirmProps {
  classes: Record<string, string>
  closeDialog: () => void
  userFriendName: string
  title: string
  actionConfirm: 'deleted' | 'blocked'
}

const ActionConfirm: React.FC<ActionConfirmProps> = ({
  classes,
  closeDialog,
  userFriendName,
  title,
  actionConfirm,
}: ActionConfirmProps) => (
  <>
    <Typography variant="h1" className={classes.titleSecondary}>
      {title}
    </Typography>

    <Typography className={classes.subTitleSecondary}>
      {userFriendName}{' '}
      {actionConfirm === 'deleted'
        ? 'is deleted from your friends.'
        : 'is blocked.'}
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

export default ActionConfirm
