import styled from 'styled-components'

export const CartContainer = styled.div`
  padding: 20px 0;
`
export const CartTitle = styled.p`
  font-size: 33px;
  font-weight: 600;
`

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.border};
  padding: 20px;
`

export const ItemImage = styled.div`
  width: 15%;
  img {
    width: 100%;
    object-fit: cover;
  }
`

export const ItemInfo = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  span {
    font-size: 28px;
  }

  button {
    font-size: 28px;
    background-color: #f0f0f0;
    border: none;
    cursor: pointer;
  }
`
export const ItemTitle = styled.p`
  font-size: 20px;
`
export const ItemPrice = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textHighlight};
  font-size: 24px;
`

export const RemoveItem = styled.div`
  align-self: flex-start;
  button {
    font-size: 36px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #ccc;
  div {
    font-size: 20px;
  }
`

export const BuyNowButton = styled.button`
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.buttonText};
  padding: 10px 30px;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.button};
  text-align: center;
  font-size: 18px;
  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`
