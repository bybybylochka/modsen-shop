import React from 'react'
import { LogoContainer } from './styled'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/">
        <span>Modsen S</span>HOPPE
      </Link>
    </LogoContainer>
  )
}

export default Logo
