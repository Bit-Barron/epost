import { Controller, Post, Session } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { UsersService } from './users.service';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import { AuthService } from './auth.service';
@Controller('auth')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Post('/register')
  async register(@Body() body: CreateUserDto, @Session() sessions: any) {
    const res = await this.authService.register(body.email, body.password);
    sessions.userId = res.id;
    return res;
  }
}
