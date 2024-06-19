import React from 'react'
import GlobalStyles, { Wrapper } from './global'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Wrapper>
        <GlobalStyles />
        <Home />
      </Wrapper>
    </>
  )
}

export default App
