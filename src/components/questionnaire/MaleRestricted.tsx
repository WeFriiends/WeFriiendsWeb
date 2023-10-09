import Logo from '../logo/Logo'
import { Typography, Box, Link, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const MaleRestricted = () => {
  const { classes } = useStyles()
  return (
    <Box className={classes.mainBox}>
      <Box>
        <Logo />
      </Box>
      <Box>
        <Typography variant="h1" className={classes.title}>
          Sorry!
          <br />
          There is no friends in your area
        </Typography>
      </Box>
      <Box className={classes.box}>
        <Box component="img" src="../img/emoji.svg" alt="emoji"></Box>
      </Box>
      <Box className={classes.box}>
        <Link href="#" underline="none">
          <Button className={classes.startButton} variant="contained">
            ok
          </Button>
        </Link>
      </Box>
    </Box>
  )
}

export default MaleRestricted

const useStyles = makeStyles()((theme) => {
  return {
    mainBox: {
      display: 'grid',
      width: 400,
      gridTemplateRows: 'auto',
      alignItems: 'center',
      margin: '0 auto',
    },
    box: {
      textAlign: 'center',
    },
    title: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: '40px',
      paddingTop: 100,
      paddingBottom: 20,
      margin: '0 auto',
      color: '#F46B5D',
      textAlign: 'center',
      width: 295,
    },
    startButton: {
      width: 180,
      marginTop: 90,
      marginBottom: 30,
      textTransform: 'uppercase',
      backgroundColor: '#FB8F67',
      color: '#FFFFFF',
      height: 60,
      fontSize: 18,
      fontWeight: 600,
      borderRadius: 10,
      '&: hover': {
        backgroundColor: '#FB8F67',
      },
    },
  }
})
