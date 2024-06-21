import React from 'react'
import {
  SearchProductsContainer,
  SearchProductsContent,
  SearchProductsTitle,
  SearchedProducts,
} from './styled'
import SearchForm from '../SearchForm'
import ProductHighlight from '../ProductHighlight'

const SearchProducts = () => {
  return (
    <SearchProductsContainer>
      <SearchProductsTitle>Shop The Latest</SearchProductsTitle>
      <SearchProductsContent>
        <SearchForm />
        <SearchedProducts>
          <ProductHighlight />
          <ProductHighlight />
          <ProductHighlight />
          <ProductHighlight />
          <ProductHighlight />
        </SearchedProducts>
      </SearchProductsContent>
    </SearchProductsContainer>
  )
}

export default SearchProducts
