export interface UserPhoto {
  src: string
}

interface LifeStyle {
  [key: string]: string | string[]
  // smoking?: string
  // education?: string
  // children?: string
  // interests?: string[]
  // pets?: string[]
  // language?: string[]
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
  lifeStyle?: LifeStyle
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
  lifeStyle: {},
}

export interface UserChatProfile {
  id: string
  avatar: string
  firstName: string
  lastName: string
  age: string
}
