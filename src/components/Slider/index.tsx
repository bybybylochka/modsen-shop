import { useState, useEffect, useRef, FC } from 'react'
import { Dot, NavigationDots, Slide, SliderContainer } from './styled'
import { SliderProps } from './types'
import { scrollingDelay } from './constants'

const Slider: FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, scrollingDelay)
    intervalRef.current = interval

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current)
      }
    }
  }, [slides.length])
  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <SliderContainer>
      {slides.map((slide, index) => (
        <Slide
          key={index}
          index={index}
          image={slide.image}
          currentIndex={currentIndex}
        />
      ))}
      <NavigationDots>
        {slides.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </NavigationDots>
    </SliderContainer>
  )
}

export default Slider
