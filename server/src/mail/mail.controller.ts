import { Body, Controller, Post } from '@nestjs/common';
import { CreateMailDto } from './dtos/create-mail.dto';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('/send-email')
  async sendEmail(@Body() createmaildto: CreateMailDto): Promise<void> {
    console.log(createmaildto.email);
    await this.mailService.sendEmail(createmaildto);
  }
}
