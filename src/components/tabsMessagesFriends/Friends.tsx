import * as React from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import friends from './friends.json'

const Friends = () => {
  const { classes } = useStyles()
  return (
    <Box className={classes.friendsBlock}>
      {friends.map((element) => (
        <Box id={element.id} key={element.id} className={classes.friendsPhotos}>
          <img src={element.foto} alt="photo" className={classes.smallPhoto} />
          <Typography className={classes.textOnPhoto}>
            {element.name} {element.lastname}, {element.age}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}
export default Friends

const useStyles = makeStyles()(() => {
  return {
    line: {
      borderTop: '1px solid #EEE',
      paddingBottom: 30,
    },
    friendsBlock: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: 29,
    },
    friendsPhotos: {
      justifySelf: 'center',
      display: 'grid',
      gridTemplateRows: '1fr 71px',
    },
    smallPhoto: {
      width: 162,
      gridRow: '1/3',
      gridColumn: '1/2',
      boxShadow: '0px 0px 7px 1px rgba(179, 179, 179, 0.14)',
    },
    textOnPhoto: {
      color: '#F46B5D',
      gridRow: '2/3',
      gridColumn: '1/2',
      fontSize: 15,
      fontWeight: 600,
      lineHeight: '40px',
      paddingTop: 27,
      paddingLeft: 5,
      background:
        'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 49.79%)',
    },
  }
})
