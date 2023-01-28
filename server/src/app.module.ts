import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Letter } from './letter/letter.entity';
import { LetterModule } from './letter/letter.module';
import { User } from './user/user.entity';

import { UserModule } from './user/user.module';

const TypeOrmModules = TypeOrmModule.forFeature([User, Letter]);
@Global()
@Module({
  imports: [
    AuthModule,
    UserModule,
    LetterModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [User, Letter],
      synchronize: true,
    }),
    TypeOrmModules,
  ],
  exports: [TypeOrmModules],
})
export class AppModule {}
