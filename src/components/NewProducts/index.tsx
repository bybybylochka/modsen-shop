import React from 'react'
import ProductHighlight from '../ProductHighlight'
import {
  HighlightCards,
  NewProductsContainer,
  NewProductsHeader,
  NewProductsLink,
  NewProductsTitle,
} from './styled'

const NewProducts = () => {
  return (
    <NewProductsContainer>
      <NewProductsHeader>
        <NewProductsTitle>Shop The Latest</NewProductsTitle>
        <NewProductsLink>View all</NewProductsLink>
      </NewProductsHeader>
      <HighlightCards>
        <ProductHighlight />
        <ProductHighlight />
        <ProductHighlight />
      </HighlightCards>
    </NewProductsContainer>
  )
}

export default NewProducts
