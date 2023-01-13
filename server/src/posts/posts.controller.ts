import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostDto } from './dtos/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Post('/create')
  createPost(@Body() body: CreatePostDto) {
    return this.postsService.create(body.post);
  }
}
