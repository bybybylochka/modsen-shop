import { FC } from 'react'
import { SimilarProductsContainer } from './styled'
import { HighlightCards, ProductsTitle } from '../NewProducts/styled'
import ProductHighlight from '../ProductHighlight'
import { useGetProductsByCategoryQuery } from '@/api'
import { SimilarProductsProps } from './types'

const SimilarProducts: FC<SimilarProductsProps> = ({ category }) => {
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsByCategoryQuery(category)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>
  }
  return (
    <SimilarProductsContainer>
      <ProductsTitle>Similar Items</ProductsTitle>
      <HighlightCards>
        {products?.map((product) => (
          <ProductHighlight key={product.id} product={product} />
        ))}
      </HighlightCards>
    </SimilarProductsContainer>
  )
}

export default SimilarProducts
