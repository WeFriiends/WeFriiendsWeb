import { useEffect } from 'react'

type SetStateCallback = (key: string, value: string) => void

export const useLocalStorageState = (
  keys: string[],
  setStateCallback: SetStateCallback
): void => {
  useEffect(() => {
    const storedData: Record<string, string> = {}
    keys.forEach((key) => {
      const storedValue = localStorage.getItem(key)
      if (storedValue) {
        storedData[key] = storedValue
        setStateCallback(key, storedValue)
      }
    })
  }, [])
}

export default useLocalStorageState
