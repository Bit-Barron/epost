import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(body: CreateUserDto) {
    return await this.userRepo.save(body);
  }

  findOne(email: string) {
    return this.userRepo.findOne({ where: { email } });
  }

  async findAll() {
    return await this.userRepo.find();
  }

  async findOneById(id: number): Promise<User> {
    return this.userRepo.findOne({ where: { id } });
  }
}
