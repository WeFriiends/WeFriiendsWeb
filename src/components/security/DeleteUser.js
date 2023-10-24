import { Typography, Box, Button } from '@mui/material'

const DeleteUser = ({ classes, closeDialog, handleStepChange }) => (
  <>
    <Typography variant="h1" className={classes.titleSecondary}>
      Delete Elena S.
    </Typography>

    <Typography className={classes.subTitleSecondary}>
      Are you sure you want to delete user from friends?
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
        onClick={() => handleStepChange('userDeleted')} // тут запрос в БД, состояние меняем после удаления юзера из друзей
      >
        delete
      </Button>
    </Box>
  </>
)

export default DeleteUser
