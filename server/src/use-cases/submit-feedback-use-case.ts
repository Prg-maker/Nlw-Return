
import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repository/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest{
  type:string;
  comment:string;
  screenshot?:string;
}

export class SubmitFeedbackUseCase{


  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ){}

  async execute(request:SubmitFeedbackUseCaseRequest ){

    const {type , comment , screenshot} = request

    if(!type ){
      throw new Error('Type is required')
    }
    if(!comment ){
      throw new Error('Type is required')
    }

    if(screenshot && !screenshot.startsWith('data:image/png;base64')){
      throw new Error('Invalid screenshot format')
    }

    await this.feedbacksRepository.create(
      {
        comment,
        type,
        screenshot
      }
    )
    
    await this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body:[
        `<div style="font-family: sans-serif; font-size: 16p>; color: #222;"`,
        `<p>Tipo do feeback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`,
  
      ].join('\n')

    })

  }
}