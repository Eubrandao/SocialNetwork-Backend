import { Injectable } from '@nestjs/common';
import { MailService } from "@sendgrid/mail";

@Injectable()
export class NotificationServiceService {
  
  getHello(): string {
    return 'Hello World!';
  }

  async sendWelcome(){
    await this.sendEmail('userInfo.email', process.env.TEMPLATE_WELCOME)

  }

  async recoveryPassword(){
    await this.sendEmail('userInfo.email', process.env.TEMPLATE_PASSWORD)
  }

  async sendEmail(to,template): Promise<void>{
    const sendgridClient = new MailService();
    sendgridClient.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = <any> {
      template_id:template,
      to: to, 
      from: process.env.FROM
    }
      sendgridClient
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
  }

}
