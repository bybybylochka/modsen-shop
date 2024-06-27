import { useEffect, useState, FC } from 'react'
import {
  Control,
  ControlWrapper,
  InnerRail,
  Input,
  InputWrapper,
  Rail,
  SliderWrapper,
} from './styled'
import { PriceRangeProps } from '../types'

const PriceRange: FC<PriceRangeProps> = ({
  min,
  max,
  value,
  step,
  onChange,
}) => {
  const [minValue, setMinValue] = useState(value?.min || min)
  const [maxValue, setMaxValue] = useState(value?.max || max)

  useEffect(() => {
    if (value) {
      setMinValue(value.min)
      setMaxValue(value.max)
    }
  }, [value])

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newMinVal = Math.min(+e.target.value, maxValue - step)
    if (!value) setMinValue(newMinVal)
    onChange({ min: newMinVal, max: maxValue })
  }

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const newMaxVal = Math.max(+e.target.value, minValue + step)
    if (!value) setMaxValue(newMaxVal)
    onChange({ min: minValue, max: newMaxVal })
  }

  const minPos = ((minValue - min) / (max - min)) * 100
  const maxPos = ((maxValue - min) / (max - min)) * 100

  return (
    <SliderWrapper>
      <InputWrapper>
        <Input
          type="range"
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMinChange}
        />
        <Input
          type="range"
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxChange}
        />
      </InputWrapper>

      <ControlWrapper>
        <Control style={{ left: `${minPos}%` }} />
        <Rail>
          <InnerRail
            style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
          />
        </Rail>
        <Control style={{ left: `${maxPos}%` }} />
      </ControlWrapper>
    </SliderWrapper>
  )
}

export default PriceRange
