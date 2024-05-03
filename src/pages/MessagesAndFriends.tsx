import { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import Header from 'components/header/Header'
import TabsMessagesFriends from 'components/tabsMessagesFriends/TabsMessagesFriends'
import UserProfile from 'components/userProfile/UserProfile'
import UserProfileButton from 'components/userProfile/UserProfileButton'
import { usePotentialFriendsList } from 'hooks/useFriendsList'
import { UserProfileData } from 'types/UserProfileData'
import { addNewFriend, deletePotentialFriend } from 'actions/friendsServices'
import Match from 'components/findMatch/Match'
import { useNavigate } from 'react-router-dom'

const MessagesAndFriends = () => {
  const emptyProfile: UserProfileData = {
    id: '-1',
    firstName: '',
    lastName: '',
    age: '',
    photo: [],
    city: '',
    aboutMe: '',
    education: '',
    profession: '',
  }
  const { classes } = useStyles()
  const [noPotentialFriends, setNoPotentialFriends] = useState(true)
  const [isFriend, setIsFriend] = useState(false)
  const [isMatchModalOpen, setIsMatchModalOpen] = useState(false)
  const [friendsData, setFriendsData] = useState<UserProfileData>(emptyProfile)
  const [currentPotentialFriend, setCurrentPotentialFriend] =
    useState<UserProfileData>(emptyProfile)
  const navigate = useNavigate()

  const { data: potentialFriends } = usePotentialFriendsList()

  useEffect(() => {
    if (potentialFriends && potentialFriends.length > 0) {
      setNoPotentialFriends(false)
      setFriendsData(potentialFriends[0])
      setCurrentPotentialFriend(potentialFriends[0])
    }
  }, [potentialFriends])

  const selectFriend = (user: UserProfileData) => {
    setFriendsData(user)
    setIsFriend(true)
  }

  const goToNextPotentialFriend = (currentUserProfile: UserProfileData) => {
    if (potentialFriends) {
      const currentIndex = potentialFriends.findIndex(
        (element: UserProfileData) => element.id === currentUserProfile.id
      )
      const lastIndex = potentialFriends.length - 1
      if (currentIndex < lastIndex) {
        setFriendsData(potentialFriends[currentIndex + 1])
        setCurrentPotentialFriend(potentialFriends[currentIndex + 1])
        deletePotentialFriend(currentUserProfile.id)
      } else {
        setNoPotentialFriends(true)
        deletePotentialFriend(currentUserProfile.id)
      }
    }
  }

  const onSkip = () => {
    goToNextPotentialFriend(currentPotentialFriend)
  }

  const onBeFriend = () => {
    addNewFriend(currentPotentialFriend)
    goToNextPotentialFriend(currentPotentialFriend)
    setIsMatchModalOpen(true)
  }

  const handleMatchClose = () => {
    setIsMatchModalOpen(false)
  }

  const startChat = () => {
    navigate('/user/messages')
  }

  return (
    <Box sx={{ width: '1024px', margin: '0 auto', padding: '0 30px' }}>
      <Header />
      <Box sx={{ display: 'grid', gridTemplateColumns: '5.5fr 6.5fr' }}>
        <TabsMessagesFriends
          onClick={selectFriend}
          selectedFriend={friendsData}
        />
        {noPotentialFriends && !isFriend ? (
          <Box className={classes.mainBlock}>
            <Typography className={classes.messageStyle}>
              You’re running out of people.
              <br /> Please, change search settings
            </Typography>
            <Button className={classes.whiteButton}>Go</Button>
          </Box>
        ) : (
          <Box sx={{ padding: '76px 17px 0 55px' }}>
            <UserProfile user={friendsData} />
            <UserProfileButton
              isFriend={isFriend}
              skip={onSkip}
              beFriend={onBeFriend}
              startChat={startChat}
            />
          </Box>
        )}
        {isMatchModalOpen && (
          <Match
            onClose={handleMatchClose}
            onChat={startChat}
            friendsAvatar={friendsData.photo[0].src}
          />
        )}
      </Box>
    </Box>
  )
}

export default MessagesAndFriends

const useStyles = makeStyles()({
  whiteButton: {
    backgroundColor: '#FFFFFF',
    border: '2px solid #F46B5D',
    color: '#F46B5D',
    borderRadius: 10,
    fontSize: 18,
    fontWeight: 600,
    lineHeight: '20px',
    width: 262.5,
    height: 55,
    textTransform: 'none',
  },
  mainBlock: {
    paddingTop: 150,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 45,
  },
  messageStyle: {
    fontSize: 24,
    textAlign: 'center',
    lineHeight: 1.2,
  },
})
