import styled from 'styled-components'

export const ThemeSwitch = styled.div<{ isChecked: boolean }>`
  width: 50px;
  height: 25px;
  background-color: #ccc;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    top: 2.5px;
    left: ${({ isChecked }) => (isChecked ? 'calc(100% - 22.5px)' : '2.5px')};
    transition: left 0.3s ease;
  }
`

export const ThemeSwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
