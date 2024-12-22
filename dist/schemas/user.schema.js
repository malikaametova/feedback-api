"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const zod_1 = require("zod");
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
exports.createUserSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    name: zod_1.z.string(),
    avatar: zod_1.z.string().optional()
});
exports.updateUserSchema = exports.createUserSchema.partial();
exports.getUserSchema = zod_1.z.object({
    id: zod_1.z.string().transform((val) => parseInt(val, 10)).pipe(zod_1.z.number().int().positive()),
});
