
import { Router } from 'express';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from './repository/prisma/prisma-feedbacks-repository';
import { NodemailerMailAdapter } from './nodemailer/nodemailer-mail-adapter';

const routes = Router()






routes.post('/feedbacks' , async (req , res)=> {

  const {type , comment , screenshot} = req.body

  const prismaFeedbackRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository , nodemailerMailAdapter)


  await submitFeedbackUseCase.execute(
    {
      type,
      comment,
      screenshot
    }
  )

    return res.status(201).send()
})




export {routes}