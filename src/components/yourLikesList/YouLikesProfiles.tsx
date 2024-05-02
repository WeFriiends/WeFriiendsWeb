import { Grid, Typography } from '@mui/material'
import { getColumns } from '../../helpers/helper'
import UserListRenderer from './YourLikesUserListRenderer'
import useUsersData from 'hooks/useUsersData'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'

type IsMobileProps = {
  isMobile: boolean
}

const YouLikesProfiles = ({ isMobile }: IsMobileProps) => {
  const columns = getColumns(isMobile)
  const { data: profilesList } = useUsersData()
  const { classes } = useStyles()

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h1" className={classes.title}>
          Your likes list
        </Typography>
        <Typography variant="body2" className={classes.description}>
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

const useStyles = makeStyles()(() => {
  return {
    title: {
      paddingTop: '60px',
      paddingBottom: '10px',
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        textAlign: 'left',
      },
    },
    description: {
      textAlign: 'center',
      [theme.breakpoints.up('md')]: {
        textAlign: 'left',
      },
      [theme.breakpoints.down('sm')]: {
        maxWidth: '320px',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  }
})
