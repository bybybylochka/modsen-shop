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
import { contacts } from '@/constants/contacts'

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
          {contacts.map((contact, index) => (
            <FooterButton key={index}>
              <img src={contact.img} alt={contact.name} />
            </FooterButton>
          ))}
        </FooterNetworksContainer>
      </FooterLine>
    </FooterContainer>
  )
}

export default Footer
