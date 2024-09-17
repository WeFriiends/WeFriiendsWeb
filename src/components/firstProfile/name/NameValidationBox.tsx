import { FormHelperText } from '@mui/material'

const NameValidationBox = () => {
  return (
    <FormHelperText sx={{ textAlign: 'center' }}>
      shouldn’t contain numbers; has 2-15 symbols; has no special characters
    </FormHelperText>
  )
}

export default NameValidationBox
