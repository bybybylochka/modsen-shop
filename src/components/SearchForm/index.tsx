import React from 'react'
import { Field, Form, Formik } from 'formik'
import {
  SearchButton,
  SearchFormContainer,
  SearchInputContainer,
  SearchInputField,
  SearchSelectField,
} from './styled'
import SearchImage from '../../assets/icons/search.png'

const SearchForm = () => {
  const initialValues = {
    search: '',
    select1: '',
    select2: '',
  }

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values)
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
              id="select1"
              name="select1"
              value={values.select1}
            >
              <option value="">Shop by</option>
              <option value="option1">Clothes</option>
              <option value="option2">Jewelry</option>
            </Field>

            <Field
              as={SearchSelectField}
              id="select2"
              name="select2"
              value={values.select2}
            >
              <option value="">Sort by</option>
              <option value="option3">Date</option>
              <option value="option4">Cost</option>
            </Field>
            <button type="submit">Filter</button>
          </SearchFormContainer>
        </Form>
      )}
    </Formik>
  )
}

export default SearchForm
