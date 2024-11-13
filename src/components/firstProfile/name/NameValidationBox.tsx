import { FormHelperText } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const NameValidationBox = () => {
  const { classes } = useStyles()
  return (
    <FormHelperText className={classes.errorBox}>
      <h4>Your name</h4>
      <p>- shouldn’t contain numbers</p>
      <p>- has 2-15 symbols</p>
      <p>- has no special characters</p>
    </FormHelperText>
  )
}

const useStyles = makeStyles()(() => ({
  errorBox: {
    width: '100%',
    padding: 20,
    boxShadow: '0px 0px 5px #D9D9D9',
    borderRadius: 10,
    color: '#F1562A',
    textAlign: 'left',
    h4: {
      fontSize: 14,
      lineHeight: '22px',
      fontWeight: 500,
      marginBottom: 10,
    },
    p: {
      fontSize: 12,
      lineHeight: '18px',
    },
  },
}))

export default NameValidationBox
