import { Product } from '@/types'

export interface SlideProps {
  index: number
  image: string
  title: string
  price: number
}

export interface ShowSliderProps {
  index: number
  image: string
  currentIndex: number
}

export interface SliderProps {
  slides: SlideProps[] | undefined
}

export const transformProduct = (product: Product): SlideProps => {
  const { id, title, price, image } = product
  return {
    index: +id,
    image,
    title,
    price,
  }
}
