import React, { useEffect, useState } from 'react'
import { Box, Modal } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

type PhotoModalProps = {
  isOpened: boolean
  setIsPhotoModalOpened: (isOpened: boolean) => void
  url: string
}

export const PhotoModal = ({
  isOpened,
  url,
  setIsPhotoModalOpened,
}: PhotoModalProps) => {
  const { classes } = useStyles()

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  const style = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: dimensions.width,
    height: dimensions.height,
  }

  useEffect(() => {
    const img = new Image()
    img.src = url

    img.onload = () => {
      setDimensions({ width: img.width, height: img.height })
    }
  }, [url])

  return (
    <Modal className={classes.modal} open={isOpened}>
      <Box style={style} className={classes.box}>
        <img
          src={'/img/x-square.png'}
          alt="close photo"
          className={classes.closeIcon}
          onClick={() => setIsPhotoModalOpened(false)}
        />
      </Box>
    </Modal>
  )
}

const useStyles = makeStyles()(() => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& :focus': {
      outline: 'none',
    },
  },
  box: {
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: '-21px',
    right: '-21px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}))
