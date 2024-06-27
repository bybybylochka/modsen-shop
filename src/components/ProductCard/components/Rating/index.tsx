import { FC } from 'react'
import { nanoid } from 'nanoid'
import { RatingProps } from '../../types'
import {
  Count,
  RatingContainer,
  StarContainer,
  StarEmpty,
  StarFull,
} from './styled'
import { sideImagesCount } from './constants'

const Rating: FC<RatingProps> = ({ rating }) => {
  return (
    <RatingContainer>
      {[...Array(sideImagesCount)].map((_, index) => (
        <StarContainer key={nanoid()}>
          {index < Math.round(rating.rate) ? <StarFull /> : <StarEmpty />}
        </StarContainer>
      ))}
      <Count>{rating.count} customers review</Count>
    </RatingContainer>
  )
}

export default Rating
