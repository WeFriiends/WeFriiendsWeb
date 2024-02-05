import { Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const PrevPageButton = ({ prevPageLink }) => {
  const { classes } = useStyles()

  return (
    <Button
      className={classes.prevPageButton}
      startIcon={
        <img
          alt="previous page"
          src={'/img/navigationIcons/arrow_back.svg'}
          style={{ margin: 0 }}
        />
      }
      href={prevPageLink}
    />
  )
}

export default PrevPageButton

const useStyles = makeStyles()(() => {
  return {
    prevPageButton: {
      width: 45,
      minWidth: 45,
      height: 45,
      paddingLeft: 18,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      background: '#FEDED2',
    },
  }
})
