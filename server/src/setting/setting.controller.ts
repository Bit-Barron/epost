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
import { Repository } from 'typeorm';
import { CreateSettingDto } from './dtos/create-setting.dto';
import { Setting } from './setting.entity';

@Controller('setting')
export class SettingController {
  constructor(
    @InjectRepository(Setting) private settingRepo: Repository<Setting>,
  ) {}

  @Post('/test')
  @UseGuards(AuthGuard)
  async test(@Req() req: FastifyRequest) {
    return req.user;
  }

  @Post('/create')
  @UseGuards(AuthGuard)
  async createPost(@Body() createSettingDto: CreateSettingDto) {
    const newSetting = this.settingRepo.create({
      street: createSettingDto.street,
      PLZ: createSettingDto.PLZ,
      location: createSettingDto.location,
      phone: createSettingDto.phone,
      firstname: createSettingDto.firstname,
      lastname: createSettingDto.lastname,
      salutation: createSettingDto.salutation,
      user: { id: createSettingDto.userId },
    });
    return await this.settingRepo.save(newSetting);
  }

  @UseGuards(AuthGuard)
  @Get('/all-user')
  async findAllUsers(@Req() req: FastifyRequest) {
    return await this.settingRepo.find({
      where: { user: { id: req.user.sub } },
    });
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  async findOneUser(@Param('id') id: number, @Req() req: FastifyRequest) {
    return await this.settingRepo.findOne({
      where: { id, user: { id: req.user.sub } },
    });
  }
}
