import React, { useEffect, useState } from 'react'
import { Box, ImageList, ImageListItem, Typography } from '@mui/material'
import { LocationOn } from '@mui/icons-material'
import { makeStyles } from 'tss-react/mui'

type isMobileProps = {
  isMobile: boolean
}
type objectType = {
  id: string
  location: string
  picture: string
  fName: string
  lName: string
}
const NearMeProfiles = ({ isMobile }: isMobileProps) => {
  const { classes } = useStyles()
  const [list, setList] = useState<Array<objectType>>([])
  const columns = isMobile ? 3 : 6
  const mrgLeft = isMobile ? 1 : 5
  const txtAlign = isMobile ? 'center' : 'left'
  const getData = () => {
    fetch('users.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json()
      })
      .then(function (myJson) {
        setList(myJson)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <Box marginLeft={mrgLeft}>
      <Typography className={classes.headerNear} sx={{ textAlign: txtAlign }}>
        Near by
      </Typography>
      <Typography className={classes.description} sx={{ textAlign: txtAlign }}>
        These people near you – just like them and see if it’s a match!
      </Typography>
      <Box p={2}>
        <ImageList cols={columns}>
          {list
            .filter((user) => user.location === 'Istanbul')
            .map((user) => (
              <ImageListItem key={user.id} sx={{ marginBottom: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={user.picture}
                    className={classes.userImages}
                    alt="user profile"
                  />
                  <Box sx={{ fontWeight: 'bold' }}>
                    {user.fName} {user.lName}
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <LocationOn sx={{ color: 'grey' }} />
                    <Typography sx={{ color: 'grey' }}>1 km</Typography>
                  </Box>
                </Box>
              </ImageListItem>
            ))}
        </ImageList>
      </Box>
    </Box>
  )
}

export default NearMeProfiles

const useStyles = makeStyles()(() => {
  return {
    headerNear: {
      color: '#F1562A',
      fontSize: 24,
      fontFamily: 'Inter',
      fontWeight: '500',
    },
    description: {
      width: '100%',
      color: 'black',
      fontSize: 14,
      fontFamily: 'Inter',
      fontWeight: '400',
      wordWrap: 'break-word',
    },
    userImages: {
      borderRadius: '50%',
      width: '100px',
      height: '100px',
    },
  }
})
