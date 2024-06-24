import styled, { css } from 'styled-components'
import FullStar from '@assets/icons/fullStar.png'
import EmptyStar from '@assets/icons/emptyStar.png'

export const StarContainer = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`
const Star = css`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
`

export const StarFull = styled.div`
  ${Star}
  background-image: url(${FullStar});
`

export const StarEmpty = styled.div`
  ${Star}
  background-image: url(${EmptyStar});
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Count = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textLight};
  margin-left: 10px;
`
