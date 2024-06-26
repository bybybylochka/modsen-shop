import { screenSizes } from '@/constants/screens'
import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding-top: 50px;
  @media (max-width: ${screenSizes.tablet}) {
    flex-direction: column;
  }
`

export const ImagesColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 10%;
  @media (max-width: ${screenSizes.tablet}) {
    display: none;
  }
`

export const ImageThumbnail = styled.div<{ isActive: boolean }>`
  width: 100%;
  cursor: pointer;
  border: 2px solid ${(props) => (props.isActive ? '#d8d8d8' : 'transparent')};
  padding-top: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  img {
    width: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
  }
`

export const MainImage = styled.div`
  width: 50%;
  height: 70vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (max-width: ${screenSizes.tablet}) {
    width: 100%;
  }
`

export const InfoColumn = styled.div`
  width: 40%;
  @media (max-width: ${screenSizes.tablet}) {
    width: 100%;
  }
`

export const Name = styled.p`
  font-size: 26px;
  margin: 0;
`
export const Cost = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textHighlight};
  font-weight: 600;
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 16px;
`

export const Categories = styled.p`
  font-weight: 600px;
  font-size: 16px;
  span {
    color: ${({ theme }) => theme.colors.textLight};
  }
`
