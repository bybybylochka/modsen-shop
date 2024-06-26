export interface Product {
  id: string
  title: string
  description: string
  price: number
  category: string
  image: string
  rating?: {
    count: number
    rate: number
  }
}
