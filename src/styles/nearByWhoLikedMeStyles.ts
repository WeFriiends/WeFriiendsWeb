import { makeStyles } from 'tss-react/mui'
export const nearByWhoLikedMeStyles = makeStyles()(() => {
  return {
    userImages: {
      borderRadius: '50%',
      width: '100px',
      height: '100px',
    },
    imageListItem: {
      marginBottom: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    profileBoxPosition: {
      position: 'relative',
      width: 'fit-content',
      textAlign: 'center',
    },
    lightingBoxPosition: {
      position: 'absolute',
      top: 0,
      right: '30%',
    },
    usernameBoxPosition: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    usernameStyling: {
      fontWeight: '500',
      color: '#000000',
      fontSize: '1rem',
      '&:hover': {
        color: '#F46B5D',
        fontWeight: '600',
      },
      paddingTop: '.5rem',
    },
    distanceBoxPosition: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: '0.1rem',
    },
    locationImageStyle: {
      height: '0.8125rem',
      width: '0.63838rem',
      strokeWidth: '1px',
    },
    locationTextStyle: {
      color: 'rgba(0, 0, 0, 0.50)',
      fontSize: '0.75rem',
      fontWeight: '500',
      paddingLeft: '.3rem',
    },
  }
})
