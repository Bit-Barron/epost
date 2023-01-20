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
  create(posts: string, id) {
    const user = this.repo.create({ posts, id });
    console.log(id);
    console.log(posts);
    return this.repo.save(user);
  }

  findAll(posts) {
    return this.repo.findBy({ posts });
  }
}
