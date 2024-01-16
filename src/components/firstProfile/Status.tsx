import React, { useState } from 'react'
import Logo from '../logo/Logo'
import {
  Typography,
  Box,
  FormControl,
  TextField,
  TextareaAutosize,
  Link,
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import PrevPageButton from '../../common/buttons/PrevPageButton'
import NextPageButton from '../../common/buttons/NextPageButton'

const STATUSES = [
  'Looking for new friends',
  "I'm a new mom",
  "Let's take the dogs for a walk",
  "Let's be friends, I'm new in town",
  "I’m learning a new language. Let's talk!",
  'My plans are to move abroad',
  'How do you do it? Share your experience',
  'I look for emotional support',
]

const Status = () => {
  const { classes } = useStyles()
  const [userStatus, setUserStatus] = useState('')
  console.log('userStatus!', userStatus)

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
          This will be you status. You can always change it
        </Typography>
      </Box>
      <Box className={classes.textareaContainer}>
        <TextareaAutosize
          minRows={4}
          className={classes.textarea}
          placeholder="Is there anything you would like to add?"
          onChange={(e) => setUserStatus(e.target.value)}
        />
      </Box>
      <Box className={classes.nextPageContainer}>
        <NextPageButton nextPageLink="/messages" />
      </Box>
    </Box>
  )
}

export default Status

const useStyles = makeStyles()((theme) => {
  return {
    mainBox: {
      // display: 'flex',
      // flexDirection: 'column',
      display: 'grid',
      gridTemplateRows: '2fr 1fr 2fr 2fr 1fr',
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
      paddingTop: 80,
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
    textareaContainer: {
      height: 80,
      display: 'flex',
      alignItems: 'center',
    },
    textarea: {
      width: 350,
      height: 75,
      resize: 'none',
      margin: '0 auto',
      padding: '10px 18px',
      borderRadius: 20,
      border: '1px solid #C5C5C5',
      color: '#ADA9A9',
      fontFamily: 'Inter',
      fontSize: 16,
      fontStyle: 'italic',
      fontWeight: 400,
      boxShadow: '0px 0px 7px 1px rgba(179, 179, 179, 0.14)',
      '&:focus': {
        outline: 'none',
      },
      [theme.breakpoints.up('sm')]: {
        width: 400,
        paddingLeft: '10%',
      },
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    prevPageContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    nextPageContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    link: {
      color: '#1D878C',
      fontSize: 22,
      textDecoration: 'none',
      display: 'block',
      textAlign: 'center',
    },
  }
})
