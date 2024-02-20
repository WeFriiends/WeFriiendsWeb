import { Grid, Typography } from '@mui/material'
import { getColumns } from '../../helpers/helper'
import UserListRenderer from './YourLikesUserListRenderer'
import useUsersData from 'hooks/useUsersData'

type IsMobileProps = {
  isMobile: boolean
}

const YouLikesProfiles = ({ isMobile }: IsMobileProps) => {
  const columns = getColumns(isMobile)

  const { data: profilesList } = useUsersData()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h1" color="primary.main">
          Your likes list
        </Typography>
        <Typography
          variant="body2"
          color="common.black"
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          These people have already liked you – just like them back and it’s a
          match!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <UserListRenderer users={profilesList} columns={columns} />
      </Grid>
    </Grid>
  )
}
export default YouLikesProfiles
