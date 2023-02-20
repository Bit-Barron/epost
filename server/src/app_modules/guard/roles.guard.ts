import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { COOKIE_NAME } from 'src/constants';
import { Role } from 'src/user/role.enum';
import { UserService } from 'src/user/user.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const requireRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    const request = context.switchToHttp().getRequest();

    const token = request.cookies[COOKIE_NAME];

    if (!requireRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();

    console.log(user);

    // return requireRoles.some((role) => user.role?.includes(role));
  }
}
