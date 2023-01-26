import { Body, Controller, Post, Query, Get, Request } from '@nestjs/common';
import { Param, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from 'src/guard/auth.guard';
import { CreatePostDto } from './dtos/create-post.dto';
import { PostsService } from './posts.service';
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Post('/create')
  @UseGuards(AuthGuard)
  createPost(@Body() body: CreatePostDto, @Request() req) {
    const userId = req.user.sub;
    return this.postsService.create(body.post, userId, body.betreff);
  }
  @UseGuards(AuthGuard)
  @Post('/all')
  findAllUsers(@Query('posts') posts: string) {
    return this.postsService.findAll(posts);
  }

  @Get('/:id')
  async findOneUser(@Param('id') id: string) {
    return await this.postsService.findOne(parseInt(id));
  }
}
