import { screenSizes } from '@/constants/screens'
import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 23vw;
  @media (max-width: ${screenSizes.tablet}) {
    width: auto;
  }
`

export const SearchInputContainer = styled.div`
  display: flex;
  border-bottom: 2px solid ${({ theme }) => theme.colors.textPrimary};
`

export const SearchInputField = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  font-size: 16px;
  line-height: 169%;
  padding: 10px 15px;
`
export const SearchSelectField = styled.select`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.textPrimary};
  width: 100%;
  font-size: 16px;
  line-height: 169%;
  padding: 10px 15px;
`
export const SearchButton = styled.button``
