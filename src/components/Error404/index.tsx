import React from 'react'
import {
  ErrorButton,
  ErrorContainer,
  ErrorDescription,
  ErrorTitle,
} from './styled'

const Error404 = () => {
  return (
    <ErrorContainer>
      <ErrorTitle>404 Error</ErrorTitle>
      <ErrorDescription>
        This page not found; back to home and start again
      </ErrorDescription>
      <ErrorButton>HOMEPAGE</ErrorButton>
    </ErrorContainer>
  )
}

export default Error404
