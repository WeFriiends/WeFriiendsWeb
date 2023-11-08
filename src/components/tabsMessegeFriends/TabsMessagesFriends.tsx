import * as React from 'react'
import { Tab, Tabs, Box, Typography, Avatar } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import messages from './messages.json'

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
        <Box sx={{ padding: '30px 30px 30px 0' }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const TabsMessagesFriends = () => {
  const [value, setValue] = React.useState(0)
  const { classes } = useStyles()

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
        {messages.map((element, index) => (
          <>
            <Box className={classes.messageBlock} key={index}>
              <Avatar
                src={element.avatar}
                sx={{ width: 66, height: 66 }}
              ></Avatar>
              <Box className={classes.message}>
                <Typography className={classes.name}>
                  {element.name} {element.lastname}, {element.age}
                </Typography>
                <Typography className={classes.textMessage}>
                  {element.message}
                </Typography>
              </Box>
              <Box className={classes.messageQuantity}>
                {element.messageCount}
              </Box>
            </Box>
            <Box className={classes.line}></Box>
          </>
        ))}
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

const useStyles = makeStyles()(() => {
  return {
    messageBlock: {
      display: 'grid',
      gridTemplateColumns: '0.5fr 5fr 0.5fr',
      alignItems: 'center',
      paddingBottom: 30,
    },
    message: {
      paddingLeft: 16,
      paddingRight: 31,
    },
    messageQuantity: {
      borderRadius: '50%',
      background: '#FB8F67',
      width: 35,
      height: 35,
      color: '#FFFFFF',
      fontSize: 16,
      lineHeight: '22px',
      fontWeight: 600,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    name: {
      fontSize: 20,
      fontWeight: 600,
      lineHeight: '40px',
    },
    textMessage: {
      fontSize: 14,
      lineHeight: '22px',
    },
    line: {
      borderTop: '1px solid #EEE',
      paddingBottom: 30,
    },
  }
})
