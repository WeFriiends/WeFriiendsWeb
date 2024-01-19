import React from 'react'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import Lightning from '../../common/Lightning'
import { UserObjectType } from '../../common/types/userTypes'

type UserListRendererProps = {
  users?: UserObjectType[]
  classes: Record<string, string>
  columns: number
}

const YourLikesUserListRenderer: React.FC<UserListRendererProps> = ({
  users,
  classes,
  columns,
}) => {
  const currentUserID = localStorage.getItem('userId') || '1' //will remove '1'
  const likesCurrentUser = users?.filter(
    (user) => currentUserID && user.likedUsers.includes(currentUserID)
  )

  if (!likesCurrentUser?.length) {
    return 'Ooops, no likes yet'
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
