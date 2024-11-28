export const setItemToLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getItemFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key)
  let result = null
  try {
    if (item) result = JSON.parse(item)
  } catch (e) {
    console.log(e)
  }
  return result
}

export const getItemsFromLocalStorage = (keys: string[]) => {
  const items: { [key: string]: any } = {}
  keys.forEach((key) => {
    console.log(key)
    const item = getItemFromLocalStorage(key)
    if (item !== null) {
      items[key] = item
    }
  })
  return items
}
