import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  Button,
  SvgIcon,
  Icon,
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
      <Accordion className={classes.accordion}>
        <AccordionSummary expandIcon={<img src="/img/arrow-down.svg" />}>
          <Box>
            <Typography className={classes.name}>Elena S., 36</Typography>
            <Box className={classes.distanceWithIcon}>
              <SvgIcon>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.02 8.83325C17.02 11.5489 15.2622 14.1354 13.407 16.0935C12.4897 17.0618 11.5707 17.8534 10.8804 18.403C10.5357 18.6776 10.249 18.8909 10.0495 19.035C10.0395 19.0423 10.0296 19.0494 10.02 19.0563C10.0104 19.0494 10.0006 19.0423 9.9905 19.035C9.791 18.8909 9.50434 18.6776 9.15961 18.403C8.46935 17.8534 7.55033 17.0618 6.633 16.0935C4.77789 14.1354 3.02002 11.5489 3.02002 8.83325C3.02002 6.97674 3.75752 5.19626 5.07027 3.8835C6.38303 2.57075 8.1635 1.83325 10.02 1.83325C11.8765 1.83325 13.657 2.57075 14.9698 3.8835C16.2825 5.19626 17.02 6.97674 17.02 8.83325Z"
                    stroke="#444444"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.02 8.83325C12.02 9.93782 11.1246 10.8333 10.02 10.8333C8.91545 10.8333 8.02002 9.93782 8.02002 8.83325C8.02002 7.72868 8.91545 6.83325 10.02 6.83325C11.1246 6.83325 12.02 7.72868 12.02 8.83325Z"
                    stroke="#444444"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </SvgIcon>
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
    distanceWithIcon: {
      display: 'flex',
      alignItems: 'flex-end',
      padding: '16px 0 6px',
    },
    distance: {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: '20px',
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
    accordion: {
      marginTop: -106,
    },
  }
})
