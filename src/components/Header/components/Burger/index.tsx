import React from 'react'
import { BurgerContainer } from './styled'
import { BurgerProps } from './types'

const Burger: React.FC<BurgerProps> = ({ open, setOpen }) => (
  <BurgerContainer open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </BurgerContainer>
)

export default Burger
