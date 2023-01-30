import { CookieSerializeOptions } from '@fastify/cookie';
import psl from 'psl';

export const PORT = 4000;

export const TOKEN_EXPIRES_IN = 30 * 24 * 3600 * 1000;

export const COOKIE_NAME = 'jwt' as const;

export const COOKIE_SERIALIZE_OPTIONS: CookieSerializeOptions = {
  httpOnly: true,
  path: '/',
  maxAge: TOKEN_EXPIRES_IN,
  sameSite: process.env.NODE_ENV === 'production' ? 'lax' : 'none',
  secure: true,
  domain:
    process.env.NODE_ENV === 'production'
      ? `${psl.parse(new URL(process.env.CORS_ORIGIN).hostname).domain}`
      : undefined,
};
