import * as React from 'react'
import {
  Box,
  Grid,
  Icon,
  Typography,
  TextField,
  Autocomplete,
  Link,
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'
import RangeSlider from './RangeSlider'
import IconNewTab from '../../common/svg/IconNewTab'

const minDistance = 1

const MyAccount: React.FC = () => {
  const { classes } = useStyles()

  function addUnitInKm(value: number) {
    return `${value} km`
  }

  const [ageRange, setAgeRange] = React.useState<number[]>([18, 75])

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setAgeRange([
        Math.min(newValue[0], ageRange[1] - minDistance),
        ageRange[1],
      ])
    } else {
      setAgeRange([
        ageRange[0],
        Math.max(newValue[1], ageRange[0] + minDistance),
      ])
    }
  }

  const [distanceMatch, setDistanceMatch] = React.useState<number>(20)
  const handleChange3 = (event: Event, newValue: number | number[]) => {
    setDistanceMatch(newValue as number)
  }

  const locationNamesTempList = [
    { label: 'New York' },
    { label: 'Seoul' },
    { label: 'Istanbul' },
    { label: 'Beijing' },
    { label: 'São Paulo' },
    { label: 'Buenos Aires' },
    { label: 'Tokyo' },
  ]

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={classes.twoColumnLayoutWrapper}>
        <Box className={classes.twoColumnLayoutColLeft}>
          <Typography variant="h1" className={classes.title}>
            My account
          </Typography>
          <Box className={classes.settingsDescription}>
            <Typography variant="h2" className={classes.subtitle}>
              Settings
            </Typography>
            <Typography variant="body2" className={classes.description}>
              Indicate what is important to you <br />
              and we will show you the best options.
            </Typography>
          </Box>
          <Box className={classes.settingsItem}>
            <Typography variant="h2" className={classes.subtitle}>
              Location
            </Typography>
            <Box className={classes.btnLocation}>
              <Autocomplete
                className={classes.inputLocation}
                disablePortal
                id="location"
                options={locationNamesTempList}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="" />}
              />
              <Icon>
                <img
                  className={classes.btnLocationIcon}
                  src="/img/icon-location-arrow.svg"
                  alt="Change location"
                />
              </Icon>
            </Box>
            <Typography variant="body2" className={classes.descriptionSlider}>
              Distance from location (100 km max)
            </Typography>
            <RangeSlider
              ariaLabel="Distance from location"
              getAriaValueText={addUnitInKm}
              valueLabelFormat={addUnitInKm}
              value={distanceMatch}
              onChange={handleChange3}
            ></RangeSlider>
          </Box>
          <Box className={classes.settingsItem}>
            <Typography
              variant="h2"
              className={`${classes.subtitle} ${classes.noBottomMargin}`}
            >
              Age range
            </Typography>
            <RangeSlider
              ariaLabel="Age range"
              disableSwap
              value={ageRange}
              onChange={handleChange1}
              getAriaValueText={addUnitInKm}
              min={18}
              max={75}
            ></RangeSlider>
          </Box>
          <Typography variant="h1" className={classes.helpTitle}>
            Help & support
          </Typography>
          <hr className={classes.separator} />
          <Typography variant="h2" className={classes.subtitle}>
            Security tips
          </Typography>
          <Typography variant="body2" className={classes.description}>
            <Link
              className={classes.linkGrey}
              href="https://wefriiends.com/documents/privacy.html"
              target="_blank"
              rel="noopener"
            >
              Rules of community
              <IconNewTab />
            </Link>
            <Link
              className={classes.linkGrey}
              href="https://wefriiends.com/documents/privacy.html"
              target="_blank"
              rel="noopener"
            >
              Security tips
              <IconNewTab />
            </Link>
          </Typography>
          <hr className={classes.separator} />
          <Typography variant="h2" className={classes.subtitle}>
            Legal data
          </Typography>
          <Typography variant="body2" className={classes.description}>
            <Link
              className={classes.linkGrey}
              href="https://wefriiends.com/documents/privacy.html"
              target="_blank"
              rel="noopener"
            >
              Privacy settings
              <IconNewTab />
            </Link>
            <Link
              className={classes.linkGrey}
              href="https://wefriiends.com/documents/privacy.html"
              target="_blank"
              rel="noopener"
            >
              Cookies
              <IconNewTab />
            </Link>
            <Link
              className={classes.linkGrey}
              href="https://wefriiends.com/documents/privacy.html"
              target="_blank"
              rel="noopener"
            >
              Privacy policy
              <IconNewTab />
            </Link>
            <Link
              className={classes.linkGrey}
              href="https://wefriiends.com/documents/privacy.html"
              target="_blank"
              rel="noopener"
            >
              Terms of use
              <IconNewTab />
            </Link>
          </Typography>
          <hr className={classes.separator} />
          <Link
            className={classes.linkOrange}
            href="https://wefriiends.com/documents/privacy.html"
            target="_blank"
            rel="noopener"
          >
            Share WeFriiends
          </Link>
          <hr className={classes.separator} />
          <Link
            className={classes.linkOrange}
            href="https://wefriiends.com/documents/privacy.html"
            target="_blank"
            rel="noopener"
          >
            Log out
          </Link>
          <hr className={classes.separator} />
          <Link
            className={classes.linkOrange}
            href="https://wefriiends.com/documents/privacy.html"
            target="_blank"
            rel="noopener"
          >
            Delete account
          </Link>
          <hr className={classes.separator} />
          <Typography variant="body2" className={classes.version}>
            version 2.33
          </Typography>
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
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    [theme.breakpoints.up(850)]: {
      alignItems: 'start',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
  },
  twoColumnLayoutColLeft: {
    width: 350,
    marginBottom: 50,
    [theme.breakpoints.up(850)]: {
      width: 350,
    },
  },
  twoColumnLayoutColRight: {
    width: 450,
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
  helpTitle: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: '20px',
    marginTop: 200,
    paddingBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: '22px',
    marginTop: 15,
    marginBottom: 20,
  },
  noBottomMargin: {
    marginBottom: 0,
  },
  description: {
    lineHeight: 1.3,
    marginBottom: 30,
  },
  descriptionSlider: {
    lineHeight: 1.3,
  },
  settingsDescription: {
    marginBottom: 50,
  },
  settingsItem: {
    marginBottom: 30,
  },
  btnLocation: {
    height: 34,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.common.white,
    boxShadow: '0 0 7px 1px rgba(217, 217, 217, 0.5)',
    borderRadius: 8,
    fontWeight: 500,
    fontSize: 12,
    marginBottom: 20,
    paddingRight: 10,
    color: theme.palette.common.black,
    textTransform: 'none',
    '& .MuiInputBase-root.MuiAutocomplete-inputRoot': {
      padding: 0,
    },
    '& .MuiOutlinedInput-root .MuiAutocomplete-endAdornment': {
      display: 'none',
    },
    '& .MuiInputBase-input.MuiOutlinedInput-input': {
      padding: '8.5px 15px',
      fontWeight: 500,
      fontSize: 12,
      color: theme.palette.common.black,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
    },
    '& .MuiAutocomplete-hasPopupIcon .MuiOutlinedInput-root': {
      padding: 0,
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
      {
        border: 0,
      },
  },
  btnLocationIcon: {
    width: 15,
    height: 14,
    margin: '5px 0',
  },
  inputLocation: {
    border: 0,
  },
  separator: {
    height: 1.5,
    lineHeight: 0,
    border: 0,
    backgroundColor: theme.customPalette.colorInputGrey,
    marginBottom: 25,
  },
  linkGrey: {
    fontSize: 16,
    lineHeight: '22px',
    color: theme.customPalette.colorActiveGrey,
    textDecoration: 'none',
    display: 'flex',
    maxWidth: '190px',
    justifyContent: 'space-between',
    marginBottom: 5,
    '&:hover': {
      fontWeight: 600,
      '& svg path': {
        fill: theme.palette.primary.main,
      },
    },
  },
  linkOrange: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '20px',
    color: theme.palette.primary.dark,
    textDecoration: 'none',
    margin: '15px 0 20px',
    display: 'block',
  },
  version: {
    fontSize: 14,
    lineHeight: '22px',
    color: theme.customPalette.colorActiveGrey,
  },
})
