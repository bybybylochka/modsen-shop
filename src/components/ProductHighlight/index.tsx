import React from 'react'
import {
  HighlightCard,
  HighlightCardImage,
  HighlightCardImageContainer,
  HighlightCardInfo,
  HighlightCardOverlay,
  HighlightCardOverlayButton,
} from './styled'
import ProductImage from '@assets/test/image1.png'
import { useNavigate } from 'react-router-dom'

const ProductHighlight = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    const id = 1
    navigate(`/product/${id}`)
  }
  return (
    <HighlightCard onClick={handleClick}>
      <HighlightCardImageContainer>
        <HighlightCardImage src={ProductImage} alt="image" />
        <HighlightCardOverlay>
          <HighlightCardOverlayButton>Add to Cart</HighlightCardOverlayButton>
        </HighlightCardOverlay>
      </HighlightCardImageContainer>
      <HighlightCardInfo>
        <p>Hair Pin Set of 3</p>
        <p>300 $</p>
      </HighlightCardInfo>
    </HighlightCard>
  )
}

export default ProductHighlight
