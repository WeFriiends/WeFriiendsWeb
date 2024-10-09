import React, { useState, useRef } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { CommonModal } from 'common/components/CommonModal'
interface DeleteModalProps {
  setIsDeleteModalOpened: (isOpened: boolean) => void
  isOpened: boolean
  deleteChosenPic: () => void
  setChosenId: (chosenId: string) => void
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  setIsDeleteModalOpened,
  isOpened,
  deleteChosenPic,
  setChosenId,
}) => {
  const { classes } = useStyles()

  const deleteModalClose = () => {
    setChosenId('')
    setIsDeleteModalOpened(false)
  }

  const cancelHandler = () => {
    setChosenId('')
    setIsDeleteModalOpened(false)
  }

  return (
    <CommonModal
      isOpened={isOpened}
      onClose={deleteModalClose}
      modalTitle={'modal-modal-title'}
      modalDescription={'modal-modal-description'}
      height={240}
    >
      <Box className={classes.deleteWrapper}>
        <Typography className={classes.title}>Delete file?</Typography>
        <Box className={classes.buttonsWrapper}>
          <Button className={classes.button} onClick={cancelHandler}>
            Cancel
          </Button>
          <Button
            className={`${classes.button} ${classes.buttonDelete}`}
            onClick={deleteChosenPic}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </CommonModal>
  )
}

export default DeleteModal

const useStyles = makeStyles()(() => ({
  title: {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 24,
    lineHeight: '83%',
    textAlign: 'center',
    color: '#f46b5d',
  },
  deleteWrapper: {
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 25,
    justifyContent: 'space- around',
    alignItems: 'self - start',
  },
  button: {
    border: '2px solid #f46b5d',
    borderRadius: 10,
    padding: '16px 47px',
    width: 142,
    height: 50,
    textTransform: 'none',
  },
  buttonDelete: {
    color: '#fff',
    background: '#fb8f67',
    border: 'none',
    '&:hover': {
      backgroundColor: '#F1562A',
    },
  },
  buttonsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: 15,
  },
}))
