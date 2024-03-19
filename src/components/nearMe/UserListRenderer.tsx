import React from 'react'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import { UserObjectType } from '../../common/types/userTypes'
import Lightning from '../../common/Lightning'
import { nearByWhoLikedMeStyles } from '../../styles/nearByWhoLikedMeStyles'
import NoticeNoUsers from '../noticeNoData/NoticeNoUsers'

type UserListRendererProps = {
  users?: UserObjectType[]
  columns: number
}

const UserListRenderer: React.FC<UserListRendererProps> = ({
  users,
  columns,
}) => {
  const { classes } = nearByWhoLikedMeStyles()
  const currentUserID = '1' //take it from localStorage

  const isErrorScreen = new URLSearchParams(window.location.search).get('error') // will remove - to show Error Screen by path http://localhost:3000/user/near-me?error=1

  if (!users?.length || isErrorScreen) {
    // will remove isErrorScreen
    return <NoticeNoUsers />
  }

  return (
    <ImageList cols={columns}>
      {users
        .filter((user) => user.location === 'Istanbul')
        .map((user) => (
          <ImageListItem key={user.id} className={classes.imageListItem}>
            <Box className={classes.profileBoxPosition}>
              <img
                src={user.picture}
                className={classes.userImages}
                alt="user profile"
              />
              {user.likedUsers.includes(currentUserID) && (
                <Box className={classes.lightingBoxPosition}>
                  <Lightning />
                </Box>
              )}
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

export default UserListRenderer
