import { Box, FormHelperText, List, ListItem } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

const PasswordHintColorAndIcon = ({ password }: { password: string }) => {
  const { classes } = useStyles()

  const passwordHintColor = (pattern: RegExp, password: string) => {
    if (password) {
      if (pattern.test(password)) {
        return '#1D878C'
      }
      return '#F46B5D'
    }
    return '#000000'
  }

  const passwordHintIcon = (pattern: RegExp, password: string) => {
    if (password && pattern.test(password)) {
      return '/img/check.svg'
    }
    return '/img/hyphen.svg'
  }

  return (
    <FormHelperText component="div" className={classes.errorBox}>
      Your Password must have:
      <List>
        <ListItem
          sx={{
            color: passwordHintColor(/.{8,}/, password),
            padding: 0,
          }}
        >
          <Box component="img" src={passwordHintIcon(/.{8,}/, password)}></Box>
          &nbsp;8 or more symbols
        </ListItem>
        <ListItem
          sx={{
            color: passwordHintColor(/[0-9]/, password),
            padding: 0,
          }}
        >
          <Box component="img" src={passwordHintIcon(/[0-9]/, password)}></Box>
          &nbsp;1 or more numbers
        </ListItem>
        <ListItem
          sx={{
            color: passwordHintColor(/[a-zA-Z]/, password),
            padding: 0,
          }}
        >
          <Box
            component="img"
            src={passwordHintIcon(/[a-zA-Z]/, password)}
          ></Box>
          &nbsp;1 or more Latin letters
        </ListItem>
        <ListItem
          sx={{
            color: passwordHintColor(
              /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
              password
            ),
            padding: 0,
          }}
        >
          <Box
            component="img"
            src={passwordHintIcon(
              /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
              password
            )}
          ></Box>
          &nbsp;1 or more special characters
        </ListItem>
      </List>
    </FormHelperText>
  )
}

export default PasswordHintColorAndIcon

const useStyles = makeStyles()({
  errorBox: {
    boxShadow: '0px 0px 5px 0px #D9D9D9',
    borderRadius: 10,
    padding: '17px 0 20px 23px',
    marginTop: 20,
    fontWeight: 500,
  },
})
