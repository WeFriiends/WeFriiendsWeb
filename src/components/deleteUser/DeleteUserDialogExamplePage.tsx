import React, { useRef } from 'react'
import { Button } from '@mui/material'
import DeleteUserDialog from './DeleteUserDialog'

const DeleteUserDialogExamplePage = () => {
  const deleteUserDialogRef = useRef<{
    handleOpenDeleteUserDialog: () => void
  }>(null)

  const handleOpenDeleteUserDialog = () => {
    deleteUserDialogRef.current?.handleOpenDeleteUserDialog()
  }

  return (
    <>
      <Button onClick={handleOpenDeleteUserDialog} variant="text" disableRipple>
        Click to Delete User
      </Button>
      <DeleteUserDialog ref={deleteUserDialogRef} />
    </>
  )
}

export default DeleteUserDialogExamplePage
