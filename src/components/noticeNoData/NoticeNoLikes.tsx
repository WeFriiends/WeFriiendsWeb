import React from 'react'
import { Typography } from '@mui/material'

const NoticeNoLikes = () => {
  return (
    <Typography variant="h2" color="primary.main" sx={{ pt: 5 }}>
      Sorry!
      <br />
      There are no likes yet
    </Typography>
  )
}

export default NoticeNoLikes
