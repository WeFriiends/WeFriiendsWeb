import { Box, Typography } from '@mui/material'

const NameValidationBox = () => {
  return (
    <Box
      sx={{
        border: '1px solid #E0E0E0',
        borderRadius: '8px',
        padding: '16px',
        backgroundColor: '#FFF1EC',
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: '#F1543F', fontWeight: 'bold', marginBottom: '8px' }}
      >
        Your name
      </Typography>
      <Typography sx={{ color: '#F1543F', marginBottom: '4px' }}>
        - shouldn’t contain numbers
      </Typography>
      <Typography sx={{ color: '#F1543F', marginBottom: '4px' }}>
        - has 2-15 symbols
      </Typography>
      <Typography sx={{ color: '#F1543F' }}>
        - has no special characters
      </Typography>
    </Box>
  )
}

export default NameValidationBox
