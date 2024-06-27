export interface PriceRangeProps {
  min: number
  max: number
  value?: { min: number; max: number }
  step: number
  onChange: (value: { min: number; max: number }) => void
}
export type SearchParams = {
  search: string
  category: string
  sort: string
  min: number
  max: number
}
export interface SearchFormProps {
  searchParams: SearchParams
  setSearchParams: React.Dispatch<React.SetStateAction<SearchParams>>
}
