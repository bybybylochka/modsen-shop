import styled from 'styled-components'
import { baseTheme } from '../../constants/theme'

export const HighlightCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4%;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const NewProductsTitle = styled.p`
  font-weight: 600;
  font-size: 33px;
  line-height: 130%;
`

export const NewProductsContainer = styled.div`
  padding: 30px 0 60px;
`
export const NewProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewProductsLink = styled.a`
  color: ${baseTheme.colors.textHighlight};
  font-size: 20px;
  line-height: 130%;
`
