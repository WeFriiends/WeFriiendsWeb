import * as React from 'react'
import { Tab, Tabs, Box, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useNewFriendsList } from 'hooks/useFriendsList'
import { Link, Outlet, useLocation } from 'react-router-dom'
import theme from '../../styles/createTheme'

const TabsMessagesFriends: React.FC = () => {
  const { classes } = useStyles()
  const location = useLocation().pathname

  const { data: friendsList } = useNewFriendsList()

  return (
    <Box sx={{ maxWidth: '1024px', margin: '0 auto' }}>
      <Box sx={{ maxWidth: '419px', paddingBottom: '38px' }}>
        <Button
          component={Link}
          to="/user/messages"
          sx={{
            color:
              location === '/user/messages'
                ? theme.palette.primary.dark
                : theme.palette.text.primary,
            paddingRight: '74px',
          }}
          className={classes.labelStyle}
        >
          Messages
        </Button>
        <Button
          component={Link}
          to="/user/friends"
          sx={{
            color:
              location === '/user/friends'
                ? theme.palette.primary.dark
                : theme.palette.text.primary,
          }}
          className={classes.labelStyle}
        >{`New friends (${friendsList?.length})`}</Button>
      </Box>
      <Outlet />
    </Box>
  )
}

export default TabsMessagesFriends

const useStyles = makeStyles()({
  labelStyle: {
    textTransform: 'capitalize',
    fontSize: 24,
    lineHeight: 1.3,
  },
  removeIndicator: {
    display: 'none',
  },
})
