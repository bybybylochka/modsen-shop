import React from 'react'
import { BurgerContainer } from './styled'

export type Props = {
  open: boolean
  setOpen: (v: boolean) => void
}

const Burger = (props: Props) => (
  <BurgerContainer open={props.open} onClick={() => props.setOpen(!props.open)}>
    <div />
    <div />
    <div />
  </BurgerContainer>
)

export default Burger
