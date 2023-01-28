import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { FastifyReply } from 'fastify';
import { COOKIE_NAME } from '../constants';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(@Body() body: CreateUserDto) {
    const user = await this.authService.register(body);
    return user;
  }

  @Post('/login')
  async login(
    @Body() body: CreateUserDto,
    @Res() res: FastifyReply,
    @Req() req: FastifyReply,
  ) {
    const user = await this.authService.login(body);
    return user;
  }

  @Post('/logout')
  async logout(@Res() res: Response) {
    res.clearCookie(COOKIE_NAME);

    return true;
  }

  @Post('/test')
  test() {
    return 'test';
  }
}
