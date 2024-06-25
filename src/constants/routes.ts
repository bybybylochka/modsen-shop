import ContactUsForm from '@/components/ContactUsForm'
import Home from '@/pages/Home'
import Shop from '@/pages/Shop'
import Authorization from '@/pages/Authorization'
import Error from '@/pages/Error'
import ProductInfo from '@/pages/Product'
import ShoppingCart from '@/pages/ShoppingCart'

export const routes = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/shop',
    element: Shop,
  },
  {
    path: '/contact-us',
    element: ContactUsForm,
  },
  {
    path: '/product/:id',
    element: ProductInfo,
  },
  {
    path: '/login',
    element: Authorization,
  },
  {
    path: '/error',
    element: Error,
  },
  {
    path: '/cart',
    element: ShoppingCart,
  },
]
