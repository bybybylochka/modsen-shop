import React from 'react'
import ProductHighlight from '../ProductHighlight'
import {
  HighlightCards,
  NewProductsContainer,
  NewProductsLink,
  ProductsHeader,
  ProductsTitle,
} from './styled'
import { useGetProductsQuery } from '@/api'

const NewProducts = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>
  }
  return (
    <NewProductsContainer>
      <ProductsHeader>
        <ProductsTitle>Shop The Latest</ProductsTitle>
        <NewProductsLink>View all</NewProductsLink>
      </ProductsHeader>
      <HighlightCards>
        {products?.map((product) => (
          <ProductHighlight key={product.id} product={product} />
        ))}
      </HighlightCards>
    </NewProductsContainer>
  )
}

export default NewProducts
