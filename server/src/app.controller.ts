import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();
@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('create')
  async create(@Body() body: any) {
    const { username, password } = body;
    return await prisma.user.create({
      data: {
        username,
        password,
      },
    });
  }

  @Post('login')
  async login(@Body() body: any) {
    const { username, password } = body;
    return await prisma.user.findFirst({
      where: {
        username,
        password,
      },
    });
  }
}
