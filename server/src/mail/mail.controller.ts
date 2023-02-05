import { Body, Controller, Post } from '@nestjs/common';
import nodemailer from 'nodemailer';
import { CreateMailDto } from './dtos/create-mail.dto';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  private readonly transporter: nodemailer.Transporter;
  constructor(private readonly mailService: MailService) {}

  @Post('/get-mail')
  getMail(@Body() body: CreateMailDto) {
    return body.mail;
  }
}
