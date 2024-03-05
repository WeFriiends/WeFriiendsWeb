import React from 'react'
import { Box, Typography, Button } from '@mui/material'

const NoticeNoUsers = () => {
  return (
    <>
      <Typography variant="h2" color="primary.main" sx={{ pb: 6, pt: 5 }}>
        Sorry!
        <br />
        There are no registered users in your area.
        <br />
        Try again later.
      </Typography>
      <Typography
        variant="h2"
        color="primary.main"
        sx={{ p: 0, pb: 4, fontSize: 20, lineHeight: 1.5 }}
      >
        You can invite someone to WeFriiends in order to help women find friends
        faster
      </Typography>
      <Box textAlign="center">
        <Button href="#invite" variant="large" disableElevation disableRipple>
          go!
        </Button>
      </Box>
    </>
  )
}

export default NoticeNoUsers
