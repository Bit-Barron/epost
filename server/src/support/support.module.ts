import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Support } from 'src/posts/support.entity';
import { SupportController } from './support.controller';
import { SupportService } from './support.service';

@Module({
  imports: [TypeOrmModule.forFeature([Support])],
  controllers: [SupportController],
  providers: [SupportService],
})
export class SupportModule {}
