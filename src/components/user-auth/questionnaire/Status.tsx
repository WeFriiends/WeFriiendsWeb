import React, { useState } from 'react'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { Box, Typography, ToggleButton, TextareaAutosize } from '@mui/material'
import { commonStyles } from 'styles/commonStyles'

interface StatusBarProps {
  formData: object
  onChange: object
}

const options = [
  'Looking for new friends',
  "I'm a new mom",
  "Let's take the dogs for a walk",
  "Let's be friends, I'm new in town",
  "I’m learning a new language. Let's talk!",
  'My plans are to move abroad',
  'How do you do it? Share your experience',
  'I look for emotional support',
]

const Status: React.FC<StatusBarProps> = () => {
  const { classes } = commonStyles()

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
        className={classes.flexContainer}
        onChange={handleCheckboxChange}
        value={statusOptions}
      >
        {options.map((option) => (
          <ToggleButton value={option} key={option} className={classes.option}>
            {option}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <TextareaAutosize
        className={classes.statusTextarea}
        aria-label="Leave a comment"
        minRows={3}
        placeholder="Is there anything you would like to add?"
      />
    </Box>
  )
}

export default Status
