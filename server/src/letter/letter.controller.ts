import { Body, Controller, Get, Post } from '@nestjs/common';
import { Param, Req, UseGuards } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { FastifyRequest } from 'fastify';
import { AuthGuard } from 'src/app_modules/guard/auth.guard';
import { Repository } from 'typeorm';
import { CreateLetterDto } from './dtos/create-letter.dto';
import { Letter } from './letter.entity';
import { LetterService } from './letter.service';

@Controller('letter')
export class LetterController {
  constructor(
    private letterService: LetterService,
    @InjectRepository(Letter)
    private letterRepo: Repository<Letter>,
  ) {}

  @Post('/create')
  @UseGuards(AuthGuard)
  async createPost(
    @Body() createLetterDto: CreateLetterDto,
    @Req() req: FastifyRequest,
  ) {
    createLetterDto.userId = req.user.sub;

    const newLetter = this.letterRepo.create({
      content: createLetterDto.content,
      title: createLetterDto.title,
      pages: createLetterDto.pages,
      price: createLetterDto.price,
      posts: createLetterDto.posts,
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
    return await this.letterRepo.findOne({
      where: { id, user: { id: req.user.sub } },
    });
  }
}
