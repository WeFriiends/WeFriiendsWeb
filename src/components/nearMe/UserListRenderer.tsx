import React from 'react'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import { UserObjectType } from '../../common/types/userTypes'
import Lightning from '../../common/Lightning'

type UserListRendererProps = {
  users?: UserObjectType[]
  classes: Record<string, string>
  columns: number
}

const UserListRenderer: React.FC<UserListRendererProps> = ({
  users,
  classes,
  columns,
}) => {
  const currentUserID = '1' //take it from localStorage

  if (!users?.length) {
    return 'Ooops, noone nearby'
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
