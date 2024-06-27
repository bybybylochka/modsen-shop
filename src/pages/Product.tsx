import ProductCard from '@/components/ProductCard'
import SimilarProducts from '@/components/SimilarProducts'
import { useState } from 'react'

const ProductInfo = () => {
  const [category, setCategory] = useState('')
  return (
    <>
      <ProductCard setCategory={setCategory} />
      <SimilarProducts category={category} />
    </>
  )
}

export default ProductInfo
