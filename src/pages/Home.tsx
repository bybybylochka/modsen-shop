import React from 'react'
import Header from '../components/Header'
import { SliderProps } from '../components/Slider/styled'
import Slider from '../components/Slider'

const Home = () => {
  const slides: SliderProps = {
    slides: [
      {
        index: 1,
        image: 'https://get.wallhere.com/photo/2560x1600-px-stones-1230200.jpg',
      },
      {
        index: 2,
        image:
          'https://wp-s.ru/wallpapers/9/19/508322161627456/foto-zelenoj-doliny-na-fone-golubogo-neba.jpg',
      },
      {
        index: 3,
        image:
          'https://get.wallhere.com/photo/1920x1200-px-cheetah-1653461.jpg',
      },
    ],
  }
  return (
    <>
      <Header />
      <Slider slides={slides.slides} />;
    </>
  )
}

export default Home
