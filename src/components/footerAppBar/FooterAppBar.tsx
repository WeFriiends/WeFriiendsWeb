import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import Paper from '@mui/material/Paper'
import { useActivePage } from '../../context/activePageContext'
import { generateNavigationConfig } from '../../helpers/navigationConfigHelper'
import { renderNavigationItems } from '../../helpers/navigationRenderer'

const FooterAppBar: React.FC = () => {
  const { activePage, setNewActivePage } = useActivePage()
  const navigationConfig = generateNavigationConfig('footer')

  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        value={activePage}
        onChange={(event, newValue) => setNewActivePage(newValue)}
      >
        {renderNavigationItems({
          activePage,
          setNewActivePage,
          navigationConfig,
        })}
      </BottomNavigation>
    </Paper>
  )
}

export default FooterAppBar
