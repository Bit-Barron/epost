import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { FastifyReply } from 'fastify';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { AuthGuard } from '../app_modules/guard/auth.guard';
import { COOKIE_NAME, COOKIE_SERIALIZE_OPTIONS } from '../constants';
import { CreateUserDto } from '../user/dtos/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userRepository: Repository<User>,
  ) {}

  @Post('/register')
  async register(@Body() body: CreateUserDto) {
    const user = await this.authService.register(body);
    return user;
  }

  @Post('/login')
  async login(
    @Body() body: CreateUserDto,
    // pass the reply object to set the cookie, not working if passthrough is false
    @Res({ passthrough: true }) reply: FastifyReply,
  ) {
    const user = await this.authService.login(body);

    reply.setCookie(COOKIE_NAME, user.token, COOKIE_SERIALIZE_OPTIONS);

    return user;
  }

  @Post('/logout')
  async logout(@Res() reply: FastifyReply) {
    reply.clearCookie(COOKIE_NAME, COOKIE_SERIALIZE_OPTIONS);

    return true;
  }

  @UseGuards(AuthGuard)
  @Get('/test')
  test() {
    return 'test';
  }

  @Post('change-password')
  async changePassword(
    @Body('userId') userId: string,
    @Body('currentPassword') currentPassword: string,
    @Body('newPassword') newPassword: string,
  ) {
    const user = await this.authService.findOne('');
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    if (user.password !== currentPassword) {
      throw new HttpException('Incorrect password', HttpStatus.UNAUTHORIZED);
    }

    user.password = newPassword;
    await this.userRepository.save(user);

    return { message: 'Password changed successfully' };
  }
}
