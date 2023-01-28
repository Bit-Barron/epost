import { Controller, Get, Post, UseGuards } from '@nestjs/common';

import { AuthGuard } from '../app_modules/guard/auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/test')
  @UseGuards(AuthGuard)
  async dashboard() {
    return 'test';
  }

  @Get('/user')
  getUser() {
    return 'asd';
  }
}
