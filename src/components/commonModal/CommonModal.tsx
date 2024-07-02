import React, { ReactNode } from 'react'
import { Box, Modal, Icon } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import { makeStyles } from 'tss-react/mui'
import theme from '../../styles/createTheme'

type CommonModalProps = {
  children: ReactNode
  isOpened: boolean
  modalTitle: string
  modalDescription: string
  onClose: () => void
  shortHeight?: boolean
}

export const CommonModal = ({
  children,
  isOpened,
  modalTitle,
  modalDescription,
  onClose,
  shortHeight,
}: CommonModalProps) => {
  const { classes } = useStyles()

  return (
    <Modal
      className={classes.modal}
      open={isOpened}
      aria-labelledby={modalTitle}
      aria-describedby={modalDescription}
    >
      <Box
        className={`${classes.wrapper} ${shortHeight && classes.wrapperShort}`}
      >
        <IconButton
          disableRipple={true}
          disableFocusRipple={true}
          aria-label="close modal"
          className={classes.closeButton}
          onClick={onClose}
        >
          <Icon>
            <img src="/img/icon-close-modal.svg" alt="Close" />
          </Icon>
        </IconButton>
        <Box className={classes.wrapperContent}>{children}</Box>
      </Box>
    </Modal>
  )
}

const useStyles = makeStyles()(() => ({
  modal: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& :focus': {
      outline: 'none',
    },
  },
  wrapper: {
    position: 'relative',
    width: 370,
    height: 625,
    maxWidth: '100vw',
    maxHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '60px 0 55px',
    [theme.breakpoints.down(370)]: {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    },
  },
  wrapperShort: {
    height: 370,
  },
  closeButton: {
    height: 24,
    width: 24,
    padding: 0,
    position: 'absolute',
    transition: '0.3s',
    right: 15,
    top: 15,
    minWidth: 0,
    '&: hover': {
      transform: 'scale(105%)',
      cursor: 'pointer',
    },
  },
  wrapperContent: {
    margin: '0 15px',
    padding: '0 5px',
    overflow: 'auto',
    maxHeight: '100%',
  },
}))
