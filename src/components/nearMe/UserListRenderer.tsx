import React from 'react'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import { UserObjectType } from '../../common/types/userTypes'
import { nearByWhoLikedMeStyles } from '../../styles/nearByWhoLikedMeStyles'
import NoticeNoUsers from '../noticeNoData/NoticeNoUsers'
import IconLightning from '../../common/IconLightning'
import IconLocation from '../../common/IconLocation'

type UserListRendererProps = {
  users?: UserObjectType[]
}

const UserListRenderer: React.FC<UserListRendererProps> = ({ users }) => {
  const { classes } = nearByWhoLikedMeStyles()
  const currentUserID = '1' //take it from localStorage

  if (!users?.length) {
    return <NoticeNoUsers />
  }

  return (
    <ImageList gap={0} className={classes.imageList}>
      {users
        .filter((user) => user.location === 'Istanbul')
        .map((user) => (
          <ImageListItem key={user.id} className={classes.imageListItem}>
            <Box className={classes.profileBoxPosition}>
              <img
                src={user.picture}
                className={classes.userImages}
                alt="Profile photo"
              />
              {user.likedUsers.includes(currentUserID) && (
                <Box className={classes.lightingIconPosition}>
                  <IconLightning />
                </Box>
              )}
              <Box component="p">
                <h4 className={classes.usernameStyling}>
                  {user.firstName} {user.lastName}
                </h4>
                <Box className={classes.distanceBoxPosition}>
                  <IconLocation />
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
