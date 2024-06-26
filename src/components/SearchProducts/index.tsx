import React from 'react'
import {
  SearchProductsContainer,
  SearchProductsContent,
  SearchProductsTitle,
  SearchedProducts,
} from './styled'
import SearchForm from './components/SearchForm'
import ProductHighlight from '../ProductHighlight'
import { useGetProductsQuery } from '@/api'

const SearchProducts = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>
  }
  return (
    <SearchProductsContainer>
      <SearchProductsTitle>Shop The Latest</SearchProductsTitle>
      <SearchProductsContent>
        <SearchForm />
        <SearchedProducts>
          {products?.map((product) => (
            <ProductHighlight key={product.id} product={product} />
          ))}
        </SearchedProducts>
      </SearchProductsContent>
    </SearchProductsContainer>
  )
}

export default SearchProducts
