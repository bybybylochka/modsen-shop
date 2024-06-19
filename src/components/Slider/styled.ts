import styled, { css } from 'styled-components'
import { baseTheme } from '../../constants/theme'

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

export const SliderContainer = styled.div`
  width: 100%;
  height: 70vh;
  position: relative;
  overflow: hidden;
`

export const Slide = styled.div<ShowSliderProps>`
  position: absolute;
  top: 0;
  left: ${({ index, currentIndex }) => `${(index - currentIndex) * 100}%`};
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  transition: left 0.5s ease-in-out;
`

export const NavigationDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  align-items: center;
`

export const Dot = styled.div<{ active: boolean }>`
  border-radius: 50%;
  ${({ active }) => (active ? ActiveDot : InactiveDot)};
  cursor: pointer;
`

const ActiveDot = css`
  background-color: ${baseTheme.colors.activeDot};
  border: ${baseTheme.colors.background} 1px solid;
  width: 15px;
  height: 15px;
`
const InactiveDot = css`
  background-color: ${baseTheme.colors.inactiveDot};
  width: 10px;
  height: 10px;
`
