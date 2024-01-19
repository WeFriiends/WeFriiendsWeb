import { Grid, Typography } from '@mui/material'
import { getColumns } from '../../helpers/helper'
import UserListRenderer from './UserListRenderer'
import useUsersData from 'hooks/useUsersData'
import { nearBy_whoLikedMeStyles } from '../../styles/nearBy_whoLikedMeStyles'
type IsMobileProps = {
  isMobile: boolean
}

const NearMeProfiles = ({ isMobile }: IsMobileProps) => {
  const { classes } = nearBy_whoLikedMeStyles()
  const columns = getColumns(isMobile)
  const txtAlign = isMobile ? 'center' : 'left'
  const { data: profilesList } = useUsersData()

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
        <UserListRenderer
          users={profilesList}
          classes={classes}
          columns={columns}
        />
      </Grid>
    </Grid>
  )
}
export default NearMeProfiles
