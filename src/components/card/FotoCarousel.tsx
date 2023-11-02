import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import items from './items.json'
import { makeStyles } from 'tss-react/mui'

const FotoCarousel = () => {
  const { classes } = useStyles()
  return (
    <Carousel
      className={classes.carousel}
      autoPlay={false}
      navButtonsAlwaysVisible={true}
      IndicatorIcon={<img src="/img/indicator.svg" />}
      activeIndicatorIconButtonProps={{
        style: {
          backgroundColor: 'white',
        },
      }}
      indicatorIconButtonProps={{
        style: {
          paddingRight: '5px',
        },
      }}
      indicatorContainerProps={{
        style: {
          position: 'absolute',
          marginTop: '-50vh',
          zIndex: 1,
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  )
}

export default FotoCarousel

const useStyles = makeStyles()(() => {
  return {
    carousel: {
      background: 'red',
    },
  }
})
