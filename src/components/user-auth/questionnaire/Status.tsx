import React, { useState } from 'react'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { Box, Typography, ToggleButton } from '@mui/material'
import { commonStyles } from 'styles/commonStyles'
import { makeStyles } from 'tss-react/mui'

interface StatusBarProps {
  formData: object
  onChange: object
}

const options = [
  'Looking for new friends',
  "I’m learning a new language. Let's talk!",
  "Let's be friends, I'm new in town",
  'I look for emotional support',
  'My plans are to move abroad',
  "I'm a new mom. Need some help",
  "Let's take the dogs for a walk",
]

const Status: React.FC<StatusBarProps> = () => {
  const { classes } = commonStyles()
  const { classes: styles } = useStyles()

  const [statusOptions, setStatusOptions] = useState<string[]>([])

  const handleCheckboxChange = (
    event: React.MouseEvent<HTMLElement>,
    newOptions: string[]
  ) => {
    setStatusOptions(newOptions)
  }

  return (
    <Box>
      <Typography className={classes.titleForms}>
        What are you looking for?
      </Typography>
      <Typography className={classes.subTitleForms}>
        This will be you status. You can always change it
      </Typography>

      <ToggleButtonGroup
        sx={{ marginLeft: '2rem' }}
        className={classes.buttonsContainer}
        onChange={handleCheckboxChange}
        value={statusOptions}
      >
        {options.map((option) => (
          <ToggleButton value={option} key={option} className={classes.option}>
            {option}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <Typography className={styles.text}>3 statuses max</Typography>
    </Box>
  )
}

export default Status

const useStyles = makeStyles()(() => {
  return {
    text: {
      textAlign: 'center',
      color: '#1D878C',
      fontWeight: 400,
      fontSize: 12,
      marginTop: '2rem',
    },
  }
})
