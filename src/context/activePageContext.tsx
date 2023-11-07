import React, { createContext, useContext, useState, ReactNode } from 'react'

type ActivePageContextType = {
  activePage: string
  setNewActivePage: (page: string) => void
}

const ActivePageContext = createContext<ActivePageContextType | undefined>(
  undefined
)

export const useActivePage = () => {
  const context = useContext(ActivePageContext)
  if (context === undefined) {
    throw new Error('useActivePage must be used within an ActivePageProvider')
  }
  return context
}

type ActivePageProviderProps = {
  children: ReactNode
}

export const ActivePageProvider = ({ children }: ActivePageProviderProps) => {
  const [activePage, setActivePage] = useState('NearMe')

  const setNewActivePage = (page: string) => {
    setActivePage(page)
  }

  return (
    <ActivePageContext.Provider value={{ activePage, setNewActivePage }}>
      {children}
    </ActivePageContext.Provider>
  )
}
