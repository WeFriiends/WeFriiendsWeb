import * as React from 'react'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/material/styles'

type RangeSliderProps = {
  value: Array<number> | number
  onChange: (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => void
}

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: '#C5C5C5',
  opacity: 1,
  height: 1.5,
  padding: 0,
  margin: '0px 0 70px',
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: theme.palette.primary.light,
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'none',
    },
    '&:before': {
      boxShadow: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    fontSize: 12,
    fontWeight: '500',
    top: 50,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,
    '&::before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.common.black,
    },
  },
  '& .MuiSlider-track': {
    height: 1.5,
  },
  '& .MuiSlider-rail': {
    backgroundColor: '#C5C5C5',
    opacity: 1,
  },
}))

const RangeSlider: React.FC<RangeSliderProps> = ({ value, onChange }) => {
  return (
    <CustomSlider
      aria-label="ios slider"
      defaultValue={60}
      value={value}
      valueLabelDisplay="on"
      onChange={onChange}
    />
  )
}

export default RangeSlider
