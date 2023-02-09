import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: '1bit.baron@gmail.com',
      pass: 'enkdgpjljbkyraag',
    },
  });

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    const message = {
      from: '1bit.baron@gmail.com',
      to: 'lolha6773@gmail.com',
      subject: 'asdasd',
      text: 'awsdasd',
    };

    await this.transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Email sent:', info);
      }
    });
  }
}
