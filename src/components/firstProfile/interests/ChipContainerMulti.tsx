import { useState } from 'react'
import { Box, Chip } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

type ChipContainerProps = {
  data: { title: string; item: string[] }
  multiple?: boolean | undefined
  onSelectedItems: (selectedItems: string[]) => void
  selectedItems: string[] | undefined
}

export const ChipContainerMulti: React.FC<ChipContainerProps> = ({
  data,
  multiple,
  onSelectedItems,
  selectedItems,
}) => {
  const { classes } = useStyles()

  const [_selectedItems, setSelectedItems] = useState<string[]>(
    selectedItems || []
  )

  const checkItems = (item: string) => {
    const newSelectedItems: string[] = []
    if (_selectedItems.includes(item)) {
      newSelectedItems.push(..._selectedItems.filter((i) => i !== item))
    } else {
      const arr = multiple ? _selectedItems : []
      newSelectedItems.push(...arr, item)
    }
    setSelectedItems(newSelectedItems)
    onSelectedItems(newSelectedItems)
  }

  return (
    <Box className={classes.chipContainer}>
      {data.item.map((item, index) => (
        <Chip
          key={index}
          label={item}
          style={{
            backgroundColor: _selectedItems.includes(item)
              ? '#FECAB7'
              : '#EEEEEE',
          }}
          onClick={() => checkItems(item)}
        />
      ))}
    </Box>
  )
}

const useStyles = makeStyles()(() => {
  return {
    chipContainer: {
      margin: '40px 0 15px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
    },
  }
})
