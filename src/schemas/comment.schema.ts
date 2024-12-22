

import { z } from 'zod';

/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       properties:
 *         content:
 *           type: string
 *           example: This is a comment
 *         post_id:
 *           type: integer
 *           example: 1
 *         author_id:
 *           type: integer
 *           example: 2
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *         id:
 *           type: integer
 *           example: 1
 *     Error:
 *        type: object
 *        properties:
 *           message:
 *               type: string
 *               example: Error message
 */

export const createCommentSchema = z.object({
    content: z.string({ required_error: 'Content is required' }).min(1),
    post_id: z.number({ required_error: 'Post ID is required' }),
    author_id: z.number({ required_error: 'Author ID is required' })
});


export const updateCommentSchema = z.object({
    content: z.string({ required_error: 'Content is required' }).min(1).optional()
});

export const getCommentSchema = z.object({
    id: z.string().regex(/^\d+$/,{message: 'Id must be a number'}).transform(Number),
});


export const getAllCommentSchema = z.object({
   post_id: z.string().regex(/^\d+$/,{message: 'Post ID must be a number'}).transform(Number).optional(),
   author_id: z.string().regex(/^\d+$/,{message: 'Author ID must be a number'}).transform(Number).optional(),
});