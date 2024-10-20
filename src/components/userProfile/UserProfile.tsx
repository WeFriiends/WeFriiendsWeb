import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material'

import { makeStyles } from 'tss-react/mui'
import PhotoCarousel from './PhotoCarousel'
import { UserProfileData } from '../../types/UserProfileData'
import LikeDispay from './LikedDisplay'

interface UserProfileProps {
  user: UserProfileData
}
const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  const { classes } = useStyles()
  const accountId = '1'
  return (
    <>
      <Box className={classes.mainGrid}>
        <Box className={classes.iconsAbove}>
          <LikeDispay accountId={accountId} likedUsersArray={user.likedUsers} />
          {/* <img src="/img/verified.svg"></img> */}
          {/* We don't use it in MVP1 */}
        </Box>

        <div className={classes.carousel}>
          <PhotoCarousel items={user.photo} />
        </div>

        <Accordion className={classes.accordion}>
          <AccordionSummary expandIcon={<img src="/img/arrow-down.svg" />}>
            <Box>
              <Box sx={{ display: 'flex' }}>
                <Typography className={classes.name}>
                  {user.name}, {user.age}
                </Typography>
                {/* <CircleRoundedIcon
                  className={classes.roundIcon}
                ></CircleRoundedIcon> */}
                {/* We don't use it in MVP1 */}
              </Box>
              <Box className={classes.distanceWithIcon}>
                <img src="/img/near_me.svg" height={20} width={20} />
                <Typography className={classes.distance}>
                  from {user.city}, 10 km from you
                </Typography>
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails
            sx={{ overflow: 'auto', maxHeight: 'calc(49vh - 340px)' }}
          >
            <Typography variant="h3" className={classes.title}>
              About Me
            </Typography>
            <Typography className={classes.text}>{user.aboutMe}</Typography>
            <Typography variant="h3" className={classes.title}>
              Education and Profession
            </Typography>
            <Typography className={classes.text}>{user.profession}</Typography>
            <Typography className={classes.text}>{user.education}</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  )
}
export default UserProfile

const useStyles = makeStyles()(() => {
  return {
    mainGrid: {
      display: ' grid',
    },
    iconsAbove: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      zIndex: 100,
      padding: '26px 11px 0',
      gridRow: '1/1',
      gridColumn: '1/2',
    },

    carousel: {
      gridRow: '1/9',
      gridColumn: '1/2',
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
    accordion: {
      zIndex: 100,
      paddingTop: 100,
      marginTop: -206,
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 49.79%)',
      '&::before': {
        height: 0,
      },
      '&.Mui-expanded': {
        marginTop: -206,
      },
    },
  }
})
