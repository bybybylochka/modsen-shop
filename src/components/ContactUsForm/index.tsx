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

const ContactUsForm = () => {
  return (
    <>
      <ContactUsTitle>Contact Us</ContactUsTitle>
      <ContactUsDescription>
        Say Hello send us your thoughts about our products or share your ideas
        with our Team!
      </ContactUsDescription>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: '',
        }}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
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
