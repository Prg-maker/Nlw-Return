export interface SendMailDate{
  subject: string;
  body: string;
}

export interface MailAdapter{
  sendMail: (data:SendMailDate)=> Promise<void>
}