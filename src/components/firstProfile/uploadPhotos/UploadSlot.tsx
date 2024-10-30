import React, { useRef } from 'react'
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
  setIsDeleteModalOpened(isOpened: boolean): void
  setChosenId: (chosenId: string) => void
  setIsPhotoModalOpened: (isPhotoModalOpened: boolean) => void
  setChosenUrl: (chosenUrl: string) => void
}

const UploadSlot: React.FC<SlotType> = ({
  id,
  bgPic,
  setUserPics,
  userPics,
  setIsDeleteModalOpened,
  setChosenId,
  setIsPhotoModalOpened,
  setChosenUrl,
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

        // Создаем новый объект Image
        const img = new Image()
        img.src = base64data as string

        // Ждем, пока изображение загрузится, и получаем его размеры
        img.onload = () => {
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
      }
    }
  }

  const displayModalPic = () => {
    setIsPhotoModalOpened(true)
    setChosenUrl(bgPic!)
  }

  const initiateInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleDeletePic = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setChosenId(id)
    setIsDeleteModalOpened(true)
  }

  return (
    <Box
      className={classes.slot}
      style={{
        backgroundImage: `url(${bgPic})`,
      }}
      onClick={() => {
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
    // color: createTheme.ROSE,
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
