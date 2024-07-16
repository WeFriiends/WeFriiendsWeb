import React from 'react'
import { Button, Menu, MenuItem } from '@mui/material'

const ChatMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ minWidth: 'fit-content', padding: '0' }}
      >
        <img src="/img/messages/menu.svg" alt="menu" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>delete contact</MenuItem>
        <MenuItem onClick={handleClose}>block user</MenuItem>
        <MenuItem onClick={handleClose}>report and block</MenuItem>
      </Menu>
    </div>
  )
}

export default ChatMenu
