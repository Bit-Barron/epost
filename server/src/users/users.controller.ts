import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class UsersController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(@Body() body: CreateUserDto) {
    const user = await this.authService.register(body);
    return user;
  }

  @Post('/login')
  async login(@Body() body: CreateUserDto, @Res() res: Response) {
    const user = await this.authService.login(body);
    console.log(`User with ID ${user.user.id} logged in`);
    const cookie = res
      .cookie('jwt', user.token, { httpOnly: true })
      .get('set-cookie');
    res.send(user);

    return { cookie, user };
  }

  @Post('/logout')
  async logout(@Res() res: Response) {
    res.clearCookie('jwt');
    return res.send('logout');
  }
}
