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
  name: string
  age: string
  photo: UserPhoto[]
  city: string
  likedUsers: string[]
  reasons: string[]
  lifeStyle?: LifeStyle
}

export const emptyProfile: UserProfileData = {
  id: '-1',
  name: '',
  age: '',
  photo: [],
  city: '',
  likedUsers: [],
  reasons: [],
  lifeStyle: {},
}

export interface UserChatProfile {
  id: string
  avatar: string
  name: string
  age: string
}
