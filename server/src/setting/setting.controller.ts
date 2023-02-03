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
    @InjectRepository(Setting) private letterRepo: Repository<Setting>,
  ) {}

  @Post('/test')
  @UseGuards(AuthGuard)
  async test(@Req() req: FastifyRequest) {
    return req.user;
  }

  @Post('/create')
  @UseGuards(AuthGuard)
  async createPost(
    @Body() createLetterDto: CreateSettingDto,
    @Req() req: FastifyRequest,
  ) {
    createLetterDto.userId = req.user.sub;

    const newLetter = this.letterRepo.create({
      street: createLetterDto.street,
      PLZ: createLetterDto.PLZ,
      location: createLetterDto.location,
      phone: createLetterDto.phone,
      firstname: createLetterDto.firstname,
      lastname: createLetterDto.lastname,
      user: { id: createLetterDto.userId },
    });
    return await this.letterRepo.save(newLetter);
  }

  @UseGuards(AuthGuard)
  @Get('/all-user')
  async findAllUsers(@Req() req: FastifyRequest) {
    return await this.letterRepo.find({
      where: { user: { id: req.user.sub } },
    });
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  async findOneUser(@Param('id') id: number, @Req() req: FastifyRequest) {
    console.log(req.user);
    return await this.letterRepo.findOne({
      where: { id, user: { id: req.user.sub } },
    });
  }
}
