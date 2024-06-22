import React from 'react'
import Slider from '../components/Slider'
import NewProducts from '../components/NewProducts'
import SliderImage from '../assets/test/image2.png'
import { SliderProps } from '../components/Slider/types'

const Home = () => {
  const slides: SliderProps = {
    slides: [
      {
        index: 1,
        image: SliderImage,
      },
      {
        index: 2,
        image: SliderImage,
      },
      {
        index: 3,
        image: SliderImage,
      },
    ],
  }
  return (
    <>
      <Slider slides={slides.slides} />
      <NewProducts />
    </>
  )
}

export default Home
