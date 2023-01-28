import { Body, Controller, Post, Res } from '@nestjs/common';
import { Req, UseGuards } from '@nestjs/common/decorators';
import { Response } from 'express';
import { FastifyReply, FastifyRequest } from 'fastify';
import { AuthGuard } from '../app_modules/guard/auth.guard';
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
    @Res({ passthrough: true }) res: FastifyReply,
  ) {
    const user = await this.authService.login(body);

    res.setCookie(COOKIE_NAME, user.token, { httpOnly: true });

    return user;
  }

  @Post('/logout')
  async logout(@Res() res: Response) {
    res.clearCookie(COOKIE_NAME);

    return true;
  }

  @UseGuards(AuthGuard)
  @Post('/test')
  test(@Req() req: FastifyRequest) {
    console.log(req.user);
    return 'test';
  }
}
