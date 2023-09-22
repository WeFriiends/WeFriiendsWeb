import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  Button,
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const Card = () => {
  const { classes } = useStyles()
  return (
    <Box>
      <Box
        component="img"
        src="/img/foto_Elena.jpg"
        alt="card"
        className={classes.img}
      />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Box>
            <Typography className={classes.name}>Elena S., 36</Typography>
            <Typography className={classes.distance}>
              from Roma, 10 km from you
            </Typography>
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
    distance: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: '20px',
      padding: '16px 0 6px',
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
    img: {
      height: '100%',
      width: '100%',
    },
  }
})
