import React from 'react'
import Carousel from 'react-material-ui-carousel'
import UserPic from './UserPic'
import { UserPhoto } from 'types/UserProfileData'

interface PhotoCarouselProps {
  items: UserPhoto[]
}

const PhotoCarousel: React.FC<PhotoCarouselProps> = ({ items }) => {
  return (
    <Carousel
      autoPlay={false}
      navButtonsAlwaysVisible={true}
      IndicatorIcon={false}
      activeIndicatorIconButtonProps={{
        style: {
          background:
            'linear-gradient(0deg, rgba(255, 255, 255, 0) 2px, rgb(255, 255, 255) 2px, rgb(255, 255, 255) 5px, rgba(255, 255, 255, 0) 5px)',
          borderRadius: 0,
          height: '3px',
        },
      }}
      indicatorIconButtonProps={{
        style: {
          background:
            'linear-gradient(0deg, rgba(255, 255, 255, 0) 2px, rgb(255, 255, 255, .6) 2px, rgb(255, 255, 255, .6) 5px, rgba(255, 255, 255, 0) 5px)', //'#E0E0E0',
          padding: '6px 0',
          flex: '1 0 auto',
          borderRadius: 0,
          //border: '6px solid transparent',
        },
      }}
      indicatorContainerProps={{
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: 'auto',
          zIndex: 200,
          margin: '0 9px',
          display: 'flex',
          flexWrap: 'nowrap',
          gap: '3px',
        },
      }}
      navButtonsProps={{
        style: {
          padding: '12px',
          color: '#444',
          background: 'white',
          opacity: '0.5',
          // width: '55px',
          // height: '55px',
        },
      }}
    >
      {items.map((item: UserPhoto, i: number) => (
        <UserPic key={i} src={item.src} />
      ))}
    </Carousel>
  )
}

export default PhotoCarousel
