import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
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
    const result = this.letterRepo.find();
    console.log(result);
    return result;
  }

  @UseGuards(AuthGuard)
  @Post('/password')
  async changePassword(@Req() req: FastifyRequest, @Body() pass: string) {
    const password = await this.letterRepo.findOne({
      where: { password: pass },
    });
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  async findOneUser(@Param('id') id: number, @Req() req: FastifyRequest) {
    return await this.letterRepo.findOne({ where: { id } });
  }

  // only for admins
  @Get('/all-user')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  async getAllUser() {
    return 'test';
  }
}
