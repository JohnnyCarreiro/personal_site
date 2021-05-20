import { useCallback, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import axios from 'axios'

import { Container } from './styles'
import { Input } from 'components/Input'
import getValidationErrors from 'utils/getValidationErrors'
import Button from 'components/Button'
import { TextArea } from 'components/TextArea'

interface SignInFormData {
  name: string
  email:string
  phone:number
  company:string
  subject:string
  message:string
}
interface FormFieldProps {
  form_fields: {
    name_label: string
    name_field: string
    email_label: string
    email_field: string
    phone_label: string
    phone_field: string
    company_label: string
    company_field: string
    subject_label: string
    subject_field: string
    message_label: string
    message_field: string
    whatsapp_message: string
  }
}

export const RequestForm:React.FC<FormFieldProps> = ({ form_fields }) => {
  const {
    name_label,
    name_field,
    email_label,
    email_field,
    phone_label,
    phone_field,
    company_label,
    company_field,
    subject_label,
    subject_field,
    message_label,
    message_field,
   } = form_fields
  const formRef = useRef<FormHandles>(null)

  const history = useRouter()
  const { locale } = useRouter()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = useCallback( async (data: SignInFormData) =>{
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name:Yup.string()
          .min(3, String(locale === 'en-us'
            ? 'The name should have at least 3 characters'
            : 'O Nome deve ter mais que 3 caracteres.'
          ))
          .required(String(locale === 'en-us'
            ? 'Name is mandatory'
            : 'Nome obrigatório'
          )),
        email:Yup.string()
          .required(String(locale === 'en-us'
            ? 'Email is mandatory'
            : 'E-mail obrigatório'
          ))
          .email(String(locale === 'en-us'
            ? 'Insert a valid email address'
            : 'Insira um e-mail válido'
          )),
        phone:Yup.number()
          .required(String(locale === 'en-us'
            ? 'Phone number is mandatory'
            : 'Telefone obrigatório'
          )),
        company:Yup.string()
          .optional(),
        subject:Yup.string()
          .required(String(locale === 'en-us'
            ? 'Subject is mandatory'
            : 'Assunto obrigatório'
          )),
        message:Yup.string()
          .required(String(locale === 'en-us'
            ? 'Message is mandatory'
            : 'Messagem obrigatório'
          )),

      })
      await schema.validate(data, {
        abortEarly:false
      })
      const response = await axios.post('/api/submit', data)
      if(response.status === 200 ){
        setName('')
        setEmail('')
        setPhone('')
        setCompany('')
        setSubject('')
        setMessage('')
        history.push('/')
      }

    } catch (err){
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors)

        return
      }
    }
  },[history])

  return (
    <Container>
     <Form ref={formRef} onSubmit={handleSubmit} >
        <Input
          name="name"
          type="text"
          label={name_label}
          placeholder={name_field}
          onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setName(event.target.value)}}
          value={name}
        />
        <Input
          name="email"
          type="email"
          label={email_label}
          placeholder={email_field}
          onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setEmail(event.target.value)}}
          value={email}
        />
        <Input
          name="phone"
          type="number"
          label={phone_label}
          placeholder={phone_field}
          onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setPhone(event.target.value)}}
          value={phone}
        />
        <Input
          name="company"
          type="text"
          label={company_label}
          placeholder={company_field}
          onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setCompany(event.target.value)}}
          value={company}
        />
        <Input
          name="subject"
          type="text"
          label={subject_label}
          placeholder={subject_field}
          onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setSubject(event.target.value)}}
          value={subject}
        />
        <TextArea
          name="message"
          type="text"
          label={message_label}
          placeholder={message_field}
          onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setMessage(event.target.value)}}
          value={message}
        />
        { locale === 'en-us'
          ? (<Button text="Send" isPrimary primaryColor type="submit" />)
          : (<Button text="Enviar" isPrimary primaryColor type="submit" />)
        }

      </Form>
    </Container>
  );
};


