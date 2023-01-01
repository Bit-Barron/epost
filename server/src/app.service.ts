import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
@Injectable()
export class AppService {
  async getUser() {
    const newUser = await prisma.user.create({
      data: {
        email: 'Alice',
      },
    });
    return newUser;
  }
}
