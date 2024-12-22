import { useState } from 'react'
import { Box, Typography, FormHelperText } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import UploadSlot from './UploadSlot'
import { PhotoModal } from './PhotoModal'
import DeletePhoto from './DeletePhoto'
import createTheme from 'styles/createTheme'

interface UserPicsType {
  id: string
  url: string | null
}

const UploadPhotos = () => {
  const { classes } = useStyles()
  const [isDeleteModalOpened, setIsDeleteModalOpened] = useState<boolean>(false)
  const [isPhotoModalOpened, setIsPhotoModalOpened] = useState<boolean>(false)
  const [chosenId, setChosenId] = useState<string>('')
  const [chosenUrl, setChosenUrl] = useState<string>('')
  const [isPicHuge, setIsPicHuge] = useState<boolean>(false)

  const initialPics: UserPicsType[] = Array.from({ length: 6 }, (_, index) => ({
    id: `userPic-${index}`,
    url: null,
  }))

  const [userPics, setUserPics] = useState<UserPicsType[]>(initialPics)

  const shiftPics = (array: UserPicsType[]) => {
    const picturesWithUrl = array.filter((pic) => pic.url !== null)
    const picturesWithoutUrl = array.filter((pic) => pic.url === null)
    setUserPics([...picturesWithUrl, ...picturesWithoutUrl])
  }

  const deleteChosenPic = () => {
    const updatedPicArray: UserPicsType[] = userPics.map((pic) => {
      if (pic.id === chosenId) {
        return { ...pic, url: null }
      } else return pic
    })
    setUserPics(updatedPicArray)
    setIsDeleteModalOpened(false)
    shiftPics(updatedPicArray)
  }

  const hasAnyPics = (array: UserPicsType[]): boolean => {
    return array.some((pic) => pic.url !== null && pic.url.trim() !== '')
  }

  return (
    <Box className={classes.mainBox}>
      {!hasAnyPics(userPics) && (
        <Box className={classes.hintContainer}>
          <Typography className={classes.title}>
            Upload at least 1 photo
          </Typography>
          <Typography className={classes.hint}>
            Your first uploaded photo will be used as your avatar
          </Typography>
        </Box>
      )}
      <FormHelperText
        className={isPicHuge ? classes.errorMsg : classes.hintMsg}
      >
        {`Please note: you can't upload photo more than 5 MB`}
      </FormHelperText>
      <PhotoModal
        setIsPhotoModalOpened={setIsPhotoModalOpened}
        isOpened={isPhotoModalOpened}
        url={chosenUrl}
      />
      <DeletePhoto
        isOpened={isDeleteModalOpened}
        setIsDeleteModalOpened={setIsDeleteModalOpened}
        deleteChosenPic={deleteChosenPic}
        setChosenId={setChosenId}
      />
      <Box className={classes.picContainer}>
        {userPics.map((pic) => (
          <UploadSlot
            key={pic.id}
            id={pic.id}
            bgPic={pic.url}
            userPics={userPics}
            setIsDeleteModalOpened={setIsDeleteModalOpened}
            setChosenId={setChosenId}
            setIsPhotoModalOpened={setIsPhotoModalOpened}
            setChosenUrl={setChosenUrl}
            shiftPics={shiftPics}
            setIsPicHuge={setIsPicHuge}
          />
        ))}
      </Box>
    </Box>
  )
}

export default UploadPhotos

const useStyles = makeStyles()(() => ({
  mainBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 50,
  },
  picContainer: {
    width: '95vw',
    maxWidth: 349,
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 20,
    margin: 20,
  },
  hintContainer: {
    height: 43,
  },
  title: {
    fontWeight: 600,
    fontSize: 18,
    lineHeight: '132%',
    textAlign: 'center',
    color: createTheme.palette.text.primary,
  },
  hint: {
    textAlign: 'center',
    color: createTheme.palette.text.primary,
    fontWeight: 400,
    fontSize: 13,
  },
  hintMsg: {
    fontWeight: 400,
    fontSize: 13,
    lineHeight: '150%',
  },
  errorMsg: {
    fontWeight: 400,
    fontSize: 13,
    lineHeight: '150%',
    textAlign: 'center',
    color: createTheme.palette.primary.dark,
  },
}))
