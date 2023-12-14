import React from 'react'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import { LocationOn } from '@mui/icons-material'
import { UserObjectType } from '../../helpers/userTypes'
import Lightning from '../lightning/Lightning'

type UserListRendererProps = {
  users: UserObjectType[]
  classes: any
  columns: number
}

const UserListRenderer: React.FC<UserListRendererProps> = ({
  users,
  classes,
  columns,
}) => {
  const currentUserID = '1' //take it from localStorage
  return (
    <ImageList cols={columns}>
      {users
        .filter((user) => user.location === 'Istanbul')
        .map((user) => (
          <ImageListItem key={user.id} sx={{ marginBottom: 2 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <img
                src={user.picture}
                className={classes.userImages}
                alt="user profile"
              />
              {user.likedUsers.includes(currentUserID) && <Lightning />}
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

export default UserListRenderer
