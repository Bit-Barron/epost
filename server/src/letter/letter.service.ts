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
}
