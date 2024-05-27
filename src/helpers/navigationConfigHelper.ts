import { NavigationConfig } from '../common/types/navigationTypes'
import IconChat from '../common/svg/IconChat'
import iconLightning from '../common/svg/IconLightning'
import iconII from '../common/svg/IconII'
import IconProfile from '../common/svg/IconProfile'
import IconNearMe from '../common/svg/IconNearMe'

export const generateNavigationConfig = (): NavigationConfig[] => {
  // can be optimized by using only one config, common for footer and header (needed: changes in canvas for icons, making the images of one size, hiding user's icon on desktop - by ?class )

  return [
    {
      value: 'nearme',
      Icon: IconNearMe,
      linkTo: '/user/near-me',
      size: { xs: { width: 18, height: 22 }, lg: { width: 30, height: 37 } },
    },
    {
      value: 'wholikedyou',
      Icon: iconLightning,
      linkTo: '/user/who-liked-you',
      size: { xs: { width: 18, height: 24 }, lg: { width: 29, height: 40 } },
    },
    {
      value: 'friends',
      Icon: iconII,
      linkTo: '/user/messages-and-friends',
      size: { xs: { width: 15, height: 32 }, lg: { width: 25, height: 50 } },
    },
    {
      value: 'chat',
      Icon: IconChat,
      linkTo: 'messages-and-friends',
      size: { xs: { width: 18, height: 18 }, lg: { width: 29, height: 29 } },
    },
    {
      value: 'profile',
      Icon: IconProfile,
      linkTo: '/user/messages-and-friends',
      size: { xs: { width: 24, height: 24 }, lg: { width: 24, height: 24 } },
    },
  ]
}
