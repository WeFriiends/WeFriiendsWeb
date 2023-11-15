import React from 'react'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import { LocationOn } from '@mui/icons-material'
import { UserNearMeObjectType } from './userTypes'

type UserListRendererProps = {
  users: UserNearMeObjectType[]
  classes: any
  columns: number
}

const UserListRenderer: React.FC<UserListRendererProps> = ({
  users,
  classes,
  columns,
}) => {
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
              <Box sx={{ fontWeight: 'bold' }}>
                {user.fName} {user.lName}
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
