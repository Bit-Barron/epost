import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { UsersService } from './users.service';
import { CreateUserDto } from '../users/dtos/create-user.dto';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/register')
  async register(@Body() body: CreateUserDto) {
    const user = await this.usersService.create(body.email, body.password);
    console.log(user);
  }
}
