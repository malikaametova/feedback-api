import { Request } from 'express';
import { PrismaClient } from '@prisma/client';

// Расширяем интерфейс Request
declare global {
    namespace Express {
      interface Request {
         user?: {id: number}
         prisma?: PrismaClient
      }
    }
  }

export {};