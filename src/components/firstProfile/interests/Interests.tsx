import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Typography,
  IconButton,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { makeStyles } from 'tss-react/mui'
import { interestsData as dataInterests } from './interestsData'
import theme from 'styles/createTheme'
import Logo from 'components/logo/Logo'
import LanguageSelector from './languageSelector'

type ArrowRightBtnProps = {
  onToggle: (isOpen: boolean) => void
  isOpen: boolean | undefined
}

type ChipContainerProps = {
  data: { title: string; item: string[] }
  multiple?: boolean | undefined
  onSelectedItems: (selectedItems: string[]) => void
  selectedItems: string[] | undefined
}

const Interests = () => {
  const { classes } = useStyles()
  const [aboutMe, setAboutMe] = useState('')
  const [openTabPointer, setIsOpenTabPointer] = useState('')
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  const handleSelectedLanguages = (languages: string[]) => {
    setSelectedLanguages(languages)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAboutMe(event.target.value)
  }

  const [interestsData, setInterestsData] = useState(dataInterests)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setAboutMe('')
  }

  return (
    <Box className={classes.mainBox}>
      <Logo />
      <Link to="/" className={classes.link}>
        <Box className={classes.arrowBtn}>
          <ArrowBackBtn />
        </Box>
      </Link>
      <Box className={classes.titleContainer}>
        <Typography className={classes.title}>Lifestyle</Typography>
      </Box>
      <Box className={classes.itemContainer}>
        {interestsData.map((data, index) => (
          <Box key={index} className={classes.item}>
            <Typography className={classes.itemTitle}>{data.title}</Typography>
            <IconButton className={classes.arrowRightBtn}>
              <ArrowRightBtn
                isOpen={data.isOpen}
                onToggle={(isOpen) => {
                  setIsOpenTabPointer(isOpen ? data.title : '')
                  setInterestsData((prev) => {
                    const newInterestsData = [...prev]
                    newInterestsData[index].isOpen = isOpen
                    return newInterestsData
                  })
                }}
              />
            </IconButton>
            {data.isOpen && (
              <ChipContainerMulti
                onSelectedItems={(selectedItems) => {
                  setInterestsData((prev) => {
                    const newInterestsData = prev
                    newInterestsData[index].selectedItems = selectedItems
                    return newInterestsData
                  })
                }}
                data={data}
                multiple={data.multiple}
                selectedItems={data.selectedItems || []}
              />
            )}
          </Box>
        ))}
        <Box className={classes.item}>
          <Typography className={classes.itemTitle}>Language</Typography>
          <IconButton
            className={classes.arrowRightBtn}
            onClick={() => setIsLanguageOpen(true)}
          >
            <ArrowForwardIosIcon className={classes.arrowRightSvg} />
          </IconButton>
          <Box className={classes.chipContainer}>
            {selectedLanguages.map((language, index) => (
              <Chip
                key={index}
                label={language}
                style={{ margin: '4px', backgroundColor: '#FECAB7' }}
              />
            ))}
          </Box>
          <Dialog
            open={isLanguageOpen}
            onClose={() => setIsLanguageOpen(false)}
            fullWidth
          >
            <DialogTitle className={classes.dialogTitle}>
              Languages you speak
            </DialogTitle>
            <DialogActions>
              <Button onClick={() => setIsLanguageOpen(false)} color="primary">
                Close
              </Button>
            </DialogActions>
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
      <Box>
        <form className={classes.form} onSubmit={onSubmit}>
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
          <Button type="submit" className={classes.submitBtn}>
            Next
          </Button>
        </form>
      </Box>
    </Box>
  )
}

export default Interests

const ChipContainerMulti: React.FC<ChipContainerProps> = ({
  data,
  multiple,
  onSelectedItems,
  selectedItems,
}) => {
  const { classes } = useStyles()

  // Инициализация состояния с помощью useState напрямую
  const [_selectedItems, setSelectedItems] = useState<string[]>(
    selectedItems || []
  )

  const checkItems = (item: string) => {
    const newSelectedItems: string[] = []
    if (_selectedItems.includes(item)) {
      newSelectedItems.push(..._selectedItems.filter((i) => i !== item))
      //setSelectedItems(_selectedItems.filter((i) => i !== item))
    } else {
      //setSelectedItems((prev) => [...prev, item])
      const arr = multiple ? _selectedItems : []
      newSelectedItems.push(...arr, item)
    }
    setSelectedItems(newSelectedItems)
    console.log(newSelectedItems)
    onSelectedItems(newSelectedItems)
  }

  return (
    <Box className={classes.chipContainer}>
      {data.item.map((item, index) => (
        <Chip
          key={index}
          label={item}
          style={{
            backgroundColor: _selectedItems.includes(item)
              ? '#FECAB7'
              : '#EEEEEE',
          }}
          onClick={() => checkItems(item)}
        />
      ))}
    </Box>
  )
}

const ArrowBackBtn = () => {
  const { classes } = useStyles()
  return <ArrowBackIcon className={classes.arrowSvg} />
}

const ArrowRightBtn: React.FC<ArrowRightBtnProps> = ({ onToggle, isOpen }) => {
  const { classes } = useStyles()
  //const [isArrowRight, setIsArrowRight] = useState<boolean>(true)
  const toggle = () => {
    //setIsArrowRight(!isArrowRight)
    onToggle(!isOpen)
  }

  return (
    <ArrowForwardIosIcon
      onClick={toggle}
      className={!isOpen ? classes.arrowRightSvg : classes.arrowDownSvg}
    />
  )
}

const useStyles = makeStyles()(() => {
  return {
    mainBox: {
      margin: '200px auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '540px',
      width: '540px',
      justifyContent: 'center',
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
    arrowRightSvg: {
      position: 'absolute',
      width: '14px',
      height: '14px',
      color: theme.palette.text.primary,
      cursor: 'pointer',
    },
    arrowDownSvg: {
      position: 'absolute',
      width: '14px',
      height: '14px',
      color: theme.palette.text.primary,
      cursor: 'pointer',
      transform: 'rotate(90deg)',
      transition: 'all .3s ease',
    },
    link: {
      textDecoration: 'none',
      color: 'inherit',
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
      maxWidth: '540px',
      width: '540px',
      height: '42px',
      borderRadius: '20px',
      backgroundColor: '#FEDED2',
      marginBottom: '20px',
    },
    itemContainer: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '540px',
      width: '540px',
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
    chipContainer: {
      margin: '10px 0 15px',
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
    },
    dialogTitle: {
      fontFamily: 'Inter',
      fontWeight: 600,
      fontSize: '18px',
      color: theme.palette.text.primary,
      maxWidth: '350px',
      height: '42px',
      marginBottom: '20px',
      backgroundColor: '#FEDED2',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    form: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      maxWidth: '540px',
      marginTop: '16px',
    },
    textarea: {
      disableUnderLine: true,
      maxWidth: '540px',
      width: '540px',
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
    submitBtn: {
      maxWidth: '540px',
      width: '540px',
      height: '60px',
      borderRadius: '10px',
      backgroundColor: '#FB8F67',
      color: '#FFFFFF',
      fontSize: '18px',
      fontWeight: 600,
      outline: 'none',
      border: 'none',
      fontFamily: 'Inter',
      textAlign: 'center',
      marginTop: '32px',
    },
  }
})

/* <Box className={classes.itemContainer}>
          <Box className={classes.item}>
            <Typography className={classes.itemTitle}>Language</Typography>
            <IconButton className={classes.arrowRightBtn}>
              <ArrowRightBtn
                isOpen={isLanguageOpen}
                onToggle={() => setIsLanguageOpen(!isLanguageOpen)}
              />
            </IconButton>
            {isLanguageOpen && (
              <LanguageSelector
                onSelectedLanguages={handleSelectedLanguages}
                selectedLanguages={selectedLanguages}
              />
            )}
          </Box>
        </Box> */
