import * as React from 'react'
import { Tab, Tabs, Box } from '@mui/material'
import Messages from './Messages'
import Friends from './Friends'
import { UserProfileData } from '../../types/UserProfileData'
import { makeStyles } from 'tss-react/mui'
import { useNewFriendsList } from 'hooks/useFriendsList'
import { useState } from 'react'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

// interface TabsMessagesFriendsProps {
//   onClick: (userProfileData: UserProfileData) => void
//   selectedFriend: UserProfileData
// }
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

const TabsMessagesFriends: React.FC = () => {
  const emptyProfile: UserProfileData = {
    id: '-1',
    firstName: '',
    lastName: '',
    age: '',
    photo: [],
    city: '',
    aboutMe: '',
    education: '',
    profession: '',
    likedUsers: [],
  }
  const [value, setValue] = React.useState(0)
  const [friendsData, setFriendsData] = useState<UserProfileData>(emptyProfile)
  // const [isFriend, setIsFriend] = useState(false)
  const { classes } = useStyles()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const { data: friendsList } = useNewFriendsList()

  const selectFriend = (user: UserProfileData) => {
    setFriendsData(user)
    // setIsFriend(true)
  }

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
        <Friends onClick={selectFriend} selectedFriend={friendsData} />
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
