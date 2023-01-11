import { Controller, Post } from '@nestjs/common';
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
  register(@Body() body: CreateUserDto) {
    const res = this.authService.register(body.email, body.password);
    return res;
  }
}
