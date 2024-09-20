import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import Logo from '../logo/Logo'
import { commonStyles } from '../../styles/commonStyles'
import { makeStyles } from 'tss-react/mui'
import UploadSlot from './UploadSlot'
import theme from 'styles/createTheme'

const UploadPhotos = () => {
  const { classes } = useStyles()

  interface UserPicsType {
    id: string
    url: string | null
  }

  // Попытка получить данные из local storage
  const storedPicsString = localStorage.getItem('userPicsStorage')
  const emptyPicArray: UserPicsType[] = Array.from(
    { length: 6 },
    (_, index) => ({
      id: `userPic-${index}`,
      url: null,
    })
  )

  const initialPics = storedPicsString
    ? JSON.parse(storedPicsString)
    : emptyPicArray

  const [userPics, setUserPics] = useState<UserPicsType[]>(initialPics)

  return (
    <Box className={classes.mainBox}>
      <Logo />
      <Typography className={classes.title}>Upload at least 1 photo</Typography>
      <Box className={classes.picContainer}>
        {userPics.map((pic) => (
          <UploadSlot
            key={pic.id}
            id={pic.id}
            bgPic={pic.url}
            userPics={userPics}
            setUserPics={setUserPics}
          />
        ))}
      </Box>
    </Box>
  )
}

export default UploadPhotos

const useStyles = makeStyles()(() => ({
  mainBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 50,
    overflow: 'hidden',
  },
  picContainer: {
    width: 349,
    height: 300,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 20,
    margin: 20,
  },
  title: {
    marginBottom: 29,
    fontWeight: 600,
    fontSize: 18,
    lineHeight: '132%',
    textAlign: 'center',
    color: '#444',
  },
}))
