import * as React from 'react'
import { Tab, Tabs, Box } from '@mui/material'
import Messages from './Messages'
import Friends from './Friends'
import { UserProfileData } from '../../types/UserProfileData'
import { makeStyles } from 'tss-react/mui'
import useFriendsList from 'hooks/useFriendsList'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

interface TabsMessagesFriendsProps {
  onClick: (userProfileData: UserProfileData) => void
  selectedFriend: UserProfileData
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props

  return (
    <div>
      {value === index && (
        <Box
          sx={{
            padding: '20px 2px',
            height: '80vh',
            overflow: 'auto',
          }}
        >
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  )
}

const TabsMessagesFriends: React.FC<TabsMessagesFriendsProps> = ({
  onClick,
  selectedFriend,
}) => {
  const [value, setValue] = React.useState(0)
  const { classes } = useStyles()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  // const { data: friendsList } = useFriendsList('../data/friendsProfile.json')
  const { data: friendsList } = useFriendsList(
    'http://localhost:3005/newFriends' //use json-server for testing
  )
  return (
    <Box>
      <Tabs
        value={value}
        classes={{
          indicator: classes.removeIndicator,
        }}
        onChange={handleChange}
        variant="fullWidth"
      >
        <Tab label="Messages" className={classes.labelStyle} />
        <Tab
          label={`New friends (${friendsList?.length})`}
          className={classes.labelStyle}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Messages />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Friends onClick={onClick} selectedFriend={selectedFriend} />
      </TabPanel>
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
