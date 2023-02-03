import { Controller } from '@nestjs/common';
import { Letter } from 'src/letter/letter.entity';
import { Repository } from 'typeorm';

@Controller('setting')
export class SettingController {
  constructor(private letterRepo: Repository<Letter>) {}
}
