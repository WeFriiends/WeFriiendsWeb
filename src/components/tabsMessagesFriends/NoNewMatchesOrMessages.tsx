import { Box, Typography } from '@mui/material'
import theme from 'styles/createTheme'
import { makeStyles } from 'tss-react/mui'

const NoNewMatchesOrMessages = ({ text }: { text: string }) => {
  const { classes } = useStyles()
  return (
    <Box>
      <Typography className={classes.textOnEmptyTabs}>{text}</Typography>
      <Typography className={classes.textOnEmptyTabs}>
        Start searching!
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginRight: '30px',
        }}
      >
        <img src="/img/friends/arrow.svg" alt="arrow" />
      </Box>
    </Box>
  )
}
export default NoNewMatchesOrMessages

const useStyles = makeStyles()({
  textOnEmptyTabs: {
    color: theme.palette.primary.main,
    fontSize: 24,
    fontWeight: 500,
  },
})
