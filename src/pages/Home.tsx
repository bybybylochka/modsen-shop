import React from 'react'
import Slider from '@components/Slider'
import NewProducts from '@components/NewProducts'
import { SliderProps, transformProduct } from '@components/Slider/types'
import { useGetProductsQuery } from '@/api'

const Home = () => {
  const { data: products, isLoading, error } = useGetProductsQuery()
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>
  }
  const slides: SliderProps = {
    slides: products?.slice(0, 5).map((product) => transformProduct(product)),
  }
  return (
    <>
      {slides.slides && <Slider slides={slides.slides} />}
      <NewProducts />
    </>
  )
}

export default Home
