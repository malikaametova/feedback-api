import { z } from 'zod';

/**
 * @swagger
 * components:
 *  schemas:
 *      FeedbackPost:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: The feedback id
 *                  example: 1
 *              title:
 *                  type: string
 *                  description: The feedback title
 *                  example: "Improve the search functionality"
 *              description:
 *                  type: string
 *                  description: The feedback description
 *                  example: "The search functionality could be improved by adding filters and sorting."
 *              category:
 *                  type: string
 *                  description: The feedback category
 *                  example: "Functionality"
 *              status:
 *                  type: string
 *                  description: The feedback status
 *                  example: "Idea"
 *              author_id:
 *                   type: integer
 *                   description: User id of feedback's author
 *                   example: 1
 *              createdAt:
 *                   type: string
 *                   description: Creation date
 *                   example: "2023-11-29T13:01:48.001Z"
 *              updatedAt:
 *                   type: string
 *                   description: Update date
 *                   example: "2023-11-29T13:01:48.001Z"
 *
 *      Error:
 *          type: object
 *          properties:
 *              message:
 *                  type: string
 *                  description: Error message
 *                  example: "Validation failed"
 *              errors:
 *                  type: array
 *                  items:
 *                      type: object
 *                      properties:
 *                          message:
 *                              type: string
 *                              example: "Required"
 *                          path:
 *                              type: array
 *                              items:
 *                                  type: string
 *                              example: ["title"]
 *
 */

export const createFeedbackSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  category: z.string(),
  status: z.string(),
  author_id: z.number().int().positive(),
});
export const updateFeedbackSchema = createFeedbackSchema.partial();
export const getFeedbackSchema = z.object({
    id: z.string().transform((val) => parseInt(val)).pipe(z.number().int().positive()),
})

export const getAllFeedbackSchema = z.object({
    category: z.string().optional(),
    status: z.string().optional(),
    sortBy: z.string().optional(),
    order: z.string().optional(),
    page: z.string().transform((val) => parseInt(val)).pipe(z.number().int().positive()).optional(),
    limit: z.string().transform((val) => parseInt(val)).pipe(z.number().int().positive()).optional(),
})