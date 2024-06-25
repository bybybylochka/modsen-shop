import { screenSizes } from '@/constants/screens'
import styled from 'styled-components'

export const LoginContainer = styled.div`
  padding: 40px 0 140px;
`

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6vh;
`

export const LoginField = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.textPrimary};
  font-size: 16px;
  line-height: 169%;
  padding: 10px 15px;
  width: 40%;
  @media (max-width: ${screenSizes.tablet}) {
    width: 100%;
  }
`

export const LoginButton = styled.button`
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.buttonText};
  padding: 10px 80px;
  margin: auto;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.button};
  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`

export const LoginTitle = styled.p`
  font-size: 33px;
  font-weight: 600;
`
