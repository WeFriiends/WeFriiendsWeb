import { Box, Typography } from '@mui/material'
import NameInput from 'components/firstProfile/NameInput'
import Logo from 'components/logo/Logo'
import { makeStyles } from 'tss-react/mui'
import { commonStyles } from 'styles/commonStyles'
import theme from 'styles/createTheme'
import ProfileCarousel from 'components/firstProfile/ProfileCarousel'
import useBearerToken from 'hooks/useBearToken'

const FirstProfile = () => {
  const commonClasses = commonStyles().classes

  return (
    <Box className={commonClasses.mainBox}>
      <Logo />
      <Typography variant="h1" className={commonClasses.title} pt={10}>
        Let&apos;s get started!
      </Typography>
      <ProfileCarousel />
    </Box>
  )
}

const useStyles = makeStyles()(() => {
  return {
    profileText: {
      fontSize: 18,
      lineHeight: '27px',
      color: theme.palette.text.primary,
      paddingBottom: '50px',
    },
    profileInput: {
      backgroundColor: '#FFF1EC',
      borderRadius: 10,
      outline: 'none',
      '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
  }
})

export default FirstProfile
