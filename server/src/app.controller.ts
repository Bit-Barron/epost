import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  async createUser(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    const user = await this.appService.prisma.user.create({
      data: {
        username,
        password,
      },
    });

    return user;
  }
}
