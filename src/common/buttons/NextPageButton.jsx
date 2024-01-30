import { Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const NextPageButton = ({ nextPageLink, onClick }) => {
  const { classes } = useStyles()

  return (
    <Button
      className={classes.nextPageButton}
      href={nextPageLink}
      onClick={onClick}
    >
      Next
    </Button>
  )
}

export default NextPageButton

const useStyles = makeStyles()((theme) => {
  return {
    nextPageButton: {
      width: 350,
      height: 60,
      padding: '18px 24px',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      background: '#FB8F67',
      color: '#FFF',
      textTransform: 'none',
      fontFamily: 'Inter',
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: 600,
      lineHeight: 24,
      [theme.breakpoints.up('sm')]: {
        width: 400,
      },
    },
  }
})
