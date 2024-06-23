import React from 'react'
import {
  FooterContainer,
  FooterButton,
  FooterInputContainer,
  FooterInputField,
  FooterLine,
  FooterNavigation,
  FooterNavigationLink,
  FooterNetworksContainer,
  FooterPolicy,
} from './styled'
import Arrow from '@assets/icons/arrow.png'
import LinkedIn from '@assets/icons/linkedIn.png'
import Facebook from '@assets/icons/facebook.png'
import Instagram from '@assets/icons/instagram.png'
import Twitter from '@assets/icons/twitter.png'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLine>
        <FooterNavigation>
          <FooterNavigationLink>CONTACT</FooterNavigationLink>
          <FooterNavigationLink>TERMS OF SERVICES</FooterNavigationLink>
          <FooterNavigationLink>SHIPPING AND RETURNS</FooterNavigationLink>
        </FooterNavigation>
        <FooterInputContainer>
          <FooterInputField
            type="text"
            placeholder="Give an email, get the newsletter."
          />
          <FooterButton>
            <img src={Arrow} alt="Enter" />
          </FooterButton>
        </FooterInputContainer>
      </FooterLine>
      <FooterLine>
        <FooterPolicy>
          © 2023 Shelly. Terms of use and privacy policy.
        </FooterPolicy>
        <FooterNetworksContainer>
          <FooterButton>
            <img src={LinkedIn} alt="LinkedIn" />
          </FooterButton>
          <FooterButton>
            <img src={Facebook} alt="Facebook" />
          </FooterButton>
          <FooterButton>
            <img src={Instagram} alt="Instagram" />
          </FooterButton>
          <FooterButton>
            <img src={Twitter} alt="Twitter" />
          </FooterButton>
        </FooterNetworksContainer>
      </FooterLine>
    </FooterContainer>
  )
}

export default Footer
