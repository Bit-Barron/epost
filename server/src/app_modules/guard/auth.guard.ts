import { Injectable } from '@nestjs/common';
import { CanActivate, ExecutionContext } from '@nestjs/common/interfaces';
import { JwtService } from '@nestjs/jwt';
import { FastifyRequest } from 'fastify';
import { COOKIE_NAME } from '../../constants';
import { JwtUser } from '../@types';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<FastifyRequest>();

    const token = request.cookies[COOKIE_NAME];

    if (!token) {
      return false;
    }

    try {
      const user = this.jwtService.verify(token, {
        secret: process.env.SECRET,
      }) as JwtUser;

      request.user = user;

      return true;
    } catch (err) {
      return false;
    }
  }
}
