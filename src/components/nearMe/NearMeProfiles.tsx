import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { getUsersNearMeData } from '../../actions/userServices'
import { getColumns } from '../../helpers/helper'
import UserListRenderer from './UserListRenderer'

import { UserObjectType } from '../../helpers/userTypes'
type IsMobileProps = {
  isMobile: boolean
}

const NearMeProfiles = ({ isMobile }: IsMobileProps) => {
  const { classes } = useStyles()
  const [profileList, setProfileList] = useState<Array<UserObjectType>>([])
  const columns = getColumns(isMobile)
  const txtAlign = isMobile ? 'center' : 'left'
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getUsersNearMeData()
        setProfileList(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography className={classes.headerNear} sx={{ textAlign: txtAlign }}>
          Near by
        </Typography>
        <Typography
          className={classes.description}
          sx={{ textAlign: txtAlign }}
        >
          These people near you – just like them and see if it’s a match!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <UserListRenderer users={profileList} classes={classes} columns={columns} />
      </Grid>
    </Grid>
  )
}
export default NearMeProfiles
const useStyles = makeStyles()(() => {
  return {
    headerNear: {
      color: '#F1562A',
      fontSize: 32,
      fontFamily: 'Inter',
      fontWeight: '600',
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
