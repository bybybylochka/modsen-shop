import React from 'react'
import {
  LoginButton,
  LoginContainer,
  LoginField,
  LoginFormContainer,
  LoginTitle,
} from './styled'
import { Field, Form, Formik } from 'formik'

const Login = () => {
  return (
    <LoginContainer>
      <LoginTitle>Login</LoginTitle>
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <LoginFormContainer>
            <Field name="login" placeholder="Login" as={LoginField} />
            <Field name="password" placeholder="Password" as={LoginField} />
            <LoginButton type="submit">Login</LoginButton>
          </LoginFormContainer>
        </Form>
      </Formik>
    </LoginContainer>
  )
}

export default Login
