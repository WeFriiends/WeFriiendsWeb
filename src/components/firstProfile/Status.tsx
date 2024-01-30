import React, { useState } from 'react'
import Logo from '../logo/Logo'
import { Typography, Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import PrevPageButton from '../../common/buttons/PrevPageButton'
import NextPageButton from '../../common/buttons/NextPageButton'

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
  const [userStatus, setUserStatus] = useState<number[]>([])

  const statusHandler = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement
    const phraseId = Number(target.id.slice(-1))
    let currentStatusList = [...userStatus]
    if (currentStatusList.includes(phraseId)) {
      currentStatusList = currentStatusList.filter((elem) => elem !== phraseId)
    } else {
      currentStatusList.push(phraseId)
    }
    if (currentStatusList.length > 3) {
      currentStatusList.shift()
    }
    setUserStatus(currentStatusList)
  }

  const nextHandler = () => {
    const userStatusPhrases = userStatus.map((index) => STATUSES[index])
    localStorage.setItem('userStatus', JSON.stringify(userStatusPhrases))
  }

  const checkStatus = (index: number) => userStatus.some((num) => num === index)

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.logoContainer}>
        <Logo />
      </Box>
      <Box className={classes.prevPageContainer}>
        <PrevPageButton prevPageLink="/messages" />
      </Box>
      <Box className={classes.titleContainer}>
        <Typography variant="h1" className={classes.title}>
          What are you looking for?
        </Typography>
        <Typography className={classes.subTitle}>
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
      {/* <Box className={classes.textareaContainer}>
        <TextareaAutosize
          minRows={4}
          className={classes.textarea}
          placeholder="Is there anything you would like to add?"
          onChange={(e) => setUserStatus(e.target.value)}
        />
      </Box> */}
      <Box className={classes.nextPageContainer}>
        <NextPageButton nextPageLink="/status" onClick={nextHandler} />
      </Box>
    </Box>
  )
}

export default Status

const useStyles = makeStyles()((theme) => {
  return {
    mainBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 20,
      [theme.breakpoints.up('sm')]: {
        width: 400,
        margin: '0 auto',
      },
    },
    logoContainer: {
      // height: 138,
    },
    title: {
      fontFamily: 'Inter',
      fontSize: 18,
      fontWeight: 600,
      lineHeight: '40px',
      // paddingTop: 80,
      color: '#444',
      textAlign: 'center',
    },
    subTitle: {
      fontFamily: 'Inter',
      fontSize: 14,
      lineHeight: '40px',
      color: '#1D878C',
      textAlign: 'center',
      fontWeight: 600,
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginBottom: 14,
      // [theme.breakpoints.up('sm')]: {
      //   width: 400,
      //   paddingLeft: '10%',
      // },
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
      marginTop: 50,
    },
    link: {
      color: '#1D878C',
      fontSize: 22,
      textDecoration: 'none',
      display: 'block',
      textAlign: 'center',
    },
    phraseWrapper: {
      minHeight: 200,
      display: 'flex',
      justifyContent: 'space-between',
      gap: '10px 20px',
      flexWrap: 'wrap',
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
      },
    },
    text: {
      fontSize: 12,
    },
  }
})
