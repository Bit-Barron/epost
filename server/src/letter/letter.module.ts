import { Global, Module } from '@nestjs/common';
import { LetterController } from './letter.controller';
import { LetterService } from './letter.service';

@Global()
@Module({
  controllers: [LetterController],
  providers: [LetterService],
  exports: [LetterService],
})
export class LetterModule {}
