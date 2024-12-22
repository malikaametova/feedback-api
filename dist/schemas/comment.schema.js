"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCommentSchema = exports.getCommentSchema = exports.updateCommentSchema = exports.createCommentSchema = void 0;
const zod_1 = require("zod");
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
exports.createCommentSchema = zod_1.z.object({
    content: zod_1.z.string({ required_error: 'Content is required' }).min(1),
    post_id: zod_1.z.number({ required_error: 'Post ID is required' }),
    author_id: zod_1.z.number({ required_error: 'Author ID is required' })
});
exports.updateCommentSchema = zod_1.z.object({
    content: zod_1.z.string({ required_error: 'Content is required' }).min(1).optional()
});
exports.getCommentSchema = zod_1.z.object({
    id: zod_1.z.string().regex(/^\d+$/, { message: 'Id must be a number' }).transform(Number),
});
exports.getAllCommentSchema = zod_1.z.object({
    post_id: zod_1.z.string().regex(/^\d+$/, { message: 'Post ID must be a number' }).transform(Number).optional(),
    author_id: zod_1.z.string().regex(/^\d+$/, { message: 'Author ID must be a number' }).transform(Number).optional(),
});
