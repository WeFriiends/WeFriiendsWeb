import { Grid, Typography } from '@mui/material'
import { getColumns } from '../../helpers/helper'
import UserListRenderer from './YourLikesUserListRenderer'
import useUsersData from 'hooks/useUsersData'
import { nearByWhoLikedMeStyles } from '../../styles/nearByWhoLikedMeStyles'
type IsMobileProps = {
  isMobile: boolean
}

const YouLikesProfiles = ({ isMobile }: IsMobileProps) => {
  const { classes } = nearByWhoLikedMeStyles()
  const columns = getColumns(isMobile)
  const txtAlign = isMobile ? 'center' : 'left'

  const { data: profilesList } = useUsersData()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography className={classes.headerNear} sx={{ textAlign: txtAlign }}>
          Your likes list
        </Typography>
        <Typography
          className={classes.description}
          sx={{ textAlign: txtAlign }}
        >
          These people have already liked you – just like them back and it’s a
          match!
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
export default YouLikesProfiles
