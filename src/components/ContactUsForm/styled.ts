import { screenSizes } from '@/constants/screens'
import styled from 'styled-components'

export const ContactUsFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  gap: 10vh;
  padding: 50px 0;
  @media (max-width: ${screenSizes.tablet}) {
    gap: 2vh;
  }
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 45%;
  }
  @media (max-width: ${screenSizes.tablet}) {
    flex-direction: column;
    gap: 2vh;
    input {
      width: 100%;
    }
  }
  @media (max-width: ${screenSizes.laptop}) {
    gap: 20px;
  }
`

export const ContactUsTitle = styled.p`
  font-size: 33px;
  font-weight: 600;
  text-align: center;
`
export const ContactUsDescription = styled.p`
  font-size: 20px;
  text-align: center;
  width: 50%;
  margin: auto;
`
export const ContactUsField = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.textPrimary};
  font-size: 16px;
  line-height: 169%;
  padding: 10px 15px;
  @media (max-width: ${screenSizes.tablet}) {
    width: 100%;
  }
`
export const ContactUsButton = styled.button`
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.buttonText};
  padding: 10px 80px;
  width: 50%;
  margin: auto;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.button};
  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`
