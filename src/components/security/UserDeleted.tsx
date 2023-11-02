import { Typography, Box, Button } from '@mui/material'

interface UserDeletedProps {
  classes: Record<string, string>
  closeDialog: () => void
  userFriendName: string
}

const UserDeleted: React.FC<UserDeletedProps> = ({
  classes,
  closeDialog,
  userFriendName,
}) => (
  <>
    <Typography variant="h1" className={classes.titleSecondary}>
      User deleted
    </Typography>

    <Typography className={classes.subTitleSecondary}>
      {userFriendName} is deleted from your friends.
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

export default UserDeleted
