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
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLine>
        <FooterNavigation>
          <Link to="/contact-us">
            <FooterNavigationLink>CONTACT</FooterNavigationLink>
          </Link>
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
          {contacts.map((contact) => (
            <FooterButton key={contact.id}>
              <a href={contact.url}>
                <img src={contact.img} alt={contact.name} />
              </a>
            </FooterButton>
          ))}
        </FooterNetworksContainer>
      </FooterLine>
    </FooterContainer>
  )
}

export default Footer
