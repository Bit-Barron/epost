import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Support } from 'src/posts/support.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SupportService {
  constructor(
    @InjectRepository(Support)
    private repo: Repository<Support>,
  ) {}
  getsSupport() {
    return 'This action returns all support';
  }
}
