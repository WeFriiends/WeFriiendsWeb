import * as React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { useNewFriendsList } from 'hooks/useFriendsList'
import { Link, Outlet, useLocation } from 'react-router-dom'
import theme from '../../styles/createTheme'

const TabsMessagesFriends: React.FC = () => {
  const { classes } = useStyles()
  const location = useLocation().pathname

  const { data: friendsList } = useNewFriendsList()

  const getColor = (path: string): string => {
    return path === location
      ? theme.palette.primary.dark
      : theme.palette.text.primary
  }

  return (
    <Box sx={{ maxWidth: '1024px', margin: '0 auto' }}>
      <Box sx={{ maxWidth: '419px', paddingBottom: '38px' }}>
        <Link
          to="/user/messages"
          style={{
            color: getColor('/user/messages'),
            paddingRight: '74px',
          }}
          className={classes.labelStyle}
        >
          Messages
        </Link>
        <Link
          to="/user/friends"
          style={{
            color: getColor('/user/friends'),
          }}
          className={classes.labelStyle}
        >{`New friends (${friendsList?.length})`}</Link>
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
    textDecoration: 'none',
  },
  removeIndicator: {
    display: 'none',
  },
})
