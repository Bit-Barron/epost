import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LetterController } from './letter.controller';
import { Letter } from './letter.entity';
import { LetterService } from './letter.service';

@Module({
  imports: [TypeOrmModule.forFeature([Letter])],
  controllers: [LetterController],
  providers: [LetterService],
})
export class PostsModule {}
