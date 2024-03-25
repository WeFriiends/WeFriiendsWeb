import { Box, Typography } from '@mui/material'
import theme from 'styles/createTheme'
import { makeStyles } from 'tss-react/mui'

const NoNewMatches = () => {
  const { classes } = useStyles()
  return (
    <>
      <Typography className={classes.textOnEmptyTabs}>
        You don’t have new matches. Start searching!{' '}
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
    </>
  )
}
export default NoNewMatches

const useStyles = makeStyles()({
  textOnEmptyTabs: {
    color: theme.palette.primary.main,
    fontSize: 24,
    fontWeight: 500,
    marginBottom: 6,
  },
})
