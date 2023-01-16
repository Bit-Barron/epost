import { Controller, Post, Body, Res, Req } from '@nestjs/common';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';
import { Response } from 'express';
import { Request } from 'express';

@Controller('auth')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('/register')
  async register(@Body() body: CreateUserDto) {
    const user = await this.authService.register(body.email, body.password);
    console.log(user.id);
    return user;
  }

  @Post('/login')
  async login(
    @Body() body: CreateUserDto,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const user = await this.authService.login(body.email, body.password);
    const cookie = res.cookie('jwt', user.token, { httpOnly: true });
    res.send(user);
    console.log(cookie);
    return { cookie, user };
  }
}
