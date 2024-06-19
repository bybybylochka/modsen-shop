import React from 'react'
import Header from '../components/Header'
import { SliderProps } from '../components/Slider/styled'
import Slider from '../components/Slider'
import NewProducts from '../components/NewProducts'
import SliderImage from '../assets/test/image2.png'
import Footer from '../components/Footer'

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
      <Header />
      <Slider slides={slides.slides} />
      <NewProducts />
      <Footer />
    </>
  )
}

export default Home
