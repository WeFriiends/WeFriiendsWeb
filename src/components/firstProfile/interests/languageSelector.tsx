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
  const [languages, setLanguages] = useState<string[]>([]) // Список всех языков
  const [_selectedLanguages, setSelectedLanguages] = useState<string[]>(
    selectedLanguages || []
  )
  const [searchQuery, setSearchQuery] = useState<string>('') // Для поиска
  const [filteredLanguages, setFilteredLanguages] = useState<string[]>([]) // Отфильтрованные языки

  // Инициализируем список всех языков при первом рендере
  useEffect(() => {
    const allLanguages = iso6391.getAllNames() // Получаем список всех языков
    setLanguages(allLanguages)
    setFilteredLanguages(allLanguages) // По умолчанию все языки отображаются
  }, [])

  // Фильтрация языков на основе поискового запроса
  useEffect(() => {
    if (searchQuery) {
      setFilteredLanguages(
        languages.filter((language) =>
          language.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    } else {
      setFilteredLanguages([]) // Показывать пустой список, если нет запроса
    }
  }, [searchQuery, languages])

  // Обработчик выбора языков
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
        variant="standard" // Только нижняя граница
        placeholder="Search"
        value={searchQuery} // Связываем поле ввода с состоянием
        onChange={(e) => setSearchQuery(e.target.value)} // Обработчик изменения поиска
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          disableUnderline: false, // Оставляем нижнюю линию
        }}
        fullWidth
        margin="normal"
      />

      {/* Отображение списка языков только при наличии фильтрованных результатов */}
      {filteredLanguages.length > 0 && (
        <Box mt={2}>
          {filteredLanguages.map((language, index) => (
            <Chip
              key={index}
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
