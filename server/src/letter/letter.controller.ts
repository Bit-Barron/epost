import { Body, Controller, Get, Post } from '@nestjs/common';
import { Param, Req, UseGuards } from '@nestjs/common/decorators';
import { Request } from 'express';
import { AuthGuard } from 'src/app_modules/guard/auth.guard';
import { CreateLetterDto } from './dtos/create-post.dto';
import { LetterService } from './letter.service';

@Controller('letter')
export class LetterController {
  constructor(private letterService: LetterService) {}

  @Post('/create')
  @UseGuards(AuthGuard)
  async createPost(
    @Body() createLetterDto: CreateLetterDto,
    @Req() req: Request,
  ) {
    createLetterDto.userId = req.user.sub;
    return await this.letterService.create(createLetterDto);
  }

  @UseGuards(AuthGuard)
  @Get('/all')
  async findAllUsers() {
    return await this.letterService.findAll();
  }

  @Get('/:id')
  async findOneUser(@Param('id') id: number) {
    return await this.letterService.findOne(id);
  }
}
