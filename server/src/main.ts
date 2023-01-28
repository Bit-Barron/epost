import fastifyCookie from '@fastify/cookie';
import helmet from '@fastify/helmet';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import dotenv from 'dotenv';
import { AppModule } from './app.module';
import { PORT } from './constants';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  await app.register(helmet);

  app.enableCors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  });

  await app.register(fastifyCookie, {
    secret: process.env.SECRET,
  });

  process.env.NODE_ENV === 'production'
    ? await app.listen(PORT, '0.0.0.0')
    : await app.listen(PORT);
}
bootstrap();
