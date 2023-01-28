import { Module } from '@nestjs/common';
import { LetterController } from './letter.controller';
import { LetterService } from './letter.service';

@Module({
  controllers: [LetterController],
  providers: [LetterService],
})
export class LetterModule {}
