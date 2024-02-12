import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

interface GetGenderProps {
  handleGenderChange: (selectedGender: string) => void
  maleHovered: boolean
  femaleHovered: boolean
  setMaleHovered: React.Dispatch<React.SetStateAction<boolean>>
  setFemaleHovered: React.Dispatch<React.SetStateAction<boolean>>
  maleClicked: boolean
  femaleClicked: boolean
}

const GetGender: React.FC<GetGenderProps> = ({
  handleGenderChange,
  maleHovered,
  setMaleHovered,
  femaleHovered,
  setFemaleHovered,
  maleClicked,
  femaleClicked,
}) => {
  const { classes } = useStyles()

  const getMaleImage = () =>
    maleClicked || maleHovered
      ? '/img/firstProfile/male_active.svg'
      : '/img/firstProfile/male.svg'

  const getFemaleImage = () =>
    femaleClicked || femaleHovered
      ? '/img/firstProfile/female_active.svg'
      : '/img/firstProfile/female.svg'

  return (
    <Box className={classes.containerPosition}>
      <Box className={classes.innerContainerPosition}>
        <IconButton
          onClick={() => handleGenderChange('female')}
          onMouseEnter={() => setFemaleHovered(true)}
          onMouseLeave={() => setFemaleHovered(false)}
        >
          <Box component="img" src={getFemaleImage()} alt="female logo" />
        </IconButton>
        <Typography className={classes.genderText}>Female</Typography>
      </Box>
      <Box className={classes.iconsPosition}>
        <IconButton
          onClick={() => handleGenderChange('male')}
          onMouseEnter={() => setMaleHovered(true)}
          onMouseLeave={() => setMaleHovered(false)}
        >
          <Box component="img" src={getMaleImage()} alt="male logo" />
        </IconButton>
        <Typography className={classes.genderText}>Male</Typography>
      </Box>
    </Box>
  )
}

export default GetGender

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
      marginTop: '2rem',
    },
    innerContainerPosition: {
      display: 'flex',
      flexDirection: 'column',
    },
    iconsPosition: {
      paddingLeft: '1rem',
    },
  }
})
