import * as React from 'react'
import { Box, IconButton, Grid, Icon, Typography, Switch } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'
import RangeSlider from './RangeSlider'

const minDistance = 1

const MyAccount: React.FC = () => {
  const { classes } = useStyles()

  function valuetext(value: number) {
    return `${value}°C`
  }

  const [value1, setValue1] = React.useState<number[]>([18, 75])

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]])
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)])
    }
  }

  const [value2, setValue2] = React.useState<number[]>([20, 37])

  const handleChange2 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance)
        setValue2([clamped, clamped + minDistance])
      } else {
        const clamped = Math.max(newValue[1], minDistance)
        setValue2([clamped - minDistance, clamped])
      }
    } else {
      setValue2(newValue as number[])
    }
  }

  const [value3, setValue3] = React.useState<number>(20)
  const handleChange3 = (event: Event, newValue: number | number[]) => {
    setValue3(newValue as number)
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={classes.twoColumnLayoutWrapper}>
        <Box className={classes.twoColumnLayoutColLeft}>
          <Typography variant="h1" className={classes.title}>
            My Account
          </Typography>
          <Typography variant="h2" className={classes.subtitle}>
            Settings
          </Typography>
          <Typography variant="body2" className={classes.description}>
            These people near you – just like them and see if it’s a match!
          </Typography>
          <Typography variant="h2" className={classes.subtitle}>
            Location
          </Typography>
          <IconButton className={classes.btnLocation} disableRipple>
            My Current Location (Warsaw)
            <Icon>
              <img
                className={classes.btnLocationIcon}
                src="/img/icon-location-arrow.svg"
                alt="Change location"
              />
            </Icon>
          </IconButton>
          <Typography variant="body2" className={classes.description}>
            Distance from location (100 km max)
          </Typography>
          <RangeSlider
            getAriaValueText={valuetext}
            value={value3}
            onChange={handleChange3}
          ></RangeSlider>
          <Typography variant="h2" className={classes.subtitle}>
            Age range
          </Typography>
          {/*<Slider
            getAriaLabel={() => 'Minimum distance'}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="on"
            getAriaValueText={valuetext}
            disableSwap
          />*/}
          {/*<Slider
            aria-label="Minimum distance shift"
            value={value2}
            onChange={handleChange2}
            valueLabelDisplay="on"
            getAriaValueText={valuetext}
            disableSwap
          />*/}
          <RangeSlider
            disableSwap
            value={value1}
            onChange={handleChange1}
          ></RangeSlider>
          <Typography variant="h2" className={classes.subtitle}>
            Age range (с 18 до 75, сделать движение каждлого по отдельности)
          </Typography>
          <RangeSlider value={value2} onChange={handleChange2}></RangeSlider>
          <hr className={classes.separator} />
          <Typography variant="h2" className={classes.subtitle}>
            Global <Switch />
          </Typography>
          <Typography variant="body2" className={classes.description}>
            When you run out of local profiles, you can switch to global mode to
            search for people around the world
          </Typography>
          <hr className={classes.separator} />
          <Typography variant="h2" className={classes.subtitle}>
            Swipes rendition
          </Typography>
          <Typography variant="body2" className={classes.description}>
            <strong>Recommendations first</strong>
            <br />
            Search through the most suitable people first (default setting)
          </Typography>
          <Typography variant="body2" className={classes.description}>
            <strong>Recently active</strong>
            <br />
            Browse the most active users first
          </Typography>
          <hr className={classes.separator} />
          <Typography variant="h2" className={classes.subtitle}>
            Search for friends <Switch />
          </Typography>
          <Typography variant="body2" className={classes.description}>
            If this option is off, your profile won’t be shown to other users.
            <br />
            Users, who already got a friendship request for you, will see your
            profile and can make friends with you.
          </Typography>
          <hr className={classes.separator} />
          <Typography variant="h2" className={classes.subtitle}>
            Help & support
          </Typography>
          <hr className={classes.separator} />
          <Typography variant="h2" className={classes.subtitle}>
            Security tips
          </Typography>
          <Typography variant="body2" className={classes.description}>
            <strong>
              Rules of community
              <br />
              Security tips
            </strong>
          </Typography>
          <hr className={classes.separator} />
          <Typography variant="h2" className={classes.subtitle}>
            Security tips
          </Typography>
          <Typography variant="body2" className={classes.description}>
            <strong>
              Privacy settings
              <br />
              Cookies
              <br />
              Privacy policy
              <br />
              Terms of use
            </strong>
          </Typography>
          <hr className={classes.separator} />
          <Typography variant="h2" className={classes.subtitle}>
            Share WeFriiends
          </Typography>
          <hr className={classes.separator} />
          <Typography variant="h2" className={classes.subtitle}>
            Log out
          </Typography>
          <hr className={classes.separator} />
          <Typography variant="h2" className={classes.subtitle}>
            Delete account
          </Typography>
          <hr className={classes.separator} />
          version 2.33
        </Box>
        <Box className={classes.twoColumnLayoutColRight}>Right column</Box>
      </Grid>
    </Grid>
  )
}

export default MyAccount

const useStyles = makeStyles()({
  twoColumnLayoutWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    [theme.breakpoints.up(850)]: {
      alignContent: 'start',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  },
  twoColumnLayoutColLeft: {
    // outline: '1px solid red',
    width: 350,
    //width: '100%',
    [theme.breakpoints.up(850)]: {
      width: 350,
    },
  },
  twoColumnLayoutColRight: {
    width: 450,
    //width: 450,
    outline: '1px solid pink',
    [theme.breakpoints.up(850)]: {
      width: 450,
    },
  },
  title: {
    paddingTop: 60,
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 600,
    [theme.breakpoints.up('lg')]: {
      paddingTop: 0,
      paddingBottom: 20,
      textAlign: 'left',
      fontSize: 24,
      fontWeight: 500,
    },
  },
  subtitle: {
    fontSize: 16,
    lineHeight: '22px',
    marginBottom: 20,
  },
  description: {
    lineHeight: 1.3,
    marginBottom: 30,
  },
  btnLocation: {
    height: 34,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.common.white,
    boxShadow: '0 0 7px 1px rgba(217, 217, 217, 0.5)',
    borderRadius: 8,
    fontWeight: 500,
    fontSize: 12,
    marginBottom: 20,
    color: theme.palette.common.black,
    textTransform: 'none',
  },
  btnLocationIcon: {
    width: 15,
    height: 14,
    margin: '5px 0',
  },
  separator: {
    height: 1.5,
    lineHeight: 0,
    border: 0,
    backgroundColor: '#C5C5C5',
    marginBottom: 30,
  },
})
