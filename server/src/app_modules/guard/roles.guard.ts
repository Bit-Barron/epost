import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { COOKIE_NAME } from 'src/constants';
import { Role } from 'src/user/role.enum';
import { UserService } from 'src/user/user.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector, private userService: UserService) {}

  async canActivate(context: ExecutionContext) {
    const requireRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    const request = context.switchToHttp().getRequest();

    const token = request.cookies[COOKIE_NAME];

    if (!token) return false;

    if (!requireRoles) return true;

    if (request?.user) return false;

    const user = await this.userService.findOneById(request.user);

    if (requireRoles?.includes(user.role)) return true;
    return false;
  }
}
