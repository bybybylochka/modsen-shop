import { useGetProductsQuery } from '@/api'
import { SearchParams } from '@/components/SearchProducts/types'
import { useMemo, useState } from 'react'

const useSearchProducts = () => {
  const { data: allProducts, isLoading, error } = useGetProductsQuery()
  const [searchParams, setSearchParams] = useState<SearchParams>({
    search: '',
    category: '',
    sort: '',
    min: 0,
    max: 1000,
  })

  const filteredProducts = useMemo(() => {
    return allProducts?.filter((product) => {
      const searchMatch = product.title
        .toLowerCase()
        .includes(searchParams.search.toLowerCase())
      const categoryMatch = searchParams.category
        ? product.category === searchParams.category
        : true
      const priceMatch =
        (searchParams.min === null || product.price >= searchParams.min) &&
        (searchParams.max === null || product.price <= searchParams.max)
      return searchMatch && categoryMatch && priceMatch
    })
  }, [allProducts, searchParams])

  const sortedProducts = useMemo(() => {
    if (searchParams.sort === 'priceAsc') {
      return filteredProducts?.sort((a, b) => a.price - b.price)
    } else if (searchParams.sort === 'priceDesc') {
      return filteredProducts?.sort((a, b) => b.price - a.price)
    } else {
      return filteredProducts
    }
  }, [filteredProducts, searchParams.sort])

  return {
    searchParams,
    setSearchParams,
    products: sortedProducts,
    isLoading,
    error,
  }
}

export default useSearchProducts
