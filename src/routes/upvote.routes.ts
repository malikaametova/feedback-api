import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { upvoteController } from '../controllers/upvote.controller';
import { validateRequest } from '../middleware/validate-request';
import { createUpvoteSchema, getUpvoteSchema, getAllUpvoteSchema } from '../schemas/upvote.schema';

/**
 * @swagger
 * tags:
 *   name: Upvotes
 *   description: Operations related to upvotes
 */
export const upvoteRoutes = (prisma: PrismaClient): Router => {
    const router = Router();
    const controller = upvoteController(prisma);

    /**
     * @swagger
     * /upvotes:
     *   post:
     *     summary: Create a new upvote
     *     tags: [Upvotes]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Upvote'
     *     responses:
     *       201:
     *         description: Upvote created successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Upvote'
     *       400:
     *         description: Validation error
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     *       500:
     *         description: Internal server error
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     */
    router.post('/', validateRequest({ body: createUpvoteSchema }), controller.create);

    /**
     * @swagger
     * /upvotes:
     *   get:
     *     summary: Get all upvotes
     *     tags: [Upvotes]
     *     parameters:
     *       - in: query
     *         name: post_id
     *         schema:
     *           type: integer
     *         description: Filter by post id
     *         example: 1
     *       - in: query
     *         name: user_id
     *         schema:
     *           type: integer
     *         description: Filter by user id
     *         example: 1
     *     responses:
     *       200:
     *         description: Upvotes
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Upvote'
     *       500:
     *         description: Internal server error
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     */
    router.get('/', validateRequest({ query: getAllUpvoteSchema }), controller.getAll);

    /**
     * @swagger
     * /upvotes/{id}:
     *   get:
     *     summary: Get upvote by id
     *     tags: [Upvotes]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID of the upvote to get
     *         schema:
     *           type: integer
     *           example: 1
     *     responses:
     *       200:
     *         description: Upvote details
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Upvote'
     *       404:
     *         description: Upvote not found
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     *       500:
     *         description: Internal server error
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     */
    router.get('/:id', validateRequest({ params: getUpvoteSchema }), controller.getOne);

    /**
     * @swagger
     * /upvotes/{id}:
     *   delete:
     *     summary: Delete upvote
     *     tags: [Upvotes]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID of the upvote to delete
     *         schema:
     *           type: integer
     *           example: 1
     *     responses:
     *       204:
     *         description: Upvote deleted successfully
     *       404:
     *         description: Upvote not found
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     *       500:
     *         description: Internal server error
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     */
    router.delete('/:id', validateRequest({ params: getUpvoteSchema }), controller.delete);

    return router;
};