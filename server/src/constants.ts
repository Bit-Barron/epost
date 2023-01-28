import { CookieSerializeOptions } from '@fastify/cookie';
import psl from 'psl';

export const PORT = 4000;

export const COOKIE_NAME = 'jwt';

export const TOKEN_EXPIRES_IN = 60 * 60 * 24 * 30; // 30 days

export const COOKIE_SERIALIZE_OPTIONS: CookieSerializeOptions = {
  httpOnly: true,
  path: '/',
  maxAge: TOKEN_EXPIRES_IN,
  sameSite: process.env.NODE_ENV === 'production' ? 'lax' : 'none',
  secure: process.env.NODE_ENV === 'production' ? true : false, // cookie only works in https
  domain:
    process.env.NODE_ENV === 'production'
      ? `${psl.parse(new URL(process.env.CORS_ORIGIN).hostname).domain}`
      : undefined,
};
