import { Box, Chip } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import CloseIcon from '@mui/icons-material/Close'

export const ChipWithClose = ({
  label,
  onClose,
}: {
  label: string
  onClose: () => void
}) => {
  const { classes } = useStyles()
  return (
    <Box sx={{ position: 'relative' }}>
      <Chip label={label} style={{ margin: '4px' }} />
      <CloseIcon className={classes.closeChipIcon} onClick={onClose} />
    </Box>
  )
}

const useStyles = makeStyles()(() => {
  return {
    closeChipIcon: {
      position: 'absolute',
      width: '14px',
      height: '14px',
      backgroundColor: '#F46B5D',
      color: 'white',
      cursor: 'pointer',
      borderRadius: '50%',
      right: '2px',
      top: '-2px',
    },
  }
})
