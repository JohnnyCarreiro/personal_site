import { NextApiRequest, NextApiResponse } from "next";
import { CreateRequestUseCase } from "./createRequestUseCase";

export class CreateRequestController{
    constructor(
        private createRequestUseCase: CreateRequestUseCase
    ){}
    async handle(request:NextApiRequest, _:NextApiResponse):Promise<void>{
        const { name, email, phone, company, subject,message } = request.body

        try{
            await this.createRequestUseCase.execute({name, email, phone, company,subject,message})
        }catch(err){
             throw new Error(err)
        }
    }
}
