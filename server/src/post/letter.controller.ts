import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { Param, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from 'src/app_modules/guard/auth.guard';
import { CreateLetterDto } from './dtos/create-post.dto';
import { LetterService } from './letter.service';

@Controller('post')
export class LetterController {
  constructor(private letterService: LetterService) {}

  @Post('/create')
  @UseGuards(AuthGuard)
  async createPost(
    @Body() createLetterDto: CreateLetterDto,
    @Request() req: Request,
  ) {
    return await this.letterService.create({});
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
