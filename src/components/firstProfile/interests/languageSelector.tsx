import { useState, useEffect } from 'react'
import { Box, Chip, TextField, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import iso6391 from 'iso-639-1'

type LanguageSelectorProps = {
  onSelectedLanguages: (selectedLanguages: string[]) => void
  selectedLanguages: string[] | undefined
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  onSelectedLanguages,
  selectedLanguages,
}) => {
  const [languages, setLanguages] = useState<string[]>([])
  const [_selectedLanguages, setSelectedLanguages] = useState<string[]>(
    selectedLanguages || []
  )
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [filteredLanguages, setFilteredLanguages] = useState<string[]>([])

  useEffect(() => {
    const allLanguages = iso6391.getAllNames()
    setLanguages(allLanguages)
    setFilteredLanguages(allLanguages)
  }, [])

  useEffect(() => {
    if (searchQuery) {
      setFilteredLanguages(
        languages.filter((language) =>
          language.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    } else {
      setFilteredLanguages([])
    }
  }, [searchQuery, languages])

  const toggleLanguageSelection = (language: string) => {
    const updatedSelectedLanguages = _selectedLanguages.includes(language)
      ? _selectedLanguages.filter((l) => l !== language)
      : [..._selectedLanguages, language]

    setSelectedLanguages(updatedSelectedLanguages)
    onSelectedLanguages(updatedSelectedLanguages)
  }

  return (
    <Box>
      <TextField
        variant="standard"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          disableUnderline: false,
        }}
        fullWidth
        margin="normal"
        sx={{
          '& .MuiInputBase-root': {
            '&:hover:before': {
              borderBottom: '#C5C5C5',
            },
            '&:before': {
              borderBottom: '1px solid #C5C5C5',
            },
            '&:after': {
              borderBottom: '1px solid #C5C5C5',
            },
          },
        }}
      />

      {filteredLanguages.length > 0 && (
        <Box mt={2}>
          {filteredLanguages.map((language, index) => (
            <Chip
              key={index + language}
              label={language}
              style={{
                margin: '4px',
                backgroundColor: _selectedLanguages.includes(language)
                  ? '#FECAB7'
                  : '#EEEEEE',
              }}
              onClick={() => toggleLanguageSelection(language)}
            />
          ))}
        </Box>
      )}
    </Box>
  )
}

export default LanguageSelector
