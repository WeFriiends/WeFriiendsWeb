import React from 'react'
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'
//import { commonStyles } from '../../styles/commonStyles'
import PhotoCarousel from '../userProfile/PhotoCarousel'
import CircleRoundedIcon from '@mui/icons-material/CircleRounded'
import useFriendsData from '../../hooks/useFriendsData'

const PageSampleResponsive = () => {
  //const commonClasses = commonStyles().classes
  const { classes } = useStyles()
  const { friendsData } = useFriendsData()
  const user = friendsData
  user.photo.push(user.photo[0], user.photo[0], user.photo[0])

  return (
    <>
      <Box className={classes.cardWrapper}>
        <Box className={classes.mainGrid}>
          <Box className={classes.iconsAbove}>
            <Box className={classes.likesYou}>
              <img src="/img/likes_me.svg" alt="likes me" />
              <Typography className={classes.likesYouText}>
                Likes you
              </Typography>
            </Box>
            <img
              className={classes.iconVerified}
              src="/img/verified.svg"
              alt="User is verified"
            ></img>
          </Box>

          <div className={classes.carousel}>
            <PhotoCarousel items={user.photo} />
          </div>

          <Accordion className={classes.accordion}>
            <AccordionSummary
              expandIcon={<img src="/img/arrow-down.svg" alt="expand" />}
            >
              <Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography variant="h1" className={classes.name}>
                    {user.firstName} {user.lastName}, {user.age}
                  </Typography>
                  <CircleRoundedIcon
                    className={classes.roundIcon}
                  ></CircleRoundedIcon>
                </Box>
                <Box className={classes.distanceWithIcon}>
                  <img
                    src="/img/near_me.svg"
                    height={14}
                    width={14}
                    alt="distance"
                  />
                  <Typography variant="body2" className={classes.distance}>
                    from {user.city}, 10 km from you
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="h3" className={classes.title}>
                About Me
              </Typography>
              <Typography className={classes.text}>{user.aboutMe}</Typography>
              <Typography variant="h3" className={classes.title}>
                Education and Profession
              </Typography>
              <Typography className={classes.text}>
                {user.profession}
              </Typography>
              <Typography className={classes.text}>{user.education}</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box className={classes.buttonSection}>
          <Button className={classes.whiteButton}> Skip </Button>
          <Button className={classes.orangeButton}>Be friend</Button>
        </Box>
      </Box>
    </>
  )
}

export default PageSampleResponsive

const useStyles = makeStyles()(() => {
  return {
    // Sample's styles
    cardWrapper: {
      maxWidth: '542px',
      padding: '20px',
      margin: '0 auto',
    },
    // Svitlana's styles
    textWrapper: {
      textAlign: 'center',
      maxWidth: '290px',
      [theme.breakpoints.up('lg')]: {
        maxWidth: '530px',
      },
    },
    title2: {
      paddingBottom: '80px',
      paddingTop: '50px',
    },
    mainGrid: {
      display: ' grid',
    },
    iconsAbove: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      zIndex: 100,
      padding: '17px 9px 0',
      gridRow: '1/1',
      gridColumn: '1/2',
    },
    likesYou: {
      display: 'flex',
      borderRadius: 4,
      background: 'rgba(255, 241, 236, 0.80)',
      height: '30px',
      alignItems: 'center',
      gap: 4,
      padding: '5px',
    },
    carousel: {
      gridRow: '1/9',
      gridColumn: '1/2',
    },
    buttonSection: {
      display: 'flex',
      justifyContent: 'center',
      gap: 20,
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FEDED2 100%)',
      paddingTop: 27,
      paddingBottom: 24,
    },
    orangeButton: {
      backgroundColor: '#FB8F67',
      color: '#FFFFFF',
      fontSize: 14,
      fontWeight: 700,
      lineHeight: '20px',
      borderRadius: 10,
      width: 122,
      height: 50,
      textTransform: 'capitalize',
      '&: hover': {
        backgroundColor: '#FB8F67',
      },
    },
    whiteButton: {
      backgroundColor: '#fff',
      border: '2px solid #F46B5D',
      color: '#F46B5D',
      borderRadius: 10,
      fontSize: 14,
      fontWeight: 600,
      lineHeight: '20px',
      width: 122,
      height: 50,
      textTransform: 'capitalize',
      boxSizing: 'border-box',
    },
    name: {
      // color: '#F46B5D',
      // fontSize: 44,
      // fontWeight: 600,
      // lineHeight: '40px',
    },
    roundIcon: {
      fill: '#77BD65',
      width: 15,
      height: 15,
      marginLeft: 5,
    },
    distanceWithIcon: {
      display: 'flex',
      alignItems: 'center',
      padding: '5px 0 0',
    },
    distance: {
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
    accordion: {
      zIndex: 100,
      //paddingTop: 100,
      //marginTop: -206,
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 49.79%)',
      '&::before': {
        height: 0,
      },
      '&.Mui-expanded': {
        //marginTop: -206,
      },
    },
    accordionSummary: {
      boxShadow: '0px 0px 7px 1px rgba(179, 179, 179, 0.14)',
    },

    iconVerified: {
      width: '32px',
      height: '32px',
    },
    likesYouText: {
      fontSize: '12px',
      lineHeight: '20px',
    },
  }
})
