import { Injectable } from '@nestjs/common';
import { CanActivate, ExecutionContext } from '@nestjs/common/interfaces';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { FastifyRequest } from 'fastify';
import { Role } from 'src/user/role.enum';
import { COOKIE_NAME } from '../../constants';
import { JwtUser } from '../@types';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<FastifyRequest>();

    const token = request.cookies[COOKIE_NAME];

    if (!token) {
      return false;
    }

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    const user = {
      email: 'test@test',
      roles: [Role.ADMIN],
    };

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
