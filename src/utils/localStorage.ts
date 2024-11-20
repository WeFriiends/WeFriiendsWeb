export const setItemToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getItemFromLocalStorage = (key: string) => {
  try {
    const value = localStorage.getItem(key)
    // Only parse if the value is not 'undefined' or null
    return value && value !== 'undefined' ? JSON.parse(value) : null
  } catch (e) {
    console.error('Error parsing localStorage item', e)
    return null // Return null if an error occurs during parsing
  }
}

export const getItemsFromLocalStorage = (keys: string[]) => {
  const items: { [key: string]: any } = {}
  keys.forEach((key) => {
    const item = getItemFromLocalStorage(key)
    if (item !== null) {
      items[key] = item
    }
  })
  return items
}
