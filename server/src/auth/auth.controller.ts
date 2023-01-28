import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';
import { AuthGuard } from '../app_modules/guard/auth.guard';
import { COOKIE_NAME, COOKIE_SERIALIZE_OPTIONS } from '../constants';
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
    @Res({ passthrough: true }) response: FastifyReply,
  ) {
    const user = await this.authService.login(body);

    response.setCookie(COOKIE_NAME, user.token, COOKIE_SERIALIZE_OPTIONS);

    return user;
  }

  @Post('/logout')
  async logout(@Res() reply: FastifyReply) {
    reply.clearCookie(COOKIE_NAME);

    return true;
  }

  @UseGuards(AuthGuard)
  @Get('/test')
  test(@Req() req: FastifyRequest) {
    console.log(req.user);
    return 'test';
  }
}
