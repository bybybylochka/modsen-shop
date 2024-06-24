export interface RatingProps {
  rating: {
    rate: number
    count: number
  }
}

export interface Product {
  id: string
  name: string
  cost: string
  rating: {
    rate: number
    count: number
  }
  description: string
  category: string
  images: string[]
}
