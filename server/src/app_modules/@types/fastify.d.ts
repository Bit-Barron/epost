import { JwtUser } from './index';
export {};

declare module 'fastify' {
  interface FastifyRequest {
    user: JwtUser;
  }
}
