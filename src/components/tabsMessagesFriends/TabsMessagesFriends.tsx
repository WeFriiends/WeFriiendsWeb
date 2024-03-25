import * as React from 'react'
import { Tab, Tabs, Box } from '@mui/material'
import Messages from './Messages'
import Friends from './Friends'
import { UserProfileData } from '../../types/UserProfileData'
import { makeStyles } from 'tss-react/mui'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

interface TabsMessagesFriendsProps {
  onClick: (userProfileData: UserProfileData) => void
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props

  return (
    <div>
      {value === index && (
        <Box
          sx={{
            padding: '30px 0',
            height: '80vh',
            overflowY: 'scroll',
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
}) => {
  const [value, setValue] = React.useState(0)
  const { classes } = useStyles()

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
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
        <Tab label="New Friends" className={classes.labelStyle} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Messages />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Friends onClick={onClick} />
      </TabPanel>
    </Box>
  )
}

export default TabsMessagesFriends

const useStyles = makeStyles()({
  labelStyle: {
    textTransform: 'capitalize',
    fontSize: 24,
    lineHeight: 1.5,
    borderBottom: 'none',
  },
  removeIndicator: {
    display: 'none',
  },
})
