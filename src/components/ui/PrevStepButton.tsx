import { Box, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

type PreviousStepButtonProps = {
  onSubmit: (action: string) => void
}

const PrevStepButton = (props: PreviousStepButtonProps) => {
  const { onSubmit } = props
  const { classes } = useStyles()

  return (
    <Box className={classes.prevPageContainer}>
      <Button
        className={classes.prevPageButton}
        startIcon={
          <img
            alt="previous page"
            src={'/img/navigationIcons/arrow_back.svg'}
            style={{ margin: 0 }}
          />
        }
        // onClick={onSubmit}
      />
    </Box>
  )
}

export default PrevStepButton

const useStyles = makeStyles()(() => {
  return {
    prevPageContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 80,
      marginBottom: 45,
    },
    prevPageButton: {
      width: 45,
      minWidth: 45,
      height: 45,
      paddingLeft: 18,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      background: '#FEDED2',
    },
  }
})
