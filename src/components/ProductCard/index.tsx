import { useState } from 'react'
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
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '@/api'
import { Product } from '@/types'

const ProductCard = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const { id } = useParams() as { id: string }
  const { data: product, isLoading, error } = useGetProductByIdQuery(id)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>
  }
  let images: string[] = []
  if (product) {
    images = createImageArray(product)
  }
  return (
    <ProductCardContainer>
      <ImagesColumn>
        {images.map((image, index) => (
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
        <img src={images[activeImageIndex]} alt={product?.title} />
      </MainImage>
      <InfoColumn>
        <Name>{product?.title}</Name>
        <Cost>{product?.price} $</Cost>
        <Rating rating={product?.rating || { rate: 0, count: 0 }} />
        <Description>{product?.description}</Description>
        <Categories>
          Categories: <span>{product?.category}</span>
        </Categories>
      </InfoColumn>
    </ProductCardContainer>
  )
}

export default ProductCard

function createImageArray(originalObject: Product) {
  return Array.from({ length: 5 }, () => originalObject.image)
}
