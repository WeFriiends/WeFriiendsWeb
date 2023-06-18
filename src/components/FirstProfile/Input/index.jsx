import { TextField } from '@mui/material'

const Input = (props) => {
  return (
    <TextField
      {...props}
      variant="filled"
      sx={{
        display: 'block',
        margin: '10vh auto',
        background: '#fff1ec',
        width: '90%',
        height: '4rem',
        textAlign: 'center',

        '& .MuiFilledInput-root': {
          background: 'none',

          '& fieldset': {
            border: 'none',
          },
          '&:hover fieldset': {
            border: 'none',
          },
          '&.Mui-focused fieldset': {
            border: 'none',
          },
        },
      }}
    />
  )
}

export default Input
