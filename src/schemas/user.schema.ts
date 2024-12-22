import { z } from 'zod';

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              id:
 *                  type: integer
 *                  description: ID of the user.
 *                  example: 1
 *              email:
 *                  type: string
 *                  description: Email address of the user.
 *                  example: "test@example.com"
 *              name:
 *                   type: string
 *                   description: Name of the user.
 *                   example: "Test User"
 *              avatar:
 *                  type: string
 *                  description: URL of the user's avatar.
 *                  example: "https://example.com/avatar.jpg"
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
 */
export const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  avatar: z.string().optional()
});

export const updateUserSchema = createUserSchema.partial();
export const getUserSchema = z.object({
    id: z.string().transform((val) => parseInt(val, 10)).pipe(z.number().int().positive()),
})