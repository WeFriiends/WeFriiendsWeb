import Logo from '../logo/Logo'
import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "tss-react/mui"
import { styled } from "@mui/material/styles";




const NameProfile = () => {
  const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
    },
    '& input': {
      textAlign: 'center',
    },
  })

  const { classes } = useStyles()
  return (
    <Box className={classes.mainBox}>
      <Logo />
      <Typography variant="h1" className={classes.title}>
        Let's get started!
      </Typography>
      <Typography variant="body1" className={classes.text}>
        What's your name?
      </Typography>
      <form>
        <FormControl fullWidth>
          <CssTextField>
            sx={{ backgroundColor: '#FFF1EC', borderRadius: 2.5 }}
            type="text"
            id="name"
          </CssTextField>
        <OutlinedInput
          className={classes.profileInput}
          type="text"
          id="password"
        ></OutlinedInput>
        </FormControl>
      </form>
      <Button
        fullWidth
        variant="outlined"
        className={classes.nextButton}>
        Next
      </Button>

    </Box>
  )
}
export default NameProfile

const useStyles = makeStyles()((theme) => {
  return {
    mainBox: {
      display: 'grid',
      gridTemplateRows: '1fr 2fr 1fr 2fr',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 20,
      [theme.breakpoints.up('sm')]: {
        width: 400,
        margin: '0 auto',
      },
    },
    title: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: '40px',
      color: '#F46B5D',
      textAlign: 'center',
    },
    text: {
      fontSize: 18,
      lineHeight: '27px',
      color: '#444444',
      textAlign: 'center',
    },
    profileInput: {
      backgroundColor: '#FFF1EC',
      borderRadius: 10,
      outline: 'none',
      '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
    nextButton: {
      textTransform: 'capitalize',
      backgroundColor: '#FFFFFF',
      border: '2px solid #FB8F67',
      color: '#FB8F67',
      height: 56,
      fontSize: 18,
      fontWeight: 600,
      borderRadius: 10,
      marginTop: 45,
      '&: hover': {
        backgroundColor: '#FB8F67',
        color: '#FFFFFF',
        border: '2px solid #FB8F67',
      },
    },
    fbAndGoogleButton: {
      textTransform: 'capitalize',
      backgroundColor: '#FFF1EC',
      color: '#444444',
      height: 56,
      fontSize: 18,
      '&: hover': {
        backgroundColor: '#FFF1EC',
      },
    },
    textCenter: {
      textAlign: 'center',
    },
  }
})
