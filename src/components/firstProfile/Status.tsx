import { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { setItemToLocalStorage } from 'utils/localStorage'

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

  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])

  useEffect(() => {
    setItemToLocalStorage('selectedStatuses', selectedStatuses)
  }, [selectedStatuses])

  const toggleStatus = (statusId: string) => {
    if (selectedStatuses.includes(statusId)) {
      setSelectedStatuses(selectedStatuses.filter((s) => s !== statusId))
    } else if (selectedStatuses.length < 3) {
      setSelectedStatuses([...selectedStatuses, statusId])
    }
  }

  return (
    <>
      <Typography variant="h1" className={classes.title}>
        What are you looking for?
      </Typography>
      <Typography variant="body1" className={classes.description}>
        This will be your status. You can always change it
        <br />
        Please, choose 3 statuses maximum
      </Typography>

      <Box className={classes.phraseWrapper}>
        {STATUSES.map((phrase) => (
          <Box
            key={phrase}
            className={`${classes.phrase} ${classes.text}`}
            onClick={() => toggleStatus(phrase)}
            sx={{
              backgroundColor: selectedStatuses.includes(phrase)
                ? '#faa06d'
                : 'rgba(229, 229, 229, 0.40)',
            }}
          >
            {phrase}
          </Box>
        ))}
      </Box>
    </>
  )
}

export default Status

const useStyles = makeStyles()((theme) => {
  return {
    title: {
      marginBottom: 60,
      padding: 0,
      textAlign: 'center',
    },
    description: {
      fontSize: 18,
      lineHeight: 1.5,
      fontWeight: 500,
      marginBottom: 45,
      color: theme.palette.text.primary,
      textAlign: 'center',
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
