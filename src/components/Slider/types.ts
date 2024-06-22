export interface SlideProps {
  index: number
  image: string
}

export interface ShowSliderProps extends SlideProps {
  currentIndex: number
}

export interface SliderProps {
  slides: SlideProps[]
}
