import React from 'react'
import { Typography, Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'
import { commonStyles } from '../../styles/commonStyles'

const NoticeNoLikes = () => {
  const commonClasses = commonStyles().classes
  const { classes } = useStyles()

  return (
    <Box
      className={`${commonClasses.centeredContainer} ${classes.textWrapper}`}
    >
      <Typography variant="h2" className={classes.title}>
        Sorry!
        <br />
        There are no likes yet
      </Typography>
    </Box>
  )
}

export default NoticeNoLikes

const useStyles = makeStyles()(() => {
  return {
    textWrapper: {
      maxWidth: '290px',
      [theme.breakpoints.up('lg')]: {
        maxWidth: '530px',
      },
    },
    title: {
      textAlign: 'center',
      paddingBottom: '80px',
      paddingTop: '50px',
    },
  }
})
