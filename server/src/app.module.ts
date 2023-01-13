import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { PostsController } from './posts/posts.controller';
import { PostsModule } from './posts/posts.module';
import { Posts } from './posts/posts.entity';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      entities: [User, Posts],
      synchronize: true,
    }),
    PostsModule,
  ],
  controllers: [AppController, PostsController],
  providers: [AppService],
})
export class AppModule {}
