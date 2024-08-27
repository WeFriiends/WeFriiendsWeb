import * as React from 'react'
import { Box, Typography } from '@mui/material'
import RangeSlider from './RangeSlider'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'

const minAgeDiff = 1
const ageRangeMin = 18
const ageRangeMax = 65

const AgeRangeControl = () => {
  const { classes } = useStyles()

  function addUnitInKm(value: number) {
    return `${value} km`
  }

  const [ageRange, setAgeRange] = React.useState<number[]>([
    ageRangeMin,
    ageRangeMax,
  ])

  const handleSliderChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setAgeRange([
        Math.min(newValue[0], ageRange[1] - minAgeDiff),
        ageRange[1],
      ])
    } else {
      setAgeRange([
        ageRange[0],
        Math.max(newValue[1], ageRange[0] + minAgeDiff),
      ])
    }
  }

  return (
    <>
      <Typography
        variant="h2"
        className={`${classes.subtitle} ${classes.noBottomMargin}`}
      >
        Age range
        <Box component="span" className={classes.settingsAgeRange}>
          {ageRange[0]}&ndash;{ageRange[1]}
        </Box>
      </Typography>
      <RangeSlider
        ariaLabel="Age range"
        disableSwap
        value={ageRange}
        onChange={handleSliderChange}
        getAriaValueText={addUnitInKm}
        min={ageRangeMin}
        max={ageRangeMax}
        valueLabelDisplay="auto"
      ></RangeSlider>
    </>
  )
}

export default AgeRangeControl

const useStyles = makeStyles()({
  subtitle: {
    fontSize: 16,
    lineHeight: '22px',
    marginTop: 15,
    marginBottom: 20,
  },
  noBottomMargin: {
    marginBottom: 0,
  },
  settingsAgeRange: {
    float: 'right',
    fontSize: 14,
    color: theme.palette.text.primary,
  },
})
