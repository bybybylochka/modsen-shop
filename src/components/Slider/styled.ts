import styled, { css } from 'styled-components'
import { ShowSliderProps } from './types'
import { commonTheme } from '@/constants/theme'

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
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: left 0.5s ease-in-out;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${commonTheme.colors.cardBackground};
`
export const ProductInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.sliderBackground};
  padding: 30px;
`

export const ProductName = styled.h3`
  color: ${({ theme }) => theme.colors.buttonText};
  font-size: 20px;
`

export const ProductPrice = styled.p`
  color: ${({ theme }) => theme.colors.textHighlight};
  font-size: 18px;
  font-weight: 600;
`

export const MoreButton = styled.button`
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.buttonText};
  padding: 10px 40px;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.button};
  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
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
  background-color: ${({ theme }) => theme.colors.activeDot};
  border: ${({ theme }) => theme.colors.background} 1px solid;
  width: 15px;
  height: 15px;
`
const InactiveDot = css`
  background-color: ${({ theme }) => theme.colors.inactiveDot};
  width: 10px;
  height: 10px;
`
