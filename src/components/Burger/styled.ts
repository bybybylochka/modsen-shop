import styled from 'styled-components'
import { baseTheme } from '../../constants/theme'

export const BurgerContainer = styled.button<{ open: boolean }>`
  position: relative;
  right: ${({ open }) => (open ? 'initial' : '0')};
  left: ${({ open }) => (open ? '2vw' : 'initial')};
  width: 22px;
  height: 22px;
  padding: 0;
  background: transparent;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;

  div {
    position: relative;
    width: 22px;
    height: 3px;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    background-color: ${baseTheme.colors.burger};

    &:first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
