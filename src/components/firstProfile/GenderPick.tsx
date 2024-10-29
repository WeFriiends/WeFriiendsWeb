import { useState } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { setItemToLocalStorage } from 'utils/localStorage'

const Gender = () => {
  const { classes } = useStyles()
  const [chosenGender, setChosenGender] = useState<string>('female')
  const [hoveredGender, setHoveredGender] = useState<string | null>(null)

  const getImage = (gender: string) => {
    if (
      chosenGender === gender ||
      (hoveredGender === gender && chosenGender !== gender)
    ) {
      return `/img/firstProfile/${gender}_active.svg`
    }
    return `/img/firstProfile/${gender}.svg`
  }
  const genderPick = (gender: string) => {
    setChosenGender(gender)
    setItemToLocalStorage('gender', gender)
  }

  return (
    <>
      <Typography variant="h1" className={classes.title}>
        More about you
      </Typography>
      <Typography variant="body1" className={classes.description}>
        What is your gender?
      </Typography>

      <Box className={classes.containerPosition}>
        {['female', 'male'].map((gender) => (
          <Box key={gender} className={classes.innerContainerPosition}>
            <IconButton
              disableRipple
              className={classes.genderIcon}
              onClick={() => genderPick(gender)}
              onMouseEnter={() => setHoveredGender(gender)}
              onMouseLeave={() => setHoveredGender(null)}
            >
              <Box
                component="img"
                src={getImage(gender)}
                alt={`${gender} logo`}
              />
            </IconButton>
            <Typography className={classes.genderText}>
              {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default Gender

const useStyles = makeStyles()((theme) => ({
  title: {
    marginBottom: 60,
    padding: 0,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    lineHeight: 1.5,
    fontWeight: 500,
    marginBottom: 30,
    color: theme.palette.text.primary,
    textAlign: 'center',
  },
  genderText: {
    display: 'flex',
    justifyContent: 'center',
    color: '#3B4054',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: '1.125rem',
    lineHeight: '150%',
  },
  containerPosition: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 auto',
    gap: 24,
  },
  genderIcon: {
    padding: 0,
  },
  innerContainerPosition: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
  },
}))
