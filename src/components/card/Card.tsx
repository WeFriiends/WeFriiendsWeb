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
      <img src="/img/foto_Elena.jpg" alt="card" />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Elena S., 36</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h3">About Me</Typography>
          <Typography>
            I am a talented, ambitious and hardworking individual, with broad
            skills and experience in digital and printed marketing, social media
            and leading projects.
          </Typography>
          <Typography variant="h3">Education and Profession</Typography>
          <Typography>Freelance Journalist Bachelor degree</Typography>
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
  }
})
