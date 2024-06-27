import React from 'react'
import {
  SearchProductsContainer,
  SearchProductsContent,
  SearchProductsTitle,
  SearchedProducts,
} from './styled'
import SearchForm from './components/SearchForm'
import ProductHighlight from '../ProductHighlight'
import useSearchProducts from '@/utils/hooks/useSearchProducts'

const SearchProducts = () => {
  const { searchParams, setSearchParams, products, isLoading, error } =
    useSearchProducts()
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
        <SearchForm
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
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
