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
  create(posts: string, id: number, betreff: string) {
    const user = this.repo.create({ posts, id, betreff });
    return this.repo.save(user);
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  findAll(posts) {
    return this.repo.findBy({ posts });
  }
}
