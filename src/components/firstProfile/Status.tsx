import React, { useState } from 'react'
import { Typography, Box } from '@mui/material'
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
      }
    }
  }

  return (
    <Box className={`${commonClasses.mainBox} ${classes.mainBox}`}>
      <Box className={classes.titleContainer}>
        <Typography
          variant="h1"
          className={`${commonClasses.title}
          ${classes.title}`}
        >
          What are you looking for?
        </Typography>
      </Box>
      <Box className={classes.tipContainer}>
        <Typography className={`${commonClasses.subTitle} ${classes.subTitle}`}>
          This will be your status. You can always change it
        </Typography>
        <Typography className={classes.subTitle}>
          Please, choose 3 statuses maximum
        </Typography>
      </Box>
      <Box className={classes.phraseWrapper}>
        {STATUSES.map((phrase, index) => (
          <Box
            key={phrase}
            className={`${classes.phrase} ${classes.text}`}
            onClick={(event) => {
              const target = event.target as Element
              toggleStatus(target.id)
            }}
            id={`phrase${index}`}
            sx={{
              backgroundColor: selectedStatuses.includes(`phrase${index}`)
                ? '#faa06d'
                : 'rgba(229, 229, 229, 0.40)',
            }}
          >
            {phrase}
          </Box>
        ))}
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
      fontSize: 32,
      fontWeight: 600,
      lineHeight: '119%',
      paddingTop: 0,
    },
    subTitle: {
      fontFamily: 'Inter',
      fontSize: 14,
      color: '#1D878C',
      fontWeight: 600,
      lineHeight: 'normal',
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginBottom: 14,
    },
    tipContainer: {
      marginTop: 20,
      marginBottom: 50,
      textAlign: 'center',
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
    phraseWrapper: {
      minHeight: 200,
      display: 'flex',
      justifyContent: 'center',
      gap: '10px 20px',
      flexWrap: 'wrap',
      width: '90vw',
      marginBottom: 70,
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
