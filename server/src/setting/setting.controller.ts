import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FastifyRequest } from 'fastify';
import { AuthGuard } from 'src/app_modules/guard/auth.guard';
import { Letter } from 'src/letter/letter.entity';
import { Repository } from 'typeorm';
import { CreateSettingDto } from './dtos/create-setting.dto';

@Controller('setting')
export class SettingController {
  constructor(
    @InjectRepository(Letter) private letterRepo: Repository<Letter>,
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
      firstname: createSettingDto.firstname,
      lastname: createSettingDto.lastname,
      street: createSettingDto.street,
      PLZ: createSettingDto.PLZ,
      location: createSettingDto.location,
      phone: createSettingDto.phone,
    });
  }
}
