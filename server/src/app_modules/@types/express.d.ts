import { JwtPayload } from './index';
export {};

declare global {
  namespace Express {
    export interface Request {
      user: JwtPayload;
    }
  }

  export interface Request {
    user: JwtPayload;
  }
}
