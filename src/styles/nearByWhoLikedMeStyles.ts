import { makeStyles } from 'tss-react/mui'

export const nearByWhoLikedMeStyles = makeStyles()((theme) => {
  return {
    userImages: {
      borderRadius: '50%',
      width: 81,
      height: 81,
      [theme.breakpoints.up('lg')]: {
        width: 135,
        height: 135,
      },
    },
    imageList: {
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))!important',
      maxWidth: 700,
      marginLeft: 'auto',
      marginRight: 'auto',
      [theme.breakpoints.up('lg')]: {
        gridTemplateColumns: 'repeat(5, 1fr) !important',
        maxWidth: '100vw',
      },
    },
    imageListItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '0 auto 30px',
      cursor: 'pointer',
      width: '100%',
      '& path': {
        // lightning icon color mobile
        stroke: theme.palette.primary.main,
      },
      [theme.breakpoints.up('lg')]: {
        margin: '0 auto 45px',
        '& path': {
          // lightning icon color desktop
          stroke: '#AFB1B6',
        },
      },
      '&:hover path': {
        // lightning icon hover color desktop
        stroke: theme.palette.primary.main,
      },
      '& p path': {
        stroke: theme.palette.text.primary,
      },
      '&:hover p path': {
        stroke: theme.palette.text.primary,
      },
      '&:hover h4': {
        color: theme.palette.primary.main,
      },
    },
    profileBoxPosition: {
      textAlign: 'center',
    },
    lightingIconPosition: {
      position: 'absolute',
      top: 10,
      right: 18,
      width: 18,
      height: 20,
      [theme.breakpoints.up('lg')]: {
        top: 3,
        right: 15,
        width: 30,
        height: 33,
      },
    },
    usernameStyling: {
      fontWeight: 500,
      color: theme.palette.common.black,
      fontSize: 12,
      lineHeight: '20px',
      padding: '5px 5px 0',
      '&:hover': {
        color: theme.palette.primary.main,
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: 16,
        paddingTop: 15,
      },
    },
    distanceBoxPosition: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 3,
    },
    locationTextStyle: {
      color: theme.palette.text.primary,
      fontSize: 12,
      lineHeight: '20px',
      fontWeight: '500',
      paddingLeft: 4,
    },
  }
})
