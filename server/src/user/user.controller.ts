import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FastifyRequest } from 'fastify';
import { AuthGuard } from 'src/app_modules/guard/auth.guard';
import { RolesGuard } from 'src/app_modules/guard/roles.guard';
import { Repository } from 'typeorm';

import { Role } from './role.enum';
import { Roles } from './roles.decorator';
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
  @Post('/admin')
  admin() {
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

  @UseGuards(AuthGuard)
  @Post('/password')
  async changePassword(@Req() req: FastifyRequest, pass) {
    console.log(req.user);
    console.log(pass);
  }

  // only for admins
  @Get('/all-user')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async getAllUser() {
    return 'test';
  }
}
