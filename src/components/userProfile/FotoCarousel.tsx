import React from 'react'
import Carousel from 'react-material-ui-carousel'
import UserPic from './UserPic'
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
          borderRadius: 0,
          height: '3px',
        },
      }}
      indicatorIconButtonProps={{
        style: {
          marginRight: '3px',
        },
      }}
      indicatorContainerProps={{
        style: {
          position: 'absolute',
          marginTop: 'calc(-14px - 50vh)',
          zIndex: 200,
        },
      }}
      navButtonsProps={{
        style: {
          padding: '12px',
          color: '#444444',
          background: 'white',
          opacity: '0.5',
        },
      }}
    >
      {items.map((item, i) => (
        <UserPic key={i} item={item} />
      ))}
    </Carousel>
  )
}

export default FotoCarousel
