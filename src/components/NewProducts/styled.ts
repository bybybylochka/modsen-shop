import styled from 'styled-components'
import { screenSizes } from '@constants/screens'

export const HighlightCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4%;
  flex-grow: 1;
  @media (max-width: ${screenSizes.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${screenSizes.mobile}) {
    grid-template-columns: 1fr;
    grid-gap: 1%;
  }
`

export const ProductsTitle = styled.p`
  font-weight: 600;
  font-size: 33px;
  line-height: 130%;
`

export const NewProductsContainer = styled.div`
  padding: 30px 0 60px;
`
export const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewProductsLink = styled.a`
  color: ${({ theme }) => theme.colors.textHighlight};
  font-size: 20px;
  line-height: 130%;
`
