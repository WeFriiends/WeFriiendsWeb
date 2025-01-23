import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createProfile, getProfile, updateProfile, deleteProfile } from './api'

// Типы для профиля
interface Profile {
  name: string
  dateOfBirth: string
  location: {
    lat: number
    lng: number
    country?: string
    city?: string
    street?: string
    houseNumber?: string
  }
  photos?: string[]
  gender: string
  reasons: string[]
}

// Типы состояния
interface ProfileState {
  loading: boolean
  success: boolean
  error: boolean
  data: Profile | null
  errorData: any
}

// Типы действий
interface ProfileActions {
  createProfile: (profileData: Profile, token: string | null) => Promise<void>
  getProfile: (token: string | null) => Promise<void>
  updateProfile: (
    profileData: Partial<Profile>,
    token: string | null
  ) => Promise<void>
  deleteProfile: (token: string | null) => Promise<void>
}

// Типизация для стора
type ProfileStore = ProfileState & ProfileActions

// Начальное состояние
const initialState: ProfileState = {
  loading: true,
  success: false,
  error: false,
  data: null,
  errorData: null,
}

// Zustand store
export const useProfileStore = create<ProfileStore>()(
  devtools((set) => ({
    ...initialState,

    createProfile: async (profileData, token) => {
      set({ ...initialState })
      try {
        const data = await createProfile(profileData, token)
        set({ loading: false, success: true, data })
      } catch (error) {
        set({ loading: false, error: true, errorData: error })
      }
    },

    getProfile: async (token) => {
      set({ ...initialState })
      try {
        const data = await getProfile(token)
        set({ loading: false, success: true, data })
      } catch (error) {
        set({ loading: false, error: true, errorData: error })
      }
    },

    updateProfile: async (profileData, token) => {
      set({ ...initialState })
      try {
        await updateProfile(profileData, token)
        console.log('Profile updated, fetching new data...')
        const data = await getProfile(token) // Force getProfile on updateProfile
        set({ loading: false, success: true, data })
      } catch (error) {
        console.error('Error updating profile:', error)
        set({ loading: false, error: true, errorData: error })
      }
    },

    deleteProfile: async (token) => {
      set({ ...initialState })
      try {
        const data = await deleteProfile(token)
        set({ loading: false, success: true, data })
      } catch (error) {
        set({ loading: false, error: true, errorData: error })
      }
    },
  }))
)
