import React from 'react'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import { LocationOn } from '@mui/icons-material'
import Lightning from '../lightning/Lightning'
import { UserObjectType } from '../../helpers/userTypes'

type UserListRendererProps = {
  users: UserObjectType[]
  classes: any
  columns: number
}

const YourLikesUserListRenderer: React.FC<UserListRendererProps> = ({
  users,
  classes,
  columns,
}) => {
  const currentUserID = localStorage.getItem('userId') || '1' //will remove '1'
  const likesCurrentUser = users.filter(
    (user) => currentUserID && user.likedUsers.includes(currentUserID)
  )
  return (
    <ImageList cols={columns}>
      {likesCurrentUser.map((user) => (
        <ImageListItem key={user.id} sx={{ marginBottom: 2 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <img
              src={user.picture}
              className={classes.userImages}
              alt="user profile"
            />
            <Lightning />
            <Box sx={{ fontWeight: 'bold', color: '#F46B5D' }}>
              {user.firstName} {user.lastName}
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <LocationOn sx={{ color: 'grey' }} />
              <Typography sx={{ color: 'grey' }}>1 km</Typography>
            </Box>
          </Box>
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default YourLikesUserListRenderer
