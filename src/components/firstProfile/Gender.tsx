import React, { useState } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { commonStyles } from 'styles/commonStyles'

const Gender = () => {
  const { classes } = useStyles()
  const commonClasses = commonStyles().classes
  const [chosenGender, setChosenGender] = useState<string>('')
  const [hoveredGender, setHoveredGender] = useState<string | null>(null)

  const getMaleImage = () =>
    chosenGender === 'male' || hoveredGender === 'male'
      ? '/img/firstProfile/male_active.svg'
      : '/img/firstProfile/male.svg'

  const getFemaleImage = () =>
    chosenGender === 'female' || hoveredGender === 'female'
      ? '/img/firstProfile/female_active.svg'
      : '/img/firstProfile/female.svg'

  return (
    <Box className={commonClasses.mainBox}>
      <Box className={classes.titleContainer}>
        <Typography
          variant="h1"
          className={`${commonClasses.title}
          ${classes.title}`}
        >
          More about you
        </Typography>
      </Box>
      <Box className={classes.tipContainer}>
        <Typography className={`${commonClasses.subTitle} ${classes.subTitle}`}>
          What is your gender?
        </Typography>
      </Box>
      <Box className={classes.containerPosition}>
        <Box className={classes.innerContainerPosition}>
          <IconButton
            onClick={() => setChosenGender('female')}
            onMouseEnter={() => setHoveredGender('female')}
            onMouseLeave={() => {
              if (chosenGender !== 'female') {
                setHoveredGender(null)
              }
            }}
          >
            <Box component="img" src={getFemaleImage()} alt="female logo" />
          </IconButton>
          <Typography className={classes.genderText}>Female</Typography>
        </Box>
        <Box className={classes.iconsPosition}>
          <IconButton
            onClick={() => setChosenGender('male')}
            onMouseEnter={() => setHoveredGender('male')}
            onMouseLeave={() => {
              if (chosenGender !== 'male') {
                setHoveredGender(null)
              }
            }}
          >
            <Box component="img" src={getMaleImage()} alt="male logo" />
          </IconButton>
          <Typography className={classes.genderText}>Male</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Gender

const useStyles = makeStyles()(() => {
  return {
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
      margin: 'o auto',
      marginTop: '2rem',
    },
    innerContainerPosition: {
      display: 'flex',
      flexDirection: 'column',
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
      marginTop: 20,
      marginBottom: 50,
      textAlign: 'center',
    },
    iconsPosition: {
      paddingLeft: '1rem',
    },
  }
})
