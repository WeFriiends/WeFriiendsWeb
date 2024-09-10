import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import UserProfile from 'components/userProfile/UserProfile'
import UserProfileButton from 'components/userProfile/UserProfileButton'
import { usePotentialFriendsList } from 'hooks/useFriendsList'
import { UserProfileData } from 'types/UserProfileData'
import {
  addLike,
  addNewFriend,
  deletePotentialFriend,
} from 'actions/friendsServices'
import Match from 'components/findMatch/Match'
import Friends from 'components/tabsMessagesFriends/Friends'
import { useNavigate } from 'react-router-dom'
import NoMoreMatchesDialog from './NoMoreMatchesDialog'
import theme from '../styles/createTheme'

const FriendsPage = () => {
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
    likedUsers: [],
  }
  const { classes } = useStyles()
  const [noPotentialFriends, setNoPotentialFriends] = useState(true)
  const [isFriend, setIsFriend] = useState(false)
  const [isMatchModalOpen, setIsMatchModalOpen] = useState(false)
  const [friendsData, setFriendsData] = useState<UserProfileData>(emptyProfile)
  const [currentPotentialFriend, setCurrentPotentialFriend] =
    useState<UserProfileData>(emptyProfile)
  const [modalNewFriendAvatar, setModalNewFriendAvatar] = useState<string>('')
  const navigate = useNavigate()
  const accountId = '1'

  const { data: potentialFriends } = usePotentialFriendsList()

  useEffect(() => {
    if (!potentialFriends?.length) {
      return
    }
    setNoPotentialFriends(false)
    setFriendsData(potentialFriends[0])
    setCurrentPotentialFriend(potentialFriends[0])
  }, [potentialFriends])

  const selectFriend = (user: UserProfileData) => {
    setFriendsData(user)
    setIsFriend(true)
  }

  const goToNextPotentialFriend = (currentUserProfile: UserProfileData) => {
    if (!potentialFriends?.length) {
      return
    }
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

  const onSkip = () => {
    goToNextPotentialFriend(currentPotentialFriend)
  }

  const isLiked = (accountId: string, likedUsersArray: string[]): boolean => {
    return likedUsersArray.includes(accountId)
  }

  const onBeFriend = () => {
    if (isLiked(accountId, currentPotentialFriend.likedUsers)) {
      addNewFriend(currentPotentialFriend)
      setModalNewFriendAvatar(currentPotentialFriend.photo[0].src)
      setIsMatchModalOpen(true)
    } else {
      addLike(accountId, currentPotentialFriend.id)
    }
    goToNextPotentialFriend(currentPotentialFriend)
  }

  const handleMatchClose = () => {
    setIsMatchModalOpen(false)
  }

  const startChat = () => {
    navigate('/user/messages')
  }

  const NoMoreMatchesDialogRef = useRef<{
    handleOpenNoMoreMatchesDialog: () => void
  }>(null)
  const handleOpenNoMoreMatchesDialog = () => {
    NoMoreMatchesDialogRef.current?.handleOpenNoMoreMatchesDialog()
  }

  return (
    <>
      <Box className={classes.friendsPage}>
        <Friends onClick={selectFriend} selectedFriend={friendsData} />
        <Box>
          {noPotentialFriends && !isFriend ? (
            <Box className={classes.mainBlock}>
              <Typography className={classes.messageStyle}>
                You’re running out of people.
                <br /> Please, change search settings
              </Typography>
              <Button
                disableFocusRipple
                disableRipple
                disableElevation
                onClick={handleOpenNoMoreMatchesDialog}
                className={classes.whiteButton}
              >
                GO
              </Button>
            </Box>
          ) : (
            <Box sx={{ paddingLeft: '30px' }}>
              <UserProfile user={friendsData} />
              <UserProfileButton
                isFriend={isFriend}
                skip={onSkip}
                beFriend={onBeFriend}
                startChat={startChat}
              />
            </Box>
          )}
          <Match
            isMatchModalOpen={isMatchModalOpen}
            onClose={handleMatchClose}
            onChat={startChat}
            friendsAvatar={modalNewFriendAvatar}
          />
        </Box>
      </Box>
      <NoMoreMatchesDialog ref={NoMoreMatchesDialogRef} />
    </>
  )
}

export default FriendsPage

const useStyles = makeStyles()({
  whiteButton: {
    border: '2px solid ' + theme.palette.primary.light,
    color: theme.palette.primary.light,
    borderRadius: 10,
    fontSize: 18,
    transition: 'color .3s, background-color .3s',
    fontWeight: 600,
    width: 260,
    height: 60,
    lineHeight: '56px',
    boxSizing: 'border-box',
    '&:active, &:hover': {
      fontWeight: 600,
      background: theme.palette.primary.light,
      color: theme.palette.common.white,
    },
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
  friendsPage: {
    display: 'grid',
    gridTemplateColumns: '376px 575px',
    height: '71vh',
  },
})
