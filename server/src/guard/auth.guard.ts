import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authToken = request.cookies['jwt'];
    return !!authToken;
  }
}
