import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Header from 'components/header/Header'
import TabsMessagesFriends from 'components/tabsMessagesFriends/TabsMessagesFriends'
import UserProfile from 'components/userProfile/UserProfile'
import UserProfileButton from 'components/userProfile/UserProfileButton'
import useFriendsList from 'hooks/useFriendsList'
import { UserProfileData } from 'types/UserProfileData'

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
  const [isFriend, setIsFriend] = useState(false)
  const [friendsData, setFriendsData] = useState<UserProfileData>(emptyProfile)
  const [currentPotentialFriend, setCurrentPotentialFriend] =
    useState<UserProfileData>(emptyProfile)
  const { data: potentialFriends } = useFriendsList('../data/userProfile.json')

  useEffect(() => {
    if (potentialFriends && potentialFriends.length > 0) {
      setFriendsData(potentialFriends[0])
      setCurrentPotentialFriend(potentialFriends[0])
    }
  }, [potentialFriends])

  const selectFriend = (user: UserProfileData) => {
    setFriendsData(user)
    setIsFriend(true)
  }

  const onSkip = () => {
    if (potentialFriends) {
      const currentIndex = potentialFriends.findIndex(
        (element) => element.id === currentPotentialFriend.id
      )
      const lastIndex = potentialFriends.length - 1
      if (currentIndex < lastIndex) {
        setFriendsData(potentialFriends[currentIndex + 1])
        setCurrentPotentialFriend(potentialFriends[currentIndex + 1])
      }
    }
  }

  return (
    <Box sx={{ width: '1043px', margin: '0 auto' }}>
      <Header />
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <TabsMessagesFriends
          onClick={selectFriend}
          selectedFriend={friendsData}
        />
        <Box sx={{ paddingLeft: '53px', paddingTop: '36px' }}>
          <UserProfile user={friendsData} />
          <UserProfileButton isFriend={isFriend} skip={onSkip} />
        </Box>
      </Box>
    </Box>
  )
}

export default MessagesAndFriends
