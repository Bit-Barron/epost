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
  async register(@Body() body: CreateUserDto) {
    const user = await this.authService.register(body.email, body.password);
    return user;
  }

  @Post('/login')
  async signin(@Body() body: CreateUserDto) {
    const user = await this.authService.login(body.email, body.password);
    return user;
  }
}
