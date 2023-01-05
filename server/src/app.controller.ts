import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('create')
  async create(@Body() body: any) {
    const { username, password } = body;
    return await this.prisma.user.create({
      data: {
        username,
        password,
      },
    });
  }

  @Post('login')
  async login(@Body() body: any) {
    const { username, password } = body;
    return await this.prisma.user.findFirst({
      where: {
        username,
        password,
      },
    });
  }
}
