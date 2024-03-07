import React, { useState } from 'react'
import Logo from '../logo/Logo'
import { Typography, Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import PrevPageButton from '../../common/buttons/PrevPageButton'
import NextPageButton from '../../common/buttons/NextPageButton'
import { commonStyles } from 'styles/commonStyles'

const STATUSES = [
  'Looking for new friends',
  "I’m learning a new language. Let's talk!",
  "Let's be friends, I'm new in town",
  'I look for emotional support',
  'My plans are to move abroad',
  "I'm a new mom. Need some help",
  "Let's take the dogs for a walk",
]

const Status = () => {
  const { classes } = useStyles()
  const commonClasses = commonStyles().classes
  const [userStatus, setUserStatus] = useState<number[]>([])

  const statusHandler = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement
    const phraseId = Number(target.id.slice(-1))
    let currentStatusList = [...userStatus]
    if (currentStatusList.includes(phraseId)) {
      currentStatusList = currentStatusList.filter((elem) => elem !== phraseId)
    } else if (currentStatusList.length < 3) {
      currentStatusList.push(phraseId)
    }
    setUserStatus(currentStatusList)
  }

  const nextHandler = () => {
    const userStatusPhrases = userStatus.map((index) => STATUSES[index])
    localStorage.setItem('userStatus', JSON.stringify(userStatusPhrases))
  }

  const checkStatus = (index: number) => userStatus.some((num) => num === index)

  return (
    <Box className={`${commonClasses.mainBox} ${classes.mainBox}`}>
      <Box>
        <Logo />
      </Box>
      <Box className={classes.prevPageContainer}>
        <PrevPageButton prevPageLink="/registration/status" />
      </Box>
      <Box className={classes.titleContainer}>
        <Typography
          variant="h1"
          className={`${commonClasses.title} 
          ${classes.title}`}
        >
          What are you looking for?
        </Typography>
        <Typography className={`${commonClasses.subTitle} ${classes.subTitle}`}>
          This will be your status. You can always change it
        </Typography>
      </Box>
      <Box className={classes.phraseWrapper}>
        {STATUSES.map((phrase, index) => (
          <Box
            key={phrase}
            className={classes.phrase}
            onClick={statusHandler}
            id={`phrase${index}`}
            sx={{
              backgroundColor: checkStatus(index)
                ? '#faa06d'
                : 'rgba(229, 229, 229, 0.40)',
            }}
          >
            <Typography className={classes.text} id={`text${index}`}>
              {phrase}
            </Typography>
          </Box>
        ))}
      </Box>
      <Typography className={classes.tip}>3 statuses max</Typography>
      <Box className={classes.nextPageContainer}>
        <NextPageButton
          nextPageLink="/registration/status"
          onClick={nextHandler}
        />
      </Box>
    </Box>
  )
}

export default Status

const useStyles = makeStyles()((theme) => {
  return {
    mainBox: {
      overflow: 'hidden',
      [theme.breakpoints.up(420)]: {
        width: 400,
        margin: '0 auto',
      },
    },
    title: {
      fontSize: 18,
    },
    subTitle: {
      fontFamily: 'Inter',
      fontSize: 14,
      color: '#1D878C',
      fontWeight: 600,
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginBottom: 14,
    },
    tip: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: '183%',
      textAlign: 'center',
      marginTop: 42,
      marginBottom: 33,
      color: '#639c9e',
    },
    prevPageContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 54,
      marginBottom: 30,
    },
    nextPageContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 64,
    },
    phraseWrapper: {
      minHeight: 200,
      display: 'flex',
      justifyContent: 'center',
      gap: '10px 20px',
      flexWrap: 'wrap',
      width: '90vw',
      [theme.breakpoints.up(420)]: {
        width: 400,
        margin: 'o auto',
        justifyContent: 'space-between',
      },
    },
    phrase: {
      minHeight: 40,
      padding: '4px 20px',
      color: '#444',
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: 400,
      borderRadius: 20,
      display: 'flex',
      alignItems: 'center',
      maxWidth: 190,
      transition: '0.5s',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#fba16d',
      },
    },
    text: {
      fontSize: 12,
    },
  }
})
