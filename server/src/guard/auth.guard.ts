import { CanActivate, ExecutionContext } from '@nestjs/common/interfaces';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();
    const token = request.cookies['jwt'];
    if (!token) {
      return false;
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      request.user = decoded;
      return true;
    } catch (err) {
      return false;
    }
  }
}
