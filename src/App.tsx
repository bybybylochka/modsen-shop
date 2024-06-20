import React, { createContext, useState } from 'react'
import GlobalStyles, { Wrapper } from './global'
import Home from './pages/Home'
import { lightTheme, darkTheme } from './constants/theme'
import { ThemeProvider } from 'styled-components'

interface ThemeContextType {
  theme: typeof lightTheme
  changeTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme)
  const changeTheme = () => {
    setCurrentTheme(currentTheme.name === 'light' ? darkTheme : lightTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, changeTheme }}>
      <ThemeProvider theme={currentTheme}>
        <Wrapper>
          <GlobalStyles />
          <Home />
        </Wrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
