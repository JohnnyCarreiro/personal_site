import { useCallback, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

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
  about:string
}

export function RequestForm() {
  const formRef = useRef<FormHandles>(null)

  const history = useHistory()

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
        about:Yup.string()
          .required('Messagem obrigatório'),

      })
      await schema.validate(data, {
        abortEarly:false
      })
      console.log(data)
      history.push('/')

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
     <Form ref={formRef}onSubmit={handleSubmit} >
        <Input
          name="name"
          type="text"
          placeholder="Nome"
        />
        <Input
          name="email"
          type="email"
          placeholder="E-mail"
        />
        <Input
          name="phone"
          type="phone"
          placeholder="Telefone"
        />
        <Input
          name="company"
          type="text"
          placeholder="Empresa"
        />
        <Input
          name="subject"
          type="text"
          placeholder="Assunto"
        />
        <TextArea
          name="about"
          type="text"
          placeholder="Mensagem"
        />
        <Button text="Enviar" isPrimary primaryColor type="submit" />
      </Form>
    </Container>
  );
};


