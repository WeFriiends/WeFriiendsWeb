import { useEffect } from 'react'

interface LocalStorageData {
  [key: string]: string
}

export const useLocalStorageEffect = (data: LocalStorageData): void => {
  useEffect(() => {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        localStorage.setItem(key, data[key])
      }
    }
  }, Object.values(data))
}
