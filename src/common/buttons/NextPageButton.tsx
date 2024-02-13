import { Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { commonStyles } from 'styles/commonStyles'
type NextPageButtonProps = {
  nextPageLink: string
  onClick: () => void
}

const NextPageButton = ({ nextPageLink, onClick }: NextPageButtonProps) => {
  const { classes } = useStyles()
  const commonClasses = commonStyles().classes

  return (
    <Button
      className={`${commonClasses.submitButton} ${classes.nextPageButton}`}
      href={nextPageLink}
      onClick={onClick}
    >
      Next
    </Button>
  )
}

export default NextPageButton

const useStyles = makeStyles()((theme) => {
  return {
    nextPageButton: {
      height: 60,
      padding: '18px 24px',
      textTransform: 'none',
      width: '90vw',
      [theme.breakpoints.up('sm')]: {
        width: 400,
      },
    },
  }
})
