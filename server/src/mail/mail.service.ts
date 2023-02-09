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
      pass: 'enkdgpjljbkyraag',
    },
  });

  async sendEmail(createmaildto: CreateMailDto): Promise<void> {
    const message = {
      from: '1bit.baron@gmail.com',
      to: `${createmaildto.email}`,
      subject: `asd`,
      text: `asd`,
    };

    this.transporter.sendMail(message, (err, info) => {
      if (err) {
        console.error(err);
      } else {
        console.error('Email sent:', info);
      }
    });
  }
}
