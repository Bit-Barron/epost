import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { jwtConstants } from '../constants';
import { UsersService } from './users.service';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(email: string, password: string) {
    const user = await this.usersService.find(email);
    if (user.length) {
      throw new BadRequestException('Email in use');
    }
    const hash = await argon2.hash(password);

    return await this.usersService.create(email, hash);
  }

  async login(email: string, password: string) {
    const [user] = await this.usersService.find(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user && (await argon2.verify(user.password, password))) {
      const payload = { email: user.email, sub: user.id };
      return { user, token: this.jwtService.sign(payload, jwtConstants) };
    }
  }
}
