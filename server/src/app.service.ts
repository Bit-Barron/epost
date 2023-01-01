import { Injectable, Body, Post } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  prisma = new PrismaClient();
}
