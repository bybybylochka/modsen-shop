import styled from 'styled-components'
import { screenSizes } from '@constants/screens'

export const SearchProductsTitle = styled.p`
  font-size: 33px;
  font-weight: 600;
`

export const SearchProductsContainer = styled.div`
  padding: 40px 0;
`

export const SearchProductsContent = styled.div`
  display: flex;
  justify-content: space-between;
  &:first-child {
    flex-basis: 23%;
  }
  @media (max-width: ${screenSizes.tablet}) {
    flex-direction: column;
  }
`

export const SearchedProducts = styled.div`
  flex-basis: 75%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  @media (max-width: ${screenSizes.laptop}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${screenSizes.mobile}) {
    grid-gap: 1%;
    grid-template-columns: 1fr;
  }
`
