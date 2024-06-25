import React from 'react'
import { SimilarProductsContainer } from './styled'
import { HighlightCards, ProductsTitle } from '../NewProducts/styled'
import ProductHighlight from '../ProductHighlight'

const SimilarProducts = () => {
  return (
    <SimilarProductsContainer>
      <ProductsTitle>Similar Items</ProductsTitle>
      <HighlightCards>
        <ProductHighlight />
        <ProductHighlight />
        <ProductHighlight />
      </HighlightCards>
    </SimilarProductsContainer>
  )
}

export default SimilarProducts
