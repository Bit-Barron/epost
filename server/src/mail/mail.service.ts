import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  async sendUserConfirmationEmail(user, token: string) {
    const url = `example.com/auth/comfirm?token=${token}`;
  }
}
