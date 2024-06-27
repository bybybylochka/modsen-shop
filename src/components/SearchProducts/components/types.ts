export interface PriceRangeProps {
  min: number
  max: number
  value?: { min: number; max: number }
  step: number
  onChange: (value: { min: number; max: number }) => void
}
