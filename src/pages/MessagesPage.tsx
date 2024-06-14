import { Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import Messages from 'components/tabsMessagesFriends/Messages'
import theme from './../styles/createTheme'

const MessagesPage = () => {
  const { classes } = useStyles()
  return (
    <Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: '5.5fr 6.5fr' }}>
        <Messages />
        <Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Typography className={classes.startChattingText}>
              Connect with others by sharing your thoughts or experiences.
            </Typography>
            <Typography className={classes.startChattingText}>
              Start chatting now!
            </Typography>
          </Box>
          <Box className={classes.iconsSection}>
            <img src="/img/messages/friendly.svg" alt="friendly" />
            <img src="/img/messages/hospitable.svg" alt="hospitable" />
            <img src="/img/messages/happy.svg" alt="happy" />
            <img src="/img/messages/love.svg" alt="love" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default MessagesPage

const useStyles = makeStyles()({
  startChattingText: {
    maxWidth: '315px',
    margin: '0 auto',
    color: theme.palette.primary.light,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600,
    lineHeight: '22px',
  },
  iconsSection: {
    display: 'flex',
    gap: 16,
    justifyContent: 'center',
    paddingTop: 35,
  },
})
