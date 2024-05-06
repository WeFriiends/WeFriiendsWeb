import React, { useState } from 'react'
import Logo from '../logo/Logo'
import { Typography, Box, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { commonStyles } from 'styles/commonStyles'

const STATUSES: Array<string> = [
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

  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])

  const toggleStatus = (status: string) => {
    if (selectedStatuses.includes(status)) {
      setSelectedStatuses(selectedStatuses.filter((s) => s !== status))
    } else {
      if (selectedStatuses.length < 3) {
        setSelectedStatuses([...selectedStatuses, status])
      } else {
        alert('You can only select up to 3 statuses.')
      }
    }
  }

  const nextHandler = () => {
    console.log('selectedStatuses', selectedStatuses)
    const selectedStatusesPhrases = selectedStatuses.map(
      (index: string) => STATUSES[Number(index.slice(6))]
    )
    localStorage.setItem(
      'selectedStatuses',
      JSON.stringify(selectedStatusesPhrases)
    )
  }
  return (
    <Box className={`${commonClasses.mainBox} ${classes.mainBox}`}>
      <Box>
        <Logo />
      </Box>
      <Box className={classes.prevPageContainer}>
        <Button
          className={classes.prevPageButton}
          startIcon={
            <img
              alt="previous page"
              src={'/img/navigationIcons/arrow_back.svg'}
              style={{ margin: 0 }}
            />
          }
        />
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
            onClick={(event) => {
              // const target = event.target as HTMLElement
              const targetEvent = event.target as Element
              const target = targetEvent.closest('[id*=phrase]') as HTMLElement
              toggleStatus(target.id)
              console.log('event target id', target.id)
            }}
            id={`phrase${index}`}
            sx={{
              backgroundColor: selectedStatuses.includes(`phrase${index}`)
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
        <Button
          className={`${commonClasses.submitButton} ${classes.nextPageButton}`}
          onClick={nextHandler}
        >
          Next
        </Button>
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
    prevPageButton: {
      width: 45,
      minWidth: 45,
      height: 45,
      paddingLeft: 18,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      background: '#FEDED2',
    },
    nextPageButton: {
      height: 60,
      padding: '18px 24px',
      textTransform: 'none',
      width: '90vw',
      [theme.breakpoints.up('sm')]: {
        width: 400,
      },
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
