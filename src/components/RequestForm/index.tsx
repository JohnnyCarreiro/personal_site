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

export function RequestForm() {
  const formRef = useRef<FormHandles>(null)

  const history = useRouter()

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
          .required('Nome obrigatório')
          .min(3, 'O Nome deve ter mais que 3 caracteres.'),
        email:Yup.string()
          .required('E-mail obrigatório')
          .email('Insira um e-mail válido'),
        phone:Yup.number()
          .required('E-mail obrigatório'),
        company:Yup.string()
          .optional(),
        subject:Yup.string()
          .required('Assunto obrigatório'),
        message:Yup.string()
          .required('Messagem obrigatório'),

      })
      await schema.validate(data, {
        abortEarly:false
      })
      const response = await axios.post('/api/submit', data)
      if(response.status === 200 ){
        console.log('200')
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
          placeholder="Nome"
          onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setName(event.target.value)}}
          value={name}
        />
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setEmail(event.target.value)}}
          value={email}
        />
        <Input
          name="phone"
          type="phone"
          placeholder="Telefone"
          onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setPhone(event.target.value)}}
          value={phone}
        />
        <Input
          name="company"
          type="text"
          placeholder="Empresa"
          onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setCompany(event.target.value)}}
          value={company}
        />
        <Input
          name="subject"
          type="text"
          placeholder="Assunto"
          onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setSubject(event.target.value)}}
          value={subject}
        />
        <TextArea
          name="message"
          type="text"
          placeholder="Mensagem"
          onChange={(event:React.ChangeEvent<HTMLInputElement>) => {setMessage(event.target.value)}}
          value={message}
        />
        <Button text="Enviar" isPrimary primaryColor type="submit" />
      </Form>
    </Container>
  );
};


