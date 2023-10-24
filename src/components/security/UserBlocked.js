import React from 'react'
import { Typography, Box, Button } from '@mui/material'

const UserBlocked = ({ classes, closeDialog }) => (
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

export default UserBlocked
