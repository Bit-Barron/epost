import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Letter } from './letter.entity';

@Injectable()
export class LetterService {
  constructor(
    @InjectRepository(Letter)
    private letterRepo: Repository<Letter>,
  ) {}
  async create(letter: any): Promise<Letter> {
    return await this.letterRepo.save(letter);
  }

  async findOne(id: number) {
    return await this.letterRepo.findOneBy({ id });
  }

  async findAll() {
    return await this.letterRepo.find();
  }
}
