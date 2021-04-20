import { NextApiRequest, NextApiResponse } from 'next'
import { createRequestController } from '../../services/mailer/useCase'

export default async (request:NextApiRequest, response:NextApiResponse) => {

  try {
     await createRequestController.handle(request,response)
     response.json({ok: 'mensagem enviada'})
  } catch (error) {
    response.status(500).json({error})
  }
}
