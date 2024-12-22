import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { commentController } from '../controllers/comment.controller';
import { validateRequest } from '../middleware/validate-request';
import { createCommentSchema, getCommentSchema, updateCommentSchema, getAllCommentSchema } from '../schemas/comment.schema';

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Operations related to comments
 */
export const commentRoutes = (prisma: PrismaClient): Router => {
    const router = Router();
    const controller = commentController(prisma);

    /**
     * @swagger
     * /comments:
     *   post:
     *     summary: Create a new comment
     *     tags: [Comments]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Comment'
     *     responses:
     *       201:
     *         description: Created comment
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Comment'
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
    router.post('/', validateRequest({ body: createCommentSchema }), controller.create);

    /**
     * @swagger
     * /comments:
     *   get:
     *     summary: Get all comments
     *     tags: [Comments]
     *     parameters:
     *       - in: query
     *         name: post_id
     *         schema:
     *           type: integer
     *         description: Filter comments by post ID
     *       - in: query
     *         name: author_id
     *         schema:
     *           type: integer
     *         description: Filter comments by author ID
     *     responses:
     *       200:
     *         description: List of comments
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Comment'
     *       500:
     *         description: Internal server error
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     */
    router.get('/', validateRequest({query: getAllCommentSchema}), controller.getAll);

    /**
     * @swagger
     * /comments/{id}:
     *   get:
     *     summary: Get comment by id
     *     tags: [Comments]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the comment to get
     *     responses:
     *       200:
     *         description: Comment details
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Comment'
     *       404:
     *         description: Comment not found
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
    router.get('/:id', validateRequest({params: getCommentSchema}), controller.getOne);

     /**
     * @swagger
     * /comments/{id}:
     *   put:
     *     summary: Update comment
     *     tags: [Comments]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the comment to update
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Comment'
     *     responses:
     *       200:
     *         description: Updated comment
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Comment'
     *       400:
     *         description: Validation error
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     *       404:
     *         description: Comment not found
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
    router.put('/:id', validateRequest({params: getCommentSchema, body: updateCommentSchema}), controller.update);

    /**
     * @swagger
     * /comments/{id}:
     *   delete:
     *     summary: Delete comment
     *     tags: [Comments]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the comment to delete
     *     responses:
     *       204:
     *         description: Comment deleted successfully
     *       404:
     *         description: Comment not found
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
    router.delete('/:id', validateRequest({params: getCommentSchema}), controller.delete);

    return router;
};