import {
  FileInterceptor,
  MemoryStorageFile,
  UploadedFile,
} from '@blazity/nest-file-fastify';
import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import {
  Param,
  Patch,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import * as cloudinary from 'cloudinary';
import { FastifyRequest } from 'fastify';
import { AuthGuard } from 'src/app_modules/guard/auth.guard';
import { Repository } from 'typeorm';
import { CreateLetterDto } from './dtos/create-letter.dto';
import { Letter } from './letter.entity';

@Controller('letter')
export class LetterController {
  constructor(
    @InjectRepository(Letter)
    private letterRepo: Repository<Letter>,
  ) {
    cloudinary.v2.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

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
      side: createLetterDto.side,
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
  @Get('/all')
  async findAll() {
    return await this.letterRepo.find();
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  async findOneUser(@Param('id') id: number, @Req() req: FastifyRequest) {
    return await this.letterRepo.findOne({
      where: { id, user: { id: req.user.sub } },
    });
  }

  @UseGuards(AuthGuard)
  @Post('/update/:id')
  async updateletter(@Param('id') id: number, @Req() req: FastifyRequest) {
    return await this.letterRepo.findOne({
      where: { id, user: { id: req.user.sub } },
    });
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  async deleteletter(@Param('id') id: number, @Req() req: FastifyRequest) {
    try {
      return await this.letterRepo.delete({ id, user: { id: req.user.sub } });
    } catch (err) {
      console.error(err);
    }
    return true;
  }

  @UseGuards(AuthGuard)
  @Delete('/all-letter')
  async deleteAll(@Req() req: FastifyRequest) {
    try {
      return await this.letterRepo.delete({ user: { id: req.user.sub } });
    } catch (err) {
      console.error(err);
    }
  }

  @UseGuards(AuthGuard)
  @Patch('/:id')
  async updateOneUser(@Body() body: CreateLetterDto, @Param('id') id: number) {
    return await this.letterRepo.update(id, body);
  }

  @Post('/upload')
  @UseInterceptors(
    FileInterceptor('file', { dest: '/path/to/destination/directory' }),
  )
  async uploadFile(@UploadedFile() @Body() file: MemoryStorageFile) {
    console.log(file);
    try {
      const result = await cloudinary.v2.uploader.upload(
        file.buffer.toString('base64'),
        {
          resource_type: 'auto',
          folder: 'letter',
          allowed_formats: ['pdf'],
          transformation: [{ width: 100, height: 200, crop: 'limit' }],
          public_id: file.fieldname,
          filename_override: file.fieldname,
        },
      );
      const myletter = new Letter();
      myletter.link = result.url;
      await myletter.save();
    } catch (err) {
      console.error(err);
    }

    return true;
  }
}
