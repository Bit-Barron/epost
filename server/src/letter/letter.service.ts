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
<<<<<<< HEAD
  async create(letter: CreateLetterDto): Promise<Letter> {
    const newLetter = this.letterRepo.create({
      content: letter.content,
      title: letter.title,
      user: { id: letter.userId },
    });
    return await this.letterRepo.save(newLetter);
  }

  async findOne(id: number) {
    return await this.letterRepo.findOneBy({ id });
  }

  async findAll() {
    return await this.letterRepo.find({ where: { userId } });
  }
=======
>>>>>>> 0debef17e27da9f40e2e0876912dddaa69a44a1c
}
