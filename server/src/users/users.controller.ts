import { Controller, Post, Body, Res, UseGuards } from '@nestjs/common';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { AuthGuard } from '../guard/auth.guard';

@Controller('auth')
export class UsersController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(@Body() body: CreateUserDto) {
    const user = await this.authService.register(body.email, body.password);
    return user;
  }

  @Post('/login')
  async login(@Body() body: CreateUserDto, @Res() res: Response) {
    const user = await this.authService.login(body.email, body.password);
    const cookie = res
      .cookie('jwt', user.token, { httpOnly: true })
      .get('set-cookie');
    res.send(user);

    return { cookie, user };
  }

  @Post('/dashboard')
  @UseGuards(AuthGuard)
  async dashboard() {
    return 'test';
  }

  @Post('/logout')
  async logout(@Res() res: Response) {
    res.clearCookie('jwt');
    return res.send('logout');
  }
}
