import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import { CreateMailDto } from './dtos/create-mail.dto';

@Injectable()
export class MailService {
  private transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: '1bit.baron@gmail.com',
      pass: 'enkdgpjljbkyraag      ',
    },
  });

  async sendEmail(createmaildto: CreateMailDto): Promise<void> {
    const message = {
      from: '1bit.baron@gmail.com',
      to: `${createmaildto.email}`,
      subject: `${createmaildto.subject}`,
      text: `${createmaildto.text}`,
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
