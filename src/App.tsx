import React, { createContext, useState } from 'react'
import GlobalStyles, { Wrapper } from '@/global'
import Home from '@pages/Home'
import { lightTheme, darkTheme } from '@constants/theme'
import { ThemeProvider } from 'styled-components'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Shop from '@pages/Shop'
import ProductInfo from './pages/Product'
import ContactUsForm from './components/ContactUsForm'
import Error from './pages/Error'
import ShoppingCart from './pages/ShoppingCart'

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
          <Header />
          <GlobalStyles />
          <Home />
          <Shop />
          <ProductInfo />
          <ContactUsForm />
          <Error />
          <ShoppingCart />
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
