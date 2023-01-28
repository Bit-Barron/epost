import { CanActivate, ExecutionContext } from '@nestjs/common/interfaces';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { COOKIE_NAME } from '../../constants';
import { JwtPayload } from '../@types';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();

    const token = request.cookies[COOKIE_NAME];

    if (!token) {
      return false;
    }

    try {
      const user = jwt.verify(
        token,
        process.env.SECRET,
      ) as unknown as JwtPayload;

      request.user = user;

      return true;
    } catch (err) {
      return false;
    }
  }
}
