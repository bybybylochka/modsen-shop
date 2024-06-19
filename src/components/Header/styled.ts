import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`
export const HeaderUtils = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  width: 20%;
`

export const HeaderLink = styled.a`
  display: inline-block;
  padding-bottom: 2px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #000;
    transition: width 0.3s ease-in-out;
  }
  &:active::after {
    width: 100%;
  }
`
