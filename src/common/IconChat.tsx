import React from 'react'
import { makeStyles } from 'tss-react/mui'
import theme from '../styles/createTheme'

type IconChatProps = {
  color?: string
}
const IconChat: React.FC<IconChatProps> = ({ color }) => {
  const { classes } = useStyles()
  color ??= theme.palette.primary.main

  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.iconChat}
    >
      <path
        d="M19.1696 9.87411C19.173 11.2355 18.8622 12.5784 18.2623 13.7935C17.5511 15.2497 16.4576 16.4744 15.1045 17.3306C13.7514 18.1868 12.192 18.6406 10.601 18.6413C9.27051 18.6448 7.958 18.3267 6.77038 17.713L1.02441 19.6727L2.93974 13.7935C2.33987 12.5784 2.02901 11.2355 2.03248 9.87411C2.03309 8.24627 2.47664 6.65074 3.31345 5.26625C4.15025 3.88176 5.34725 2.76299 6.77038 2.03525C7.958 1.42148 9.27051 1.10341 10.601 1.10696H11.1051C13.2062 1.22557 15.1908 2.13299 16.6788 3.65548C18.1668 5.17797 19.0537 7.20854 19.1696 9.3584V9.87411Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
export default IconChat
const useStyles = makeStyles()(() => {
  return {
    iconChat: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }
})
