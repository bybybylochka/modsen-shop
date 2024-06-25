import React from 'react'
import ProductHighlight from '../ProductHighlight'
import {
  HighlightCards,
  NewProductsContainer,
  NewProductsLink,
  ProductsHeader,
  ProductsTitle,
} from './styled'

const NewProducts = () => {
  return (
    <NewProductsContainer>
      <ProductsHeader>
        <ProductsTitle>Shop The Latest</ProductsTitle>
        <NewProductsLink>View all</NewProductsLink>
      </ProductsHeader>
      <HighlightCards>
        <ProductHighlight />
        <ProductHighlight />
        <ProductHighlight />
      </HighlightCards>
    </NewProductsContainer>
  )
}

export default NewProducts
