import React, { ReactNode } from 'react'
import {
  Button,
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import CheckBoxOutlineBlank from '@mui/icons-material/CheckBoxOutlineBlank'
import { useDialog } from '../context/dialogContext'
import { makeStyles } from 'tss-react/mui'

export default function ModalDialog({ children }: { children: ReactNode }) {
  const { isDialogOpen, openDialog, closeDialog } = useDialog()
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const { classes } = useStyles()

  return (
    <div>
      <Button variant="outlined" onClick={openDialog}>
        Open responsive dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={isDialogOpen}
        onClose={closeDialog}
        aria-labelledby="responsive-dialog-title"
      >
        <IconButton
          aria-label="close"
          onClick={closeDialog}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[600],
          }}
        >
          <CloseIcon
            sx={{
              position: 'absolute',
              width: 16,
              height: 16,
              stroke: (theme) => theme.palette.grey[600],
              strokeWidth: 1,
            }}
          />
          <CheckBoxOutlineBlank />
        </IconButton>

        <DialogContent className={classes.modalBox}>{children}</DialogContent>
      </Dialog>
    </div>
  )
}

const useStyles = makeStyles()(() => {
  return {
    modalBox: {
      background: 'rgba(0, 0, 0, 0.02)',
      color: '#000',
    },
  }
})
