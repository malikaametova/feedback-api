import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { PrismaClient } from '@prisma/client';
import { userRoutes } from './routes/user.routes';
import ApiError from './utils/api-error';

const prisma = new PrismaClient();

const app: Express = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/users', userRoutes(prisma));

// Not found route
app.use((_req: Request, _res: Response, next: NextFunction) => {
   next(ApiError.notFound('Route not found'))
});

// Error handling
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    console.error(err);

    if (err instanceof ApiError) {
        res.status(err.statusCode).json({ message: err.message, errors: err.errors });
    } else {
        res.status(500).json({ message: 'Internal server error' });
    }
});


export default app;