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

          <Accordion className={classes.accordion} defaultExpanded={true}>
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
              <Typography variant="h2">Photos</Typography>
              <Box className={classes.photosWrapper}>
                <img
                  className={classes.photo}
                  src="https://placehold.co/158x214"
                  alt="photo"
                />
                <img
                  className={classes.photo}
                  src="https://placehold.co/158x214"
                  alt="photo"
                />
                <img
                  className={classes.photo}
                  src="https://placehold.co/158x214"
                  alt="photo"
                />
                <img
                  className={classes.photo}
                  src="https://placehold.co/158x214"
                  alt="photo"
                />
                <img
                  className={classes.photo}
                  src="https://placehold.co/158x214"
                  alt="photo"
                />
                <img
                  className={classes.photo}
                  src="https://placehold.co/158x214"
                  alt="photo"
                />
              </Box>

              <Typography variant="h5" className={classes.boxInfoTitle}>
                About me
              </Typography>
              <Box className={classes.aboutMeTextbox}>
                <Typography variant="body2">
                  I am sorry my profile is just in German, but you can see our
                  journey on my Instagram Profil @freilerner_mama or here in
                  Facebook.
                </Typography>
                <Typography variant="body2">
                  I hope there is somebody who could help us. You are allowed to
                  share this or I sent you an extra text, we want to reach as
                  much people as possible to have a save place on our way back
                  home to Cyprus!
                </Typography>
                <Typography variant="body2">
                  We also could help with animals, feed them, have a walk with a
                  dog, clean their places, help in the household or garden. We
                  want to connect with new people, see how other cultures are
                  living but the most important thing is, that my fresh heart
                  operated son will come home safety!
                </Typography>
              </Box>

              <Typography variant="h5" className={classes.boxInfoTitle}>
                Lifestyle
              </Typography>

              <Typography variant="h3" className={classes.title}>
                About Me
              </Typography>
              <Typography className={classes.text}>
                I am a talented, ambitious and hardworking individual, with
                broad skills and experience in digital and printed marketing,
                social media and leading projects.
              </Typography>
              <Typography variant="h3" className={classes.title}>
                Education and Profession
              </Typography>
              <Typography className={classes.text}>
                Freelance Journalist
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
    boxInfoTitle: {
      fontSize: '18px',
      lineHeight: '42px',
      maxWidth: '350px',
      background: '#FEDED2',
      borderRadius: '20px',
      textAlign: 'center',
      margin: '0 auto 25px',
    },
    aboutMeTextbox: {
      border: '1px solid #C5C5C5',
      borderRadius: '20px',
      padding: '20px',
      marginBottom: '70px',
    },
    photosWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px',
      marginTop: '15px',
      marginBottom: '70px',
    },
    photo: {
      width: 'calc((100% - 60px) / 3)',
      borderRadius: '10px',
    },

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
