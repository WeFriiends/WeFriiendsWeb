import { Grid, Typography } from '@mui/material'
import { getColumns } from '../../helpers/helper'
import UserListRenderer from './UserListRenderer'
import useUsersData from 'hooks/useUsersData'

type IsMobileProps = {
  isMobile: boolean
}

const NearMeProfiles = ({ isMobile }: IsMobileProps) => {
  const columns = getColumns(isMobile)
  const { data: profilesList } = useUsersData()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h1" color="primary.main">
          Near by
        </Typography>
        <Typography
          variant="body2"
          color="common.black"
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
        >
          These people near you – just like them and see if it’s a match!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <UserListRenderer users={profilesList} columns={columns} />
      </Grid>
    </Grid>
  )
}
export default NearMeProfiles
