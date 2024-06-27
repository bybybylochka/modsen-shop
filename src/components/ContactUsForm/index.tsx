import { Field, Form, Formik } from 'formik'
import React from 'react'
import {
  ContactUsButton,
  ContactUsDescription,
  ContactUsField,
  ContactUsFormContainer,
  ContactUsTitle,
  InputContainer,
} from './styled'
import { init, sendForm } from 'emailjs-com'

const ContactUsForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  }
  const apiKey = process.env.REACT_APP_API_KEY || ''
  const serviseId = process.env.REACT_APP_SERVICE_ID || ''
  const templateId = process.env.REACT_APP_TEMPLATE_ID || ''
  init(apiKey)
  const handleSubmit = () => {
    sendForm(serviseId, templateId, '#contact-us-form').then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text)
      },
      (error) => {
        console.log('FAILED...', error)
      }
    )
  }
  return (
    <>
      <ContactUsTitle>Contact Us</ContactUsTitle>
      <ContactUsDescription>
        Say Hello send us your thoughts about our products or share your ideas
        with our Team!
      </ContactUsDescription>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form id={'contact-us-form'}>
          <ContactUsFormContainer>
            <InputContainer>
              <Field
                name="firstName"
                placeholder="First name"
                as={ContactUsField}
              />
              <Field
                name="lastName"
                placeholder="Last name"
                as={ContactUsField}
              />
            </InputContainer>
            <InputContainer>
              <Field name="email" placeholder="Email" as={ContactUsField} />
              <Field name="subject" placeholder="Subject" as={ContactUsField} />
            </InputContainer>
            <Field name="message" placeholder="Message" as={ContactUsField} />
            <ContactUsButton type="submit">Send</ContactUsButton>
          </ContactUsFormContainer>
        </Form>
      </Formik>
    </>
  )
}

export default ContactUsForm
