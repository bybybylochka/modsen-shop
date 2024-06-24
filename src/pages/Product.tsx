import ProductCard from '@/components/ProductCard'
import { Product } from '@/components/ProductCard/types'
import SimilarProducts from '@/components/SimilarProducts'
import React from 'react'

const ProductInfo = () => {
  const product: Product = {
    id: '1',
    name: 'Product Name',
    cost: '300$',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ',
    rating: {
      rate: 2.1,
      count: 34,
    },
    category: 'Clothes',
    images: [
      'https://wallpapersgood.ru/wallpapers/main2/201715/makro-kolco-brilliant.jpg',
      'https://i.pinimg.com/originals/14/8f/3c/148f3cf23d9fa8523b2c77c03c07eeaf.jpg',
      'https://i5.walmartimages.com/asr/1d53b696-d76c-49db-91c2-72d17fef9a97_1.3af6dd19bbc4bc63cfb8d88ea5cdf667.jpeg',
      'https://i5.walmartimages.com/asr/1d53b696-d76c-49db-91c2-72d17fef9a97_1.3af6dd19bbc4bc63cfb8d88ea5cdf667.jpeg',
    ],
  }

  return (
    <>
      <ProductCard product={product} />
      <SimilarProducts />
    </>
  )
}

export default ProductInfo
