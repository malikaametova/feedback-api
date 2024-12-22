"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFeedbackSchema = exports.getFeedbackSchema = exports.updateFeedbackSchema = exports.createFeedbackSchema = void 0;
const zod_1 = require("zod");
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
exports.createFeedbackSchema = zod_1.z.object({
    title: zod_1.z.string().min(3),
    description: zod_1.z.string().min(10),
    category: zod_1.z.string(),
    status: zod_1.z.string(),
    author_id: zod_1.z.number().int().positive(),
});
exports.updateFeedbackSchema = exports.createFeedbackSchema.partial();
exports.getFeedbackSchema = zod_1.z.object({
    id: zod_1.z.string().transform((val) => parseInt(val)).pipe(zod_1.z.number().int().positive()),
});
exports.getAllFeedbackSchema = zod_1.z.object({
    category: zod_1.z.string().optional(),
    status: zod_1.z.string().optional(),
    sortBy: zod_1.z.string().optional(),
    order: zod_1.z.string().optional(),
    page: zod_1.z.string().transform((val) => parseInt(val)).pipe(zod_1.z.number().int().positive()).optional(),
    limit: zod_1.z.string().transform((val) => parseInt(val)).pipe(zod_1.z.number().int().positive()).optional(),
});
