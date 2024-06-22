import React from 'react'
import { BurgerContainer } from './styled'
import { BurgerProps } from './types'

const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => {
  const handleBurgerClick = () => {
    setOpen(!open)
  }
  return (
    <BurgerContainer open={open} onClick={handleBurgerClick}>
      <div />
      <div />
      <div />
    </BurgerContainer>
  )
}

export default Burger
