import { Router } from 'express';
import { categoryController } from '../controllers/category.controller';

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Operations related to feedback categories
 */
export const categoryRoutes = (): Router => {
    const router = Router();
    const controller = categoryController();

     /**
     * @swagger
     * /categories:
     *  get:
     *    summary: Get all categories
     *    tags: [Categories]
     *    responses:
     *      200:
     *        description: List of categories
     *        content:
     *           application/json:
     *               schema:
     *                   type: array
     *                   items:
     *                       type: string
     *                       example: "Functionality"
     *      500:
     *         description: Internal server error
     *         content:
     *          application/json:
     *              schema:
     *                 $ref: '#/components/schemas/Error'
     */
    router.get('/', controller.getAll);
    return router;
};