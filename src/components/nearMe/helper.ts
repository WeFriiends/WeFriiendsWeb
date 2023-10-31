import { picProfileColMob, picProfileColWeb } from '../../types/Enums'

export function getColumns(isMobile: boolean) {
  if (isMobile) {
    return picProfileColMob // Return the number of columns for mobile view
  } else {
    return picProfileColWeb // Return the number of columns for web view
  }
}
