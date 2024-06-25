import { useState, FC } from 'react'
import { CartItem } from './types'
import Image from '@assets/test/image1.png'
import {
  BuyNowButton,
  CartContainer,
  CartItemContainer,
  CartTitle,
  CartTotal,
  CartItems,
  ItemImage,
  ItemInfo,
  ItemPrice,
  ItemTitle,
  QuantityControls,
  RemoveItem,
} from './styled'

const Cart: FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      image: Image,
      name: 'Product 1',
      price: 19.99,
      quantity: 1,
    },
    {
      id: '2',
      image: Image,
      name: 'Product 2',
      price: 24.99,
      quantity: 2,
    },
  ])

  const handleQuantityChange = (itemId: string, change: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + change }
          : item
      )
    )
  }

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId))
  }

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  }

  return (
    <CartContainer>
      <CartTitle>Cart</CartTitle>
      <CartItems>
        {cartItems.map((item) => (
          <CartItemContainer key={item.id}>
            <ItemImage>
              <img src={item.image} alt={item.name} />
            </ItemImage>
            <ItemInfo>
              <ItemTitle>{item.name}</ItemTitle>
              <QuantityControls>
                <button onClick={() => handleQuantityChange(item.id, -1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>
                  +
                </button>
              </QuantityControls>
              <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
            </ItemInfo>
            <RemoveItem>
              <button onClick={() => handleRemoveItem(item.id)}>x</button>
            </RemoveItem>
          </CartItemContainer>
        ))}
      </CartItems>
      <CartTotal>
        <div>Total: ${getTotalPrice().toFixed(2)}</div>
        <BuyNowButton>Buy Now</BuyNowButton>
      </CartTotal>
    </CartContainer>
  )
}

export default Cart
