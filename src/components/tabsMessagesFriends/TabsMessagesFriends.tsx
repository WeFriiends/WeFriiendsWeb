import * as React from 'react'
import { Tab, Tabs, Box, Typography } from '@mui/material'
import Messages from './Messages'
import Friends from './Friends'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props

  return (
    <div>
      {value === index && (
        <Box
          sx={{
            padding: '30px 0',
            height: '67vh',
            overflowY: 'scroll',
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const TabsMessagesFriends = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Box>
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        <Tab label="Messages" />
        <Tab label="Friends" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Messages />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Friends />
      </TabPanel>
    </Box>
  )
}

export default TabsMessagesFriends
