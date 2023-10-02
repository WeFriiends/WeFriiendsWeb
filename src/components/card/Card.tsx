import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  Button,
} from '@mui/material'
import CircleRoundedIcon from '@mui/icons-material/CircleRounded'
import { makeStyles } from 'tss-react/mui'

const Card = () => {
  const { classes } = useStyles()
  return (
    <Box>
      <Box className={classes.iconsAbove}>
        <Box className={classes.likesYou}>
          <img src="/img/likes_me.svg" alt="likes me" />
          <Typography>Likes you</Typography>
        </Box>
        <img src="/img/verified.svg"></img>
      </Box>

      <Box
        component="img"
        src="/img/foto_Elena.jpg"
        alt="card"
        className={classes.foto}
      />

      <Accordion className={classes.accordion}>
        <AccordionSummary expandIcon={<img src="/img/arrow-down.svg" />}>
          <Box>
            <Box sx={{ display: 'flex' }}>
              <Typography className={classes.name}>Elena S., 36</Typography>
              <CircleRoundedIcon
                className={classes.roundIcon}
              ></CircleRoundedIcon>
            </Box>
            <Box className={classes.distanceWithIcon}>
              <img src="/img/near_me.svg" height={20} width={20} />
              <Typography className={classes.distance}>
                from Roma, 10 km from you
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h3" className={classes.title}>
            About Me
          </Typography>
          <Typography className={classes.text}>
            I am a talented, ambitious and hardworking individual, with broad
            skills and experience in digital and printed marketing, social media
            and leading projects.
          </Typography>
          <Typography variant="h3" className={classes.title}>
            Education and Profession
          </Typography>
          <Typography className={classes.text}>Freelance Journalist</Typography>
          <Typography className={classes.text}>Bachelor degree</Typography>
        </AccordionDetails>
      </Accordion>
      <Box className={classes.buttonSection}>
        <Button className={classes.whiteButton}> Skip </Button>
        <Button className={classes.orangeButton}>Be friend</Button>
      </Box>
    </Box>
  )
}
export default Card

const useStyles = makeStyles()(() => {
  return {
    iconsAbove: {
      display: 'flex',
      justifyContent: 'space-between',
      zIndex: 1,
      position: 'relative',
      marginBottom: -66,
      padding: '0 11px',
    },
    likesYou: {
      display: 'flex',
      borderRadius: 4,
      background: 'rgba(255, 241, 236, 0.80)',
      width: 111,
      height: 37,
      alignItems: 'center',
      gap: 4,
      padding: '3px 5px',
    },
    buttonSection: {
      display: 'flex',
      justifyContent: 'center',
      gap: 19,
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FEDED2 100%)',
      paddingTop: 27,
      paddingBottom: 24,
    },
    orangeButton: {
      backgroundColor: '#FB8F67',
      color: '#FFFFFF',
      fontSize: 22,
      fontWeight: 700,
      lineHeight: '20px',
      borderRadius: 10,
      width: 141,
      height: 58,
      textTransform: 'capitalize',
      '&: hover': {
        backgroundColor: '#FB8F67',
      },
    },
    whiteButton: {
      backgroundColor: '#FFFFFF',
      border: '2px solid #FB8F67',
      color: '#FB8F67',
      borderRadius: 10,
      fontSize: 22,
      fontWeight: 600,
      lineHeight: '20px',
      width: 141,
      height: 58,
      textTransform: 'capitalize',
    },
    name: {
      color: '#F46B5D',
      fontSize: 44,
      fontWeight: 600,
      lineHeight: '40px',
    },
    roundIcon: {
      fill: '#77BD65',
      width: 15,
      height: 15,
      marginLeft: 5,
    },
    distanceWithIcon: {
      display: 'flex',
      alignItems: 'flex-end',
      padding: '16px 0 6px',
    },
    distance: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: '20px',
      paddingLeft: 4,
    },
    title: {
      color: '#F1562A',
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '20px',
      paddingBottom: 15,
      paddingTop: 35,
    },
    text: {
      fontSize: 14,
      lineHeight: '22px',
    },
    foto: {
      height: '100%',
      width: '100%',
    },
    accordion: {
      marginTop: -106,
      '&.Mui-expanded ': {
        margin: '-106px 0 0 0',
      },
    },
  }
})
