import { backdropClasses, Box, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

type NextStepButtonProps = {
  stepForwardHandler: () => void
  disabled: boolean
}

const NextStepButton: React.FC<NextStepButtonProps> = ({
  stepForwardHandler,
  disabled,
}) => {
  const { classes } = useStyles()
  return (
    <Box className={classes.nextPageContainer}>
      <Button
        onClick={stepForwardHandler}
        className={`${classes.button} ${
          disabled ? classes.disabledButton : classes.activeButton
        }`}
        disabled={disabled}
      >
        Next
      </Button>
    </Box>
  )
}

export default NextStepButton

const useStyles = makeStyles()(() => {
  return {
    nextPageContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 50,
    },
    button: {
      marginTop: 10,
      border: '2px solid salmon',
      borderRadius: 5,
      width: 300,
      height: 40,
      alignItems: 'center',
      fontSize: 18,
      textTransform: 'none',
    },
    disabledButton: {
      color: 'salmon',
      backgroundColor: 'white',
    },
    activeButton: {
      color: 'white',
      backgroundColor: 'salmon',
      '&:hover': {
        backgroundColor: '#F1562A',
      },
    },
  }
})
