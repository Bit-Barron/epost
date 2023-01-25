import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}
  create(body: CreateUserDto) {
    const user = this.repo.create(body);
    return this.repo.save(user);
  }

  find(email: string) {
    return this.repo.findBy({ email });
  }
}
