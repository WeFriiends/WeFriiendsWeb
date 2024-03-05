import React from 'react'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import Lightning from '../../common/Lightning'
import { UserObjectType } from '../../common/types/userTypes'
import { nearByWhoLikedMeStyles } from '../../styles/nearByWhoLikedMeStyles'
import NoticeNoLikes from '../noticeNoData/NoticeNoLikes'

type UserListRendererProps = {
  users?: UserObjectType[]
  columns: number
}

const YourLikesUserListRenderer: React.FC<UserListRendererProps> = ({
  users,
  columns,
}) => {
  const { classes } = nearByWhoLikedMeStyles()
  const currentUserID = localStorage.getItem('userId') || '1' //will remove '1'
  const likesCurrentUser = users?.filter(
    (user) => currentUserID && user.likedUsers.includes(currentUserID)
  )

  const isErrorScreen = new URLSearchParams(window.location.search).get('error') // will remove - to show Error Screen by path http://localhost:3000/user/near-me?error=1

  if (!likesCurrentUser?.length || isErrorScreen) {
    return <NoticeNoLikes />
  }

  return (
    <ImageList cols={columns}>
      {likesCurrentUser?.map((user) => (
        <ImageListItem key={user.id} className={classes.imageListItem}>
          <Box className={classes.profileBoxPosition}>
            <img
              src={user.picture}
              className={classes.userImages}
              alt="user profile"
            />
            <Box className={classes.lightingBoxPosition}>
              <Lightning />
            </Box>
            <Box className={classes.usernameBoxPosition}>
              <Typography className={classes.usernameStyling}>
                {user.firstName} {user.lastName}
              </Typography>
              <Box className={classes.distanceBoxPosition}>
                <img
                  src="/img/near_me.svg"
                  alt="location"
                  className={classes.locationImageStyle}
                />
                <Typography className={classes.locationTextStyle}>
                  1 km
                </Typography>
              </Box>
            </Box>
          </Box>
        </ImageListItem>
      ))}
    </ImageList>
  )
}
export default YourLikesUserListRenderer
