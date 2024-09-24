import React, { useState, useRef } from 'react'
import { Box, Typography, Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { CommonModal } from 'components/commonModal/CommonModal'

interface PhotoModalProps {
  setIsPhotoModalOpened: (isOpened: boolean) => void
  isOpened: boolean
  url: string
}

const PhotoModal: React.FC<PhotoModalProps> = ({
  setIsPhotoModalOpened,
  isOpened,
  url,
}) => {
  const { classes } = useStyles()

  const deleteModalClose = () => {
    setIsPhotoModalOpened(false)
    console.log('url', url)
  }

  const style = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 500,
  }

  return (
    <CommonModal
      isOpened={isOpened}
      onClose={deleteModalClose}
      modalTitle={'modal-modal-title'}
      modalDescription={'modal-modal-description'}
      height={870}
    >
      <Box className={classes.photoWrapper} style={style}></Box>
    </CommonModal>
  )
}

export default PhotoModal

const useStyles = makeStyles()(() => ({
  photoWrapper: {
    width: '100%',
    height: '100%',
  },
}))
