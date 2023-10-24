import { Typography, Box, Button } from '@mui/material'

const UserDeleted = ({ classes, closeDialog }) => (
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

export default UserDeleted
