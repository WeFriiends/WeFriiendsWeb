import * as React from 'react'
import { Tab, Tabs, Box } from '@mui/material'
import Messages from './Messages'
import { UserProfileData } from '../../types/UserProfileData'
import { makeStyles } from 'tss-react/mui'
import { useNewFriendsList } from 'hooks/useFriendsList'

import { Link, Outlet, useOutletContext } from 'react-router-dom'

const TabsMessagesFriends: React.FC = () => {
  const [value, setValue] = React.useState(0)

  const { classes } = useStyles()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const { data: friendsList } = useNewFriendsList()

  return (
    <Box sx={{ maxWidth: '1024px', margin: '0 auto', padding: '0 30px' }}>
      <Box sx={{ maxWidth: '419px', paddingBottom: '38px' }}>
        <Tabs
          value={value}
          classes={{
            indicator: classes.removeIndicator,
          }}
          onChange={handleChange}
          variant="fullWidth"
        >
          <Tab
            label="Messages"
            className={classes.labelStyle}
            component={Link}
            to="/user/messages"
          />
          <Tab
            label={`New friends (${friendsList?.length})`}
            className={classes.labelStyle}
            component={Link}
            to="/user/friends"
          />
        </Tabs>
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
    borderBottom: 'none',
    alignItems: 'flex-start',
    paddingLeft: 0,
  },
  removeIndicator: {
    display: 'none',
  },
})
