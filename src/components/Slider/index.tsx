import { useState, useEffect, useRef, FC } from 'react'
import { Dot, NavigationDots, Slide, SliderContainer } from './styled'
import { SliderProps } from './types'
import { scrollingDelay } from './constants'
import { nanoid } from 'nanoid'

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
          key={nanoid()}
          index={index}
          image={slide.image}
          currentIndex={currentIndex}
        />
      ))}
      <NavigationDots>
        {slides.map((_, index) => (
          <Dot
            key={nanoid()}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </NavigationDots>
    </SliderContainer>
  )
}

export default Slider
