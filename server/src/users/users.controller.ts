import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

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
  async login(@Body() body: CreateUserDtom, @Req() req, @Res() res) {
    console.log(request.cookies);
    const user = await this.authService.login(body.email, body.password);
    return user;
  }
}
