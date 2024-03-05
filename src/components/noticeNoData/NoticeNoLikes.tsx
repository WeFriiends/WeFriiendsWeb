import React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'

const NoticeNoLikes = () => {
  const { classes } = useStyles()

  return (
    <Typography variant="h2" className={classes.title}>
      Sorry!
      <br />
      There are no likes yet
    </Typography>
  )
}

export default NoticeNoLikes

const useStyles = makeStyles()(() => {
  return {
    title: {
      textAlign: 'center',
      paddingBottom: '80px',
      paddingTop: '50px',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '290px',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  }
})
