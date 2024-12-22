import { z } from 'zod';

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
export const createUpvoteSchema = z.object({
  user_id: z.number().int().positive(),
  post_id: z.number().int().positive(),
});
export const getUpvoteSchema = z.object({
    id: z.string().transform((val) => parseInt(val)).pipe(z.number().int().positive()),
})

export const getAllUpvoteSchema = z.object({
    post_id: z.string().transform((val) => parseInt(val)).pipe(z.number().int().positive()).optional(),
    user_id: z.string().transform((val) => parseInt(val)).pipe(z.number().int().positive()).optional(),
})