import React from 'react'
import { Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { OnboardingTypes } from './onboardingTypes'
import PageComponent from './PageComponent'

type OnboardingPresentationProps = {
  contents: OnboardingTypes
  children?: JSX.Element
  index: number
  onChangeIndex: (i: number) => void
}

const OnboardingPresentation: React.FC<OnboardingPresentationProps> = ({
  contents,
  children,
  index,
  onChangeIndex,
}) => {
  //TODO transfare styles to common styles
  const { classes } = useStyles()
  const handleGoBack = () => {
    if (index > 0) {
      onChangeIndex(index - 1)
    }
  }

  const handleGoForward = () => onChangeIndex(index + 1)

  return (
    <Box className={classes.insideCarousel}>
      {contents.isFirst && (
        <PageComponent
          heading1={contents.heading1}
          heading2={contents.heading2}
          textArr={contents.text}
          contentASObj={contents.image}
          goForward={handleGoForward}
        />
      )}

      {!contents.isFirst && contents.isStart && (
        <PageComponent
          heading2={contents.heading2}
          contentASObj={contents.image}
          content={contents.text[0].line}
          goBack={handleGoBack}
        />
      )}

      {!contents.isFirst && !contents.isStart && (
        <PageComponent
          heading2={contents.heading2}
          contentASObj={contents.image}
          content={contents.text[0].line}
          goBack={handleGoBack}
        />
      )}
      {children}
    </Box>
  )
}

export default OnboardingPresentation

const useStyles = makeStyles()((theme) => {
  return {
    insideCarousel: {
      backgroundColor: '#FFF1EC',
      display: 'grid',
      // gridTemplateRows: '0.5fr 2fr 0.5fr',
      width: '100%',
      height: '100vh',
      alignItems: 'center',
      overflow: 'hidden',
      // position: 'relative',
      margin: 'auto',
      [theme.breakpoints.up('sm')]: {
        width: 960,
        margin: 'auto',
      },
    },
    // iconButton: {
    //   position: 'relative',
    //   width: '45px',
    //   height: '45px',
    //   top: '-145px',
    //   left: '173px',
    // },
    // img: {
    //   position: 'relative',
    // width: '272.9px',
    // height: '354px',
    //   top: '165px',
    //   left: '59px',
    // },
    // title: {
    //   fontSize: 24,
    //   fontWeight: 500,
    //   lineHeight: '40px',
    //   paddingTop: 70,
    //   paddingBottom: 14,
    //   color: '#F46B5D',
    //   textAlign: 'center',
    // },
    // content: {
    //   position: 'relative',
    //   fontFamily: 'Inter',
    //   fontSize: '26px',
    //   fontWeight: 500,
    //   lineHeight: '39px',
    //   //letterSpacing: '0em',
    //   textAlign: 'center',
    //   width: '267px',
    //   height: '325px',
    //   top: '200px',
    //   left: '62px',
    // },

    // linkBtn: {
    //   padding: '18px 24px', // top right bottom left
    //   borderRadius: '10px',

    //   backgroundColor: '#fff',
    //   color: '#333333',
    //   '&:active, &:hover': {
    //     backgroundColor: '#FB8F67',
    //     transition: 'background-color 0.5s',
    //     color: '#fff',
    //   },
    // },
  }
})
