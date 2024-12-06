import React from 'react'
import { Box, Button, Typography } from '@mui/material'

const Dashboard = () => {
  const routesNotAuthed = [{ path: '/', label: 'Register/Login page' }]
  const routesAuthed = [
    { path: '/callback', label: 'Auth Callback' },
    { path: '/fill-profile', label: 'Fill Profile' },
    { path: '/friends', label: 'Friends' },
    { path: '/messages', label: 'Messages' },
    { path: '/who-liked-you', label: 'Your Likes List' },
    { path: '/near-me', label: 'Near Me' },
    { path: '/my-account', label: 'My Account' },
  ]

  const routesTemporaryExamples = [
    { path: '/report', label: 'Report Dialog Example' },
    { path: '/delete', label: 'Delete User Dialog Example' },
    { path: '/invite', label: 'Invitation' },
    { path: '/error-400', label: 'Error 400' },
    { path: '/error-500', label: 'Error 500' },
    { path: '*', label: 'Error Page (Catch-All)' },
    { path: '/new-match', label: 'New Match' },
  ]

  const routesTemporary = [
    { path: '/account', label: 'User Account' },
    { path: '/dashboard', label: 'Dashboard' },
  ]

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h1">Dashboard</Typography>
      <Typography variant="h2">Routes for authenticated users</Typography>
      {routesAuthed.map((route) => (
        <Box key={route.path} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1">{route.path}</Typography>
          <Button
            variant="text"
            href={route.path}
            sx={{ textDecoration: 'none', color: '#007bff' }}
          >
            {route.label}
          </Button>
        </Box>
      ))}
      <Typography variant="h2">Routes for not authenticated users</Typography>
      {routesNotAuthed.map((route) => (
        <Box key={route.path} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1">{route.path}</Typography>
          <Button
            variant="text"
            href={route.path}
            sx={{ textDecoration: 'none', color: '#007bff' }}
          >
            {route.label}
          </Button>
        </Box>
      ))}
      <Typography variant="h2">Technical/temporary routes</Typography>
      {routesTemporaryExamples.map((route) => (
        <Box key={route.path} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1">{route.path}</Typography>
          <Button
            variant="text"
            href={route.path}
            sx={{ textDecoration: 'none', color: '#007bff' }}
          >
            {route.label}
          </Button>
        </Box>
      ))}
      <Typography variant="h2">Technical/temporary routes</Typography>
      {routesTemporary.map((route) => (
        <Box key={route.path} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1">{route.path}</Typography>
          <Button
            variant="text"
            href={route.path}
            sx={{ textDecoration: 'none', color: '#007bff' }}
          >
            {route.label}
          </Button>
        </Box>
      ))}
    </div>
  )
}

export default Dashboard
