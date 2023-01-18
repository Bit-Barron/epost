import { CanActivate, ExecutionContext } from '@nestjs/common/interfaces';
import { Request } from 'express';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();
    const auth_token = request.cookies.jwt;
    if (!auth_token) {
      throw new Error('Not authenticated');
    }
    return true;
  }
}
