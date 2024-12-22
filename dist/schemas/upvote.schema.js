"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUpvoteSchema = exports.getUpvoteSchema = exports.createUpvoteSchema = void 0;
const zod_1 = require("zod");
/**
 * @swagger
 * components:
 *  schemas:
 *      Upvote:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: ID of the upvote.
 *                  example: 1
 *              user_id:
 *                  type: integer
 *                  description: ID of the user who upvoted.
 *                  example: 1
 *              post_id:
 *                  type: integer
 *                  description: ID of the post that was upvoted.
 *                  example: 1
 *              createdAt:
 *                  type: string
 *                  format: date-time
 *                  description: Date and time of creation
 *                  example: "2024-07-26T10:00:00Z"
 *              updatedAt:
 *                  type: string
 *                  format: date-time
 *                  description: Date and time of last update
 *                  example: "2024-07-26T10:15:00Z"
 *
 */
exports.createUpvoteSchema = zod_1.z.object({
    user_id: zod_1.z.number().int().positive(),
    post_id: zod_1.z.number().int().positive(),
});
exports.getUpvoteSchema = zod_1.z.object({
    id: zod_1.z.string().transform((val) => parseInt(val)).pipe(zod_1.z.number().int().positive()),
});
exports.getAllUpvoteSchema = zod_1.z.object({
    post_id: zod_1.z.string().transform((val) => parseInt(val)).pipe(zod_1.z.number().int().positive()).optional(),
    user_id: zod_1.z.string().transform((val) => parseInt(val)).pipe(zod_1.z.number().int().positive()).optional(),
});
