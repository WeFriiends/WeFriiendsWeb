import { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Link as MuiLink,
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import CloseIcon from '@mui/icons-material/Close'
import { interestsData as dataInterests, InterestData } from './interestsData'
import theme from 'styles/createTheme'
import LanguageSelector from './languageSelector'
import InterestsItem from './InterestsItem'
import { ArrowRightBtn } from './ArrowRightBtn'
import { ChipWithClose } from './ChipWithClose'

const Interests = () => {
  const { classes } = useStyles()
  const [aboutMe, setAboutMe] = useState(localStorage.getItem('aboutMe') || '')
  const [, setIsOpenTabPointer] = useState('')
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(
    JSON.parse(localStorage.getItem('selectedLanguages') || '[]')
  )
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [isLanguagePopUpOpen, setIsLanguagePopUpOpen] = useState(false)
  const [interestsData, setInterestsData] =
    useState<InterestData[]>(dataInterests)

  useEffect(() => {
    const savedInterestsData = localStorage.getItem('interestsData')
    if (savedInterestsData) {
      try {
        const selectedInterests = JSON.parse(savedInterestsData)
        const aggregatedInterests = dataInterests.map((item, index) => {
          return {
            ...item,
            selectedItems: selectedInterests[index],
          }
        })
        setInterestsData(aggregatedInterests)
      } catch (error) {
        console.error('Error parsing JSON:', error)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('selectedLanguages', JSON.stringify(selectedLanguages))
  }, [selectedLanguages])

  const handleSelectedLanguages = (languages: string[]) => {
    setSelectedLanguages(languages)
  }

  const saveDataToLocalStorageInterests = () => {
    const selectedInterests = interestsData.map((item) => item.selectedItems)
    localStorage.setItem('interestsData', JSON.stringify(selectedInterests))
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAboutMe(event.target.value)
    localStorage.setItem('aboutMe', event.target.value)
  }

  return (
    <Box className={classes.mainBox}>
      <Box className={classes.titleContainer}>
        <Typography className={classes.title}>Lifestyle</Typography>
      </Box>
      <Box className={classes.itemContainer}>
        {interestsData.map((data, index) => (
          <InterestsItem
            key={index + data.title}
            data={data}
            index={index}
            onToggle={(isOpen) => {
              setIsOpenTabPointer(isOpen ? data.title : '')
              setInterestsData((prev) => {
                const newInterestsData = [...prev]
                newInterestsData[index].isOpen = isOpen
                saveDataToLocalStorageInterests()
                return newInterestsData
              })
            }}
            onSelectedItems={(selectedItems) => {
              setInterestsData((prev) => {
                const newInterestsData = prev
                newInterestsData[index].selectedItems = selectedItems
                saveDataToLocalStorageInterests()
                return newInterestsData
              })
            }}
          />
        ))}
        <Box className={classes.item}>
          <Typography className={classes.itemTitle}>Language</Typography>
          <IconButton
            className={classes.arrowRightBtn}
            disableFocusRipple={true}
            disableRipple={true}
          >
            <ArrowRightBtn
              isOpen={isLanguageOpen}
              onToggle={(isOpen) => {
                setIsLanguageOpen(isOpen)
                if (selectedLanguages.length === 0 && isOpen) {
                  setIsLanguagePopUpOpen(true)
                }
              }}
            />
          </IconButton>
          {isLanguageOpen && (
            <Box className={classes.chipContainer}>
              {selectedLanguages.map((language, index) => (
                <ChipWithClose
                  onClose={() => {
                    setSelectedLanguages(
                      selectedLanguages.filter((l) => l !== language)
                    )
                  }}
                  key={index}
                  label={language}
                />
              ))}
              <MuiLink
                className={classes.muiLink}
                component="button"
                variant="body2"
                sx={{ marginLeft: 'auto' }}
                onClick={() => setIsLanguagePopUpOpen(true)}
              >
                add more
              </MuiLink>
            </Box>
          )}
          <Dialog
            open={isLanguagePopUpOpen}
            onClose={() => setIsLanguageOpen(false)}
            className={classes.dialog}
          >
            <DialogActions>
              <Button
                onClick={() => setIsLanguagePopUpOpen(false)}
                sx={{
                  position: 'absolute',
                  top: '16px',
                  right: '1px',
                }}
              >
                <CloseIcon sx={{ color: theme.palette.text.primary }} />
              </Button>
            </DialogActions>
            <DialogTitle className={classes.dialogTitle}>
              Languages you speak
            </DialogTitle>
            <DialogContent>
              <LanguageSelector
                onSelectedLanguages={handleSelectedLanguages}
                selectedLanguages={selectedLanguages}
              />
            </DialogContent>
          </Dialog>
        </Box>
      </Box>
      <Box className={classes.titleContainer}>
        <Typography className={classes.title}>About me</Typography>
      </Box>
      <Box className={classes.aboutMeContainer}>
        <TextField
          id="aboutMe"
          type="text"
          placeholder="Add about me..."
          value={aboutMe}
          onChange={onChange}
          multiline
          rows={6}
          InputProps={{
            classes: {
              root: classes.textareaRoot,
            },
            inputProps: {
              maxLength: 1000,
            },
          }}
          variant="outlined"
        />
      </Box>
    </Box>
  )
}

export default Interests

const useStyles = makeStyles()(() => {
  return {
    mainBox: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '540px',
      width: '540px',
      justifyContent: 'center',
      '@media (max-width: 600px)': {
        maxWidth: '280px',
        width: '280px',
      },
    },
    chipContainer: {
      margin: '40px 0 15px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
    arrowBtn: {
      position: 'relative',
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      backgroundColor: '#FEDED2',
      display: 'flex',
      justifyContent: 'center',
      margin: '50px 0',
    },
    arrowSvg: {
      position: 'absolute',
      width: '24px',
      height: '24px',
      color: theme.palette.text.primary,
      cursor: 'pointer',
      top: '25%',
    },
    link: {
      textDecoration: 'none',
      color: 'inherit',
    },
    muiLink: {
      color: theme.palette.secondary.main,
      fontSize: '14px',
      fontWeight: 600,
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
      textDecorationColor: theme.palette.secondary.main,
      textUnderlineOffset: '4px',
      alignItems: 'right',
    },
    title: {
      position: 'absolute',
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: '18px',
      alignItems: 'center',
      top: '20%',
      color: theme.palette.text.primary,
    },
    titleContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      maxWidth: '100%',
      width: '100%',
      height: '42px',
      borderRadius: '20px',
      backgroundColor: '#FEDED2',
      marginBottom: '20px',
    },
    itemContainer: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '100%',
      width: '100%',
      margin: '20px 0 40px',
    },
    item: {
      position: 'relative',
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: '16px',
      alignItems: 'center',
      color: theme.palette.text.primary,
      borderBottom: '1px solid #EEEEEE',
      marginBottom: '30px',
    },
    itemTitle: {
      marginBottom: '20px',
    },
    arrowRightBtn: {
      position: 'absolute',
      right: '0',
      top: '0',
      width: '24px',
      height: '24px',
    },
    dialog: {
      '& .MuiDialog-paper': {
        width: '430px',
        height: '396px',
        borderRadius: '20px',
        padding: '26px 40px 36px',
        position: 'relative',
        '@media (max-width: 600px)': {
          maxWidth: '280px',
          width: '280px',
          padding: '16px 20px',
        },
      },
    },
    dialogTitle: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: '18px',
      color: theme.palette.text.primary,
      maxWidth: '100%',
      height: '42px',
      margin: '20px 0 60px',
      backgroundColor: '#FEDED2',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '@media (max-width: 600px)': {
        fontSize: '14px',
        margin: '40px 0',
      },
    },
    aboutMeContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      maxWidth: '100%',
      width: '100%',
      marginTop: '16px',
    },
    textarea: {
      disableUnderLine: true,
      maxWidth: 'auto',
      width: 'auto',
      height: '163px',
      padding: '10px 18.5px',
      borderRadius: '20px',
      border: '1px solid #C5C5C5',
      fontFamily: 'Inter',
      fontSize: '14px',
      color: '#C5C5C5',
      fontWeight: 400,
      outline: 'none',
    },
    textareaRoot: {
      border: 'none',
      borderRadius: '20px',
      outline: 'none',
      backgroundColor: 'transparent',
    },
    textareaPlaceholder: {
      fontFamily: 'Inter',
      fontSize: '14px',
      color: theme.palette.text.primary,
      fontWeight: 400,
    },
    textFieldset: {
      borderColor: '#C5C5C5',
      borderRadius: '20px',
    },
    labelRoot: {
      fontFamily: 'Inter',
      fontSize: '14px',
      color: '#C5C5C5',
      fontWeight: 400,
      borderColor: '#C5C5C5',
    },
    labelFocused: {
      fontFamily: 'Inter',
      fontSize: '14px',
      color: 'C5C5C5',
      fontWeight: 400,
      borderColor: '#C5C5C5',
      border: '1px solid #C5C5C5',
      '&:focus': {
        color: '#C5C5C5',
        border: '1px solid #C5C5C5',
        borderColor: '#C5C5C5',
      },
    },
  }
})
