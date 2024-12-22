import { Router } from 'express';
import { userController } from '../controllers/user.controller';
import { validateRequest } from '../middleware/validate-request';
import { createUserSchema } from '../schemas/user.schema';
import { PrismaClient } from '@prisma/client';

export const userRoutes = (prisma: PrismaClient): Router => {
    console.log('User routes initialized');
    const router = Router();
    const controller = userController(prisma);

    router.post('/', validateRequest({ body: createUserSchema }), controller.create);
    router.get('/:id', controller.getOne);
    router.put('/:id', validateRequest({ body: createUserSchema }), controller.update);
    router.delete('/:id', controller.delete);

    return router;
};