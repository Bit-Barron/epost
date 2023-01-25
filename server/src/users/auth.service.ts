import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { jwtConstants } from '../constants';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(body: CreateUserDto) {
    const user = await this.usersService.findOne(body.email);

    if (user) throw new BadRequestException('Email in use');

    body.password = await argon2.hash(body.password);

    return await this.usersService.create(body);
  }

  async login(body: CreateUserDto) {
    const user = await this.usersService.findOne(body.email);

    if (!user) throw new NotFoundException('User not found');

    if (await argon2.verify(user.password, body.password)) {
      const payload = { email: user.email, sub: user.id };
      return { user, token: this.jwtService.sign(payload, jwtConstants) };
    }
  }
}
