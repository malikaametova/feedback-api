import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { PrismaClient } from '@prisma/client';
import { feedbackRoutes } from './routes/feedback.routes';
import { commentRoutes } from './routes/comment.routes';
import { upvoteRoutes } from './routes/upvote.routes';
import { userRoutes } from './routes/user.routes';
import { categoryRoutes } from './routes/category.routes';
import { statusRoutes } from './routes/status.routes';
import { swaggerSpec } from './swagger';
import { errorHandler } from './middleware/error-handler';
import morgan from 'morgan'; // Добавил импорт morgan
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // Добавил morgan для логирования

// Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/feedback', feedbackRoutes(prisma));
app.use('/api/comments', commentRoutes(prisma));
app.use('/api/upvotes', upvoteRoutes(prisma));
app.use('/api/users', userRoutes(prisma));
app.use('/api/categories', categoryRoutes());
app.use('/api/statuses', statusRoutes());

// Error handler middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    errorHandler(err, req, res, next)
})


app.get('/', (_req: Request, res: Response) => {
  res.send('Feedback API is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});