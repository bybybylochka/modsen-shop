import React from 'react'
import { HeaderContainer, HeaderLink, HeaderUtils } from './styled'
import Logo from './components/Logo'
import ThemeSwitcher from './components/ThemeSwitcher'
import SearchIcon from '@assets/icons/search.png'
import CardIcon from '@assets/icons/card.png'
import Menu from './components/BurgerMenu'
import { useMediaQuery } from 'react-responsive'
import { screenSizes } from '@constants/screens'
import { Link } from 'react-router-dom'

const Header = () => {
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${screenSizes.tablet})`,
  })
  return (
    <HeaderContainer>
      <Logo />
      {isTabletOrMobile ? (
        <Menu />
      ) : (
        <HeaderUtils>
          <HeaderLink>
            <Link to="/shop">Shop</Link>
          </HeaderLink>
          <ThemeSwitcher />
          <HeaderLink>
            <img src={SearchIcon} alt="search icon" />
          </HeaderLink>
          <HeaderLink>
            <img src={CardIcon} alt="card icon" />
          </HeaderLink>
        </HeaderUtils>
      )}
    </HeaderContainer>
  )
}

export default Header
