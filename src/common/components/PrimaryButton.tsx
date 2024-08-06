import { Box, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

type NextStepButtonProps = {
  onClickHandler: () => void
  disabled?: boolean
  label: string
}

const PrimaryButton: React.FC<NextStepButtonProps> = ({
  onClickHandler,
  disabled,
  label,
}) => {
  const { classes } = useStyles()
  return (
    <Box className={classes.nextPageContainer}>
      <Button
        onClick={onClickHandler}
        className={`${classes.button} ${
          disabled ? classes.disabledButton : classes.activeButton
        }`}
        disabled={disabled}
      >
        {label}
      </Button>
    </Box>
  )
}

export default PrimaryButton

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
