import { Box } from '@mui/material'
import Logo from 'components/logo/Logo'
import { commonStyles } from 'styles/commonStyles'
import ProfileCarousel from 'components/firstProfile/ProfileCarousel'

const FirstProfile = () => {
  const commonClasses = commonStyles().classes

  return (
    <Box className={commonClasses.mainBox}>
      <Logo />
      <ProfileCarousel />
    </Box>
  )
}

export default FirstProfile
