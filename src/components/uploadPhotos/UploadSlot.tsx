import React, { useState, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import UserPicsType from './UploadPhotos'

interface UserPicsType {
  id: string
  url: string | null
}

interface SlotType {
  id: string
  bgPic: string | null
  userPics: UserPicsType[]
  setUserPics: (newPics: UserPicsType[]) => void
}

const UploadSlot: React.FC<SlotType> = ({
  id,
  bgPic,
  setUserPics,
  userPics,
}) => {
  const { classes } = useStyles()

  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] as File | undefined

    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)

      reader.onloadend = () => {
        const base64data = reader.result
        const newPic = {
          id: id,
          url: base64data as string,
        }

        const newUserPicsStorage = userPics.map((elem: UserPicsType) =>
          elem.id === id ? newPic : elem
        )
        localStorage.setItem(
          'userPicsStorage',
          JSON.stringify(newUserPicsStorage)
        )

        setUserPics(newUserPicsStorage)
      }
    } else {
      console.log('Файл не выбран')
    }
  }

  const displayModalPic = () => {
    console.log('показать фото крупно как модалка')
  }

  const initiateInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click() // инициируем клик по input при клике на контейнер
    }
  }

  const handleDeletePic = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    console.log('delete clicked!')
    //modal - are you sure you want to delete?  yes/no
    console.log('state', userPics)
    const updatedPicArray: UserPicsType[] = userPics.map((pic) => {
      if (pic.id === id) {
        return { ...pic, url: null }
      } else return pic
    })
    setUserPics(updatedPicArray)
    localStorage.setItem('userPicsStorage', JSON.stringify(updatedPicArray))
  }

  return (
    <Box
      className={classes.slot}
      style={{
        backgroundImage: `url(${bgPic})`,
      }}
      onClick={() => {
        console.log('bgPic in click', bgPic)
        bgPic ? displayModalPic() : initiateInputClick()
      }}
    >
      {!bgPic && (
        <Box className={classes.innerBox}>
          <img src={'/img/add-icon.svg'} alt="add photo" />
          <Typography className={classes.text}>Upload</Typography>
        </Box>
      )}
      {bgPic && (
        <img
          src={'/img/add-icon.svg'}
          alt="add photo"
          className={classes.closeIcon}
          onClick={handleDeletePic}
        />
      )}
      <input
        className={classes.hiddenInput}
        type="file"
        // accept="image/*"
        accept=".png, .jpg, .jpeg"
        ref={fileInputRef}
        onChange={handleChange}
      />
    </Box>
  )
}

export default UploadSlot

const useStyles = makeStyles()(() => ({
  slot: {
    borderRadius: 10,
    padding: '47px 29px',
    width: 103,
    height: 140,
    backgroundColor: '#fff1ec',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#ffe5d1',
      cursor: 'pointer',
    },
  },
  innerBox: {
    width: 44,
    height: 45,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontWeight: 700,
    fontSize: 12,
    lineHeight: '167%',
    color: '#f46b5d',
    userSelect: 'none',
  },
  hiddenInput: {
    display: 'none',
  },
  closeIcon: {
    position: 'absolute',
    bottom: '-8px',
    right: '-8px',
    transform: 'rotate(45deg)',
  },
}))
