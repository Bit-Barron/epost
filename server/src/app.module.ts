import { Global, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { Letter } from './letter/letter.entity';
import { LetterModule } from './letter/letter.module';
import { User } from './user/user.entity';

import { UserModule } from './user/user.module';

const ENTITIES = [User, Letter];

const TypeOrmModules = TypeOrmModule.forFeature(ENTITIES);

@Global()
@Module({
  imports: [
    AuthModule,
    UserModule,
    LetterModule,
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: { expiresIn: '30d' },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: ENTITIES,
      synchronize: true,
    }),
    TypeOrmModules,
  ],
  providers: [JwtService],
  exports: [TypeOrmModules, JwtService],
})
export class AppModule {}
