import React, { useRef, useState } from 'react'
import { MenuContainer, MenuLink } from './styled'
import Burger from '../Burger'
import { useOnClickOutside } from '../../../../utils/hooks/useOnClickOutside'

const Menu = () => {
  const [open, setOpen] = useState(false)
  const node = useRef<HTMLDivElement>(null)
  const close = () => setOpen(false)

  useOnClickOutside(node, () => setOpen(false))

  return (
    <div ref={node}>
      <MenuContainer open={open}>
        <MenuLink onClick={() => close()}>Home</MenuLink>
        <MenuLink onClick={() => close()}>Shop</MenuLink>
        <MenuLink onClick={() => close()}>About</MenuLink>
        <MenuLink onClick={() => close()}>Blog</MenuLink>
        <MenuLink onClick={() => close()}>Help</MenuLink>
        <MenuLink onClick={() => close()}>Contact</MenuLink>
        <MenuLink onClick={() => close()}>Search</MenuLink>
      </MenuContainer>
      <Burger open={open} setOpen={setOpen} />
    </div>
  )
}

export default Menu
