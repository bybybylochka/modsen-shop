import React, { createContext, useState } from 'react'
import GlobalStyles, { Wrapper } from '@/global'
import { lightTheme, darkTheme } from '@constants/theme'
import { ThemeProvider } from 'styled-components'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { routes } from './constants/routes'
import { nanoid } from 'nanoid'

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
    <Router>
      <ThemeContext.Provider value={{ theme: currentTheme, changeTheme }}>
        <ThemeProvider theme={currentTheme}>
          <Wrapper>
            <Header />
            <GlobalStyles />
            <Routes>
              {routes.map((route) => (
                <Route
                  key={nanoid()}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
            <Footer />
          </Wrapper>
        </ThemeProvider>
      </ThemeContext.Provider>
    </Router>
  )
}

export default App
