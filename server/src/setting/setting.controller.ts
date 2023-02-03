import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FastifyRequest } from 'fastify';
import { AuthGuard } from 'src/app_modules/guard/auth.guard';
import { Repository } from 'typeorm';
import { CreateSettingDto } from './dtos/create-setting.dto';
import { Setting } from './setting.entity';

@Controller('setting')
export class SettingController {
  constructor(
    @InjectRepository(Setting) private letterRepo: Repository<Setting>,
  ) {}

  @Post('/test')
  @UseGuards(AuthGuard)
  async test(@Req() req: FastifyRequest) {
    return req.user;
  }

  @Post('/create')
  @UseGuards(AuthGuard)
  async CreateProfile(
    @Req() req: FastifyRequest,
    @Body() createSettingDto: CreateSettingDto,
  ) {
    const newSetting = this.letterRepo.create({
      street: createSettingDto.street,
      PLZ: createSettingDto.PLZ,
      location: createSettingDto.location,
      phone: createSettingDto.phone,
    });
    return await this.letterRepo.save(newSetting);
  }
}
