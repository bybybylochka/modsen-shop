import React, { useState } from 'react'
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

const SearchForm = () => {
  const initialValues = {
    search: '',
    category: '',
    sort: '',
  }
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100 })
  const handleSubmit = (values: typeof initialValues) => {
    console.log({ ...values, ...priceRange })
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
              <option value="option1">Clothes</option>
              <option value="option2">Jewelry</option>
            </Field>

            <Field
              as={SearchSelectField}
              id="sort"
              name="sort"
              value={values.sort}
            >
              <option value="">Sort by</option>
              <option value="option3">Date</option>
              <option value="option4">Cost</option>
            </Field>
            <div>
              <PriceRange
                min={0}
                max={100}
                step={5}
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
