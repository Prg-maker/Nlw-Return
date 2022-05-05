import { MailAdapter, SendMailDate } from "../adapters/mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "01a6f0502ce6e7",
    pass: "1487778b6dcbde"
  }
});


export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({
    body,
    subject
  }: SendMailDate){


    await transport.sendMail({

      from:"Equipe Feedback <oi@feedback.com>",
      to:"Daniel Fernandes <df3296709@gmail.com>",
      subject,
      html: body,
    })
  }
}