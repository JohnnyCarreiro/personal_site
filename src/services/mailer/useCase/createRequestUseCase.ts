import { RequestVisit } from "../entities/Contact"
import { IMailProvider } from "../providers/IMailProvider"
import { IRequestVisitDTO } from "./IRequestVisitDTO"



export class CreateRequestUseCase {
    constructor(
        private mailProvider: IMailProvider
    ){}

    async execute(data:IRequestVisitDTO):Promise<RequestVisit>{
      const newContact = new RequestVisit(data)
        try {
          await this.mailProvider.sendMail({
              to:{
                name:data.name,
                address: data.email
              },
              from:{
                name:'Johnny Carreiro',
                address:'johnny@johnnycarreiro.com'
              },
              subject:`Johnny Carreiro - ${data.subject}`,
              body:`Recebemos sua Mensagem: ${data.message}`
          })
          await this.mailProvider.sendMail({
              to:{
                name:'Johnny Carreiro',
                address:'johnny@johnnycarreiro.com'
              },
              from:{
                name:data.name,
                address: data.email
              },
              subject:`Contato do Site - ${data.subject}`,
              body:`Nome: ${data.name}, telefone: ${data.phone}, empresa: ${data.company},
              mensagem: ${data.message} `
          })
          return (newContact)
        } catch (error) {
            throw new Error('Unexpected error whiling Send new contact email')
        }
    }
}
