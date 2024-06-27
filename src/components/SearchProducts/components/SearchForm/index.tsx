import { useState, FC } from 'react'
import { Field, Form, Formik } from 'formik'
import {
  SearchButton,
  SearchFormContainer,
  SearchInputContainer,
  SearchInputField,
  SearchSelectField,
} from './styled'
import SearchImage from '@assets/icons/search.png'
import PriceRange from '../PriceRange'
import { SearchFormProps } from '../../types'
import { nanoid } from 'nanoid'
import { Categories, SortOptions, priceRangeParams } from './constants'

const SearchForm: FC<SearchFormProps> = ({ searchParams, setSearchParams }) => {
  const initialValues = { ...searchParams }
  const [priceRange, setPriceRange] = useState({
    min: priceRangeParams.min,
    max: priceRangeParams.max,
  })
  const handleSubmit = (values: typeof initialValues) => {
    setSearchParams({ ...values, ...priceRange })
  }

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <SearchFormContainer>
            <SearchInputContainer>
              <Field
                as={SearchInputField}
                type="text"
                id="search"
                name="search"
                placeholder="Search..."
                value={values.search}
              />
              <SearchButton>
                <img src={SearchImage} alt="search icon" />
              </SearchButton>
            </SearchInputContainer>
            <Field
              as={SearchSelectField}
              id="category"
              name="category"
              value={values.category}
            >
              <option value="">Shop by</option>
              {Categories.map((category) => (
                <option key={nanoid()} value={category.value}>
                  {category.text}
                </option>
              ))}
            </Field>

            <Field
              as={SearchSelectField}
              id="sort"
              name="sort"
              value={values.sort}
            >
              <option value="">Sort by</option>
              {SortOptions.map((option) => (
                <option key={nanoid()} value={option.value}>
                  {option.text}
                </option>
              ))}
            </Field>
            <div>
              <PriceRange
                min={priceRangeParams.min}
                max={priceRangeParams.max}
                step={priceRangeParams.step}
                value={priceRange}
                onChange={setPriceRange}
              />
              <p>
                <span>{priceRange.min}</span> $ -<span>{priceRange.max}</span> $
              </p>
            </div>
            <button type="submit">Filter</button>
          </SearchFormContainer>
        </Form>
      )}
    </Formik>
  )
}

export default SearchForm
