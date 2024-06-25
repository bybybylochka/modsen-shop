import styled from 'styled-components'

export const MenuContainer = styled.nav<{ open: boolean }>`
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 1;

  display: flex;
  flex-direction: column;
  padding: 120px 0;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
`

export const MenuLink = styled.a`
  padding: 10px 20px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: none;
`
