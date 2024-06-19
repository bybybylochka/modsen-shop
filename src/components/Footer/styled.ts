import styled from 'styled-components'
import { baseTheme } from '../../constants/theme'
import { screenSizes } from '../../constants/screens'

export const FooterContainer = styled.footer`
  border-top: 1px solid ${baseTheme.colors.border};
  padding: 30px 0;
  & :first-child {
    margin-bottom: 2%;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 80px;
  }
`
export const FooterLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const FooterNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-basis: 40%;
  @media (max-width: ${screenSizes.desktop}) {
    flex-basis: 50%;
  }
  @media (max-width: ${screenSizes.laptop}) {
    flex-basis: 60%;
  }
  @media (max-width: ${screenSizes.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const FooterNavigationLink = styled.a`
  color: ${baseTheme.colors.footerLink};
  font-size: 16px;
  &:hover {
    color: ${baseTheme.colors.textPrimary};
  }
`

export const FooterInputContainer = styled.div`
  width: 70%;
  display: flex;
  border-bottom: 2px solid ${baseTheme.colors.textPrimary};
  flex-basis: 40%;
`

export const FooterInputField = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  font-size: 16px;
  line-height: 169%;
  padding: 10px 15px;
`

export const FooterButton = styled.button``

export const FooterNetworksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 15%;
`
export const FooterPolicy = styled.p`
  font-size: 16px;
`
