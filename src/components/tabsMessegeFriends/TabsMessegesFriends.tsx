import * as React from 'react'
import { Tab, Tabs, Box, Typography } from '@mui/material'

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
        <Box sx={{ p: 2 }}>
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
    <Box sx={{ width: '50%' }}>
      <Tabs value={value} onChange={handleChange} variant="fullWidth">
        <Tab label="Messages" />
        <Tab label="Friends" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        ad.
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Minima, quaerat recusandae? Iure nesciunt quaerat dolorem. Odit nihil
        recusandae corporis voluptatum.
      </TabPanel>
    </Box>
  )
}

export default TabsMessagesFriends
