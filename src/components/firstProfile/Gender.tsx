import { useState } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { commonStyles } from 'styles/commonStyles'
import theme from 'styles/createTheme'

const Gender = () => {
  const { classes } = useStyles()
  const { title, subTitle } = commonStyles().classes
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
  }

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.titleContainer}>
        <Typography variant="h1" className={`${title} ${classes.title}`}>
          More about you
        </Typography>
      </Box>
      <Box className={classes.tipContainer}>
        <Typography className={`${subTitle} ${classes.subTitle}`}>
          What is your gender?
        </Typography>
      </Box>
      <Box className={classes.containerPosition}>
        {['female', 'male'].map((gender) => (
          <Box key={gender} className={classes.innerContainerPosition}>
            <IconButton
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
    </Box>
  )
}

export default Gender

const useStyles = makeStyles()(() => ({
  mainBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 50,
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 200,
      width: 350,
      margin: '0 auto',
    },
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
  },
  innerContainerPosition: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 32,
    fontWeight: 600,
    lineHeight: '119%',
    paddingTop: 0,
  },
  subTitle: {
    fontFamily: 'Inter',
    fontSize: '1.125rem',
    color: '#444',
    fontWeight: 600,
    lineHeight: 'normal',
  },
  tipContainer: {
    marginTop: 62,
    marginBottom: 40,
    textAlign: 'center',
  },
  iconsPosition: {
    paddingLeft: '1rem',
  },
}))
