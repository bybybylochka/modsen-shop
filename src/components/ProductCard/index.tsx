import { useState, FC } from 'react'
import {
  Categories,
  Cost,
  Description,
  ImageThumbnail,
  ImagesColumn,
  InfoColumn,
  MainImage,
  Name,
  ProductCardContainer,
} from './styled'
import { nanoid } from 'nanoid'
import Rating from './components/Rating'
import { Product } from './types'

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  return (
    <ProductCardContainer>
      <ImagesColumn>
        {product.images.map((image, index) => (
          <ImageThumbnail
            key={nanoid()}
            isActive={index === activeImageIndex}
            onClick={() => setActiveImageIndex(index)}
          >
            <img src={image} alt={`Product ${index}`} />
          </ImageThumbnail>
        ))}
      </ImagesColumn>
      <MainImage>
        <img src={product.images[activeImageIndex]} alt={product.name} />
      </MainImage>
      <InfoColumn>
        <Name>{product.name}</Name>
        <Cost>{product.cost}</Cost>
        <Rating rating={product.rating} />
        <Description>{product.description}</Description>
        <Categories>
          Categories: <span>{product.category}</span>
        </Categories>
      </InfoColumn>
    </ProductCardContainer>
  )
}

export default ProductCard
