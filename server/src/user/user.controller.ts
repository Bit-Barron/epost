import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FastifyRequest } from 'fastify';
import { Repository } from 'typeorm';

import { AuthGuard } from '../app_modules/guard/auth.guard';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(@InjectRepository(User) private letterRepo: Repository<User>) {}

  @Post('/dashboard')
  @UseGuards(AuthGuard)
  async dashboard() {
    return 'test';
  }

  @UseGuards(AuthGuard)
  @Get('/user')
  getUser(@Req() req: FastifyRequest) {
    return req.user;
  }

  @UseGuards(AuthGuard)
  @Get('/all')
  findAll(@Req() req: FastifyRequest) {
    return req.user.email;
  }
}
