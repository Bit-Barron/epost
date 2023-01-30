import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { FastifyRequest } from 'fastify';

import { AuthGuard } from '../app_modules/guard/auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/dashboard')
  @UseGuards(AuthGuard)
  async dashboard() {
    return 'test';
  }

  @UseGuards(AuthGuard)
  @Get('/user')
  getUser(@Req() req: FastifyRequest) {
    console.log(req.user);
    return req.user;
  }

  @UseGuards(AuthGuard)
  @Get('/all')
  findAll(@Req() req: FastifyRequest) {
    console.log(req.user);
    return req.user.email;
  }
  @UseGuards(AuthGuard)
  @Get('/test')
  test() {
    return 'test';
  }
}
