import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { feedbackController } from '../controllers/feedback.controller';
import { validateRequest } from '../middleware/validate-request';
import { createFeedbackSchema, updateFeedbackSchema, getAllFeedbackSchema, getFeedbackSchema } from '../schemas/feedback.schema';

/**
* @swagger
* tags:
*   name: Feedback
*   description: Operations related to feedback posts
*/
export const feedbackRoutes = (prisma: PrismaClient): Router => {
    const router = Router();
    const controller = feedbackController(prisma);

    /**
     * @swagger
     * /feedback:
     *  post:
     *    summary: Create a new feedback post
     *    tags: [Feedback]
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
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
     *    responses:
     *      201:
     *        description: Feedback post successfully created
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/FeedbackPost'
     *      400:
     *          description: Validation error
     *          content:
     *            application/json:
     *              schema:
     *                 $ref: '#/components/schemas/Error'
     *      500:
     *         description: Internal server error
     *         content:
     *          application/json:
     *              schema:
     *                 $ref: '#/components/schemas/Error'
     */
    router.post('/', validateRequest({body: createFeedbackSchema}), controller.create);

     /**
    * @swagger
    * /feedback:
    *  get:
    *    summary: Get all feedback posts
    *    tags: [Feedback]
     *    parameters:
    *      - in: query
    *        name: category
    *        schema:
    *          type: string
    *        description: Filter by category
    *        example: Feature
    *      - in: query
    *        name: status
    *        schema:
    *          type: string
    *        description: Filter by status
    *        example: Idea
    *      - in: query
    *        name: sortBy
    *        schema:
    *          type: string
    *        description: Field to sort by
    *        example: title
    *      - in: query
    *        name: order
    *        schema:
    *          type: string
    *        description: Sorting order (asc or desc)
    *        example: asc
    *      - in: query
    *        name: page
    *        schema:
    *          type: string
    *        description: Page to return
    *        example: 1
    *      - in: query
    *        name: limit
    *        schema:
    *          type: string
    *        description: Items per page
    *        example: 10
    *    responses:
    *      200:
    *        description: List of feedback posts
    *        content:
    *          application/json:
    *            schema:
    *              type: object
    *              properties:
    *                  items:
    *                      type: array
    *                      items:
    *                        $ref: '#/components/schemas/FeedbackPost'
    *                  total:
    *                       type: integer
    *                       example: 100
    *                  page:
    *                       type: integer
    *                       example: 1
    *                  limit:
    *                       type: integer
    *                       example: 10
     *      500:
     *         description: Internal server error
     *         content:
     *          application/json:
     *              schema:
     *                 $ref: '#/components/schemas/Error'
     */
     router.get('/', validateRequest({query: getAllFeedbackSchema}), controller.getAll);

    /**
    * @swagger
    * /feedback/{id}:
    *  get:
    *    summary: Get a single feedback post by ID
    *    tags: [Feedback]
    *    parameters:
    *      - in: path
    *        name: id
    *        required: true
    *        description: ID of the feedback post to retrieve
    *        schema:
    *          type: string
    *          example: 1
    *    responses:
    *      200:
    *        description: Feedback post
    *        content:
    *          application/json:
    *            schema:
    *              $ref: '#/components/schemas/FeedbackPost'
    *      400:
    *          description: Validation error
    *          content:
    *            application/json:
    *              schema:
    *                 $ref: '#/components/schemas/Error'
    *      500:
    *         description: Internal server error
    *         content:
    *          application/json:
    *              schema:
    *                 $ref: '#/components/schemas/Error'
    */
    router.get('/:id', validateRequest({params: getFeedbackSchema}), controller.getOne);
    /**
     * @swagger
     * /feedback/{id}:
     *  put:
     *    summary: Update a feedback post
     *    tags: [Feedback]
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        description: ID of the feedback post to update
     *        schema:
     *          type: string
     *          example: 1
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
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
     *    responses:
     *      200:
     *        description: Updated feedback post
     *        content:
     *          application/json:
     *            schema:
     *              $ref: '#/components/schemas/FeedbackPost'
     *      400:
     *          description: Validation error
     *          content:
     *            application/json:
     *              schema:
     *                 $ref: '#/components/schemas/Error'
     *      500:
     *         description: Internal server error
     *         content:
     *          application/json:
     *              schema:
     *                 $ref: '#/components/schemas/Error'
     */
    router.put('/:id', validateRequest({params: getFeedbackSchema, body: updateFeedbackSchema}), controller.update);
    /**
    * @swagger
    * /feedback/{id}:
    *  delete:
    *    summary: Delete a single feedback post by ID
    *    tags: [Feedback]
    *    parameters:
    *      - in: path
    *        name: id
    *        required: true
    *        description: ID of the feedback post to delete
    *        schema:
    *          type: string
    *          example: 1
    *    responses:
    *      204:
    *        description: Feedback post deleted successfully
    *      400:
    *          description: Validation error
    *          content:
    *            application/json:
    *              schema:
    *                 $ref: '#/components/schemas/Error'
    *      500:
    *         description: Internal server error
    *         content:
    *          application/json:
    *              schema:
    *                 $ref: '#/components/schemas/Error'
    */
    router.delete('/:id', validateRequest({params: getFeedbackSchema}), controller.delete);
    return router;
};