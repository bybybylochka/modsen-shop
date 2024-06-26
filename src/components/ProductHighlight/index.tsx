import React, { FC } from 'react'
import {
  HighlightCard,
  HighlightCardImage,
  HighlightCardImageContainer,
  HighlightCardInfo,
  HighlightCardOverlay,
  HighlightCardOverlayButton,
} from './styled'
import { Product } from '@/types'
import { useNavigate } from 'react-router-dom'

const ProductHighlight: FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    const id = 1
    navigate(`/product/${id}`)
  }
  return (
    product && (
      <HighlightCard onClick={handleClick}>
        <HighlightCardImageContainer>
          <HighlightCardImage src={product.image} alt="image" />
          <HighlightCardOverlay>
            <HighlightCardOverlayButton>Add to Cart</HighlightCardOverlayButton>
          </HighlightCardOverlay>
        </HighlightCardImageContainer>
        <HighlightCardInfo>
          <p>{product.title}</p>
          <p>{product.price} $</p>
        </HighlightCardInfo>
      </HighlightCard>
    )
  )
}

export default ProductHighlight
