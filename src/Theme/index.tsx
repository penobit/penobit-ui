import React from 'react'
import ThemeContextValue from '../@types/Theme'

export const PenobitThemeContext = React.createContext<ThemeContextValue>({})

function PenobitThemeProvider({ children, theme }: { children: React.ReactNode; theme: ThemeContextValue }) {
  return <PenobitThemeContext.Provider value={theme}>{children}</PenobitThemeContext.Provider>
}

export default PenobitThemeProvider
