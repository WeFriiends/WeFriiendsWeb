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
}

export interface UserChatProfile {
  avatar: string
  firstName: string
  lastName: string
  age: string
}
