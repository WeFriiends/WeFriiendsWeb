import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from './Item'
import items from './items.json'

const FotoCarousel = () => {
  return (
    <Carousel
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
          marginTop: 'calc(-14px - 50vh)',
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
