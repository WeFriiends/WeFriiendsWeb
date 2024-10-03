export interface UserPhoto {
  src: string
}

export interface UserProfileData {
  id: string
  firstName: string
  lastName: string
  age: string
  photo: UserPhoto[]
  city: string
  aboutMe: string
  education: string
  profession: string
  likedUsers: string[]
  reasons: string[]
}

export const emptyProfile: UserProfileData = {
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
  reasons: [],
}

export interface UserChatProfile {
  id: string
  avatar: string
  firstName: string
  lastName: string
  age: string
}
