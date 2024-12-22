import { AnyZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';

interface Options {
  body?: AnyZodObject;
  query?: AnyZodObject;
  params?: AnyZodObject;
}

export const validateRequest = (options: Options) => {
  return async (req: Request, _res: Response, next: NextFunction) => {
    try {
      if (options.body) {
        options.body.parse(req.body);
      }
      if (options.query) {
        options.query.parse(req.query);
      }
       if (options.params) {
        options.params.parse(req.params);
      }
      next();
    } catch (error: any) {
      const errors = error.issues.map((issue: any) => ({
        message: issue.message,
        path: issue.path,
      }));
      return next(new Error(JSON.stringify({ message: "Validation failed", errors })));
    }
  };
};