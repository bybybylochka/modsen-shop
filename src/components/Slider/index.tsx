import React, { useState, useEffect, useRef } from 'react'
import {
  Dot,
  NavigationDots,
  Slide,
  SliderContainer,
  SliderProps,
} from './styled'

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 10000)
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
