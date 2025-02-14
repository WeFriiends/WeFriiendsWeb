import React from 'react'
import { Box, Button, Typography } from '@mui/material'

const Dashboard = () => {
  const routes = {
    notAuthed: [{ path: '/', label: 'Register/Login page' }],
    authed: [
      { path: '/callback', label: 'Auth Callback' },
      { path: '/fill-profile', label: 'Fill Profile' },
      { path: '/friends', label: 'Friends' },
      { path: '/messages', label: 'Messages' },
      { path: '/who-liked-you', label: 'Your Likes List' },
      { path: '/near-me', label: 'Near Me' },
      { path: '/my-account', label: 'My Account' },
    ],
    temporaryExamples: [
      {
        path: '/security-dialog',
        label: 'Security Dialog Example (Delete, Block, Materials)',
      },
      { path: '/report', label: 'Report Dialog Example (Report or Block)' },
      { path: '/delete', label: 'Delete User Dialog Example' },
      { path: '/invite', label: 'Invitation' },
      { path: '/error-400', label: 'Error 400' },
      { path: '/error-500', label: 'Error 500' },
      { path: '*', label: 'Error Page (Catch-All)' },
      { path: '/new-match', label: 'New Match' },
    ],
    temporary: [
      {
        path: '/account',
        label: 'User Account (works only after login and first profile)',
      },
      { path: '/dashboard', label: 'Dashboard' },
    ],
  }

  const renderRoutes = (
    title: string,
    routes: { path: string; label: string }[]
  ) => (
    <div>
      <Typography variant="h2" sx={{ marginTop: 2, marginBottom: 2 }}>
        {title}
      </Typography>
      {routes.map((route) => (
        <Box key={route.path} sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ marginRight: 2 }}>
            {route.path}
          </Typography>
          <Button
            variant="text"
            href={route.path}
            sx={{ textDecoration: 'none', color: '#007bff', p: 0 }}
          >
            {route.label}
          </Button>
        </Box>
      ))}
    </div>
  )

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h1">Dashboard</Typography>
      {renderRoutes('Routes for authenticated users', routes.authed)}
      {renderRoutes('Routes for not authenticated users', routes.notAuthed)}
      {renderRoutes(
        'Examples, additional components, routes for demonstration',
        routes.temporaryExamples
      )}
      {renderRoutes('Technical/temporary routes', routes.temporary)}
    </div>
  )
}

export default Dashboard
