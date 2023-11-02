import { ColumnNumber } from '../../types/Enums'

export function getColumns(isMobile: boolean) {
  return isMobile ? ColumnNumber.Mobile : ColumnNumber.Web
}
