import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from './posts.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts)
    private repo: Repository<Posts>,
  ) {}
  create(posts: string) {
    const user = this.repo.create({ posts });
    if (posts.length === 0) {
      console.log("posts can't be empty");
    }
    return this.repo.save(user);
  }
}
