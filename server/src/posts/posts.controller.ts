import { Body, Controller, Post, Query, Get } from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';
import { CreatePostDto } from './dtos/create-post.dto';
import { PostsService } from './posts.service';
@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Post('/create')
  createPost(@Body() body: CreatePostDto) {
    console.log(body.post);
    return this.postsService.create(body.post, body.id, body.betreff);
  }
  @Post('/all')
  findAllUsers(@Query('posts') posts: string) {
    return this.postsService.findAll(posts);
  }

  @Get('/:id')
  async findOneUser(@Param('id') id: string) {
    return await this.postsService.findOne(parseInt(id));
  }
}
