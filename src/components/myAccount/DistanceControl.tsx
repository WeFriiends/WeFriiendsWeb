import RangeSlider from './RangeSlider'
import * as React from 'react'

type DistanceControlProps = {
  children: React.ReactNode
}

const DistanceControl: React.FC<DistanceControlProps> = ({ children }) => {
  function addUnitInKm(value: number) {
    return `${value} km`
  }

  const [distanceMatch, setDistanceMatch] = React.useState<number>(20)
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setDistanceMatch(newValue as number)
  }

  return (
    <>
      {children}
      <RangeSlider
        ariaLabel="Distance from location"
        getAriaValueText={addUnitInKm}
        valueLabelFormat={addUnitInKm}
        value={distanceMatch}
        onChange={handleSliderChange}
        valueLabelDisplay="on"
      ></RangeSlider>
    </>
  )
}

export default DistanceControl
