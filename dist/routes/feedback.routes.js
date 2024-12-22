"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackRoutes = void 0;
const express_1 = require("express");
const feedback_controller_1 = require("../controllers/feedback.controller");
const validate_request_1 = require("../middleware/validate-request");
const feedback_schema_1 = require("../schemas/feedback.schema");
/**
* @swagger
* tags:
*   name: Feedback
*   description: Operations related to feedback posts
*/
const feedbackRoutes = (prisma) => {
    const router = (0, express_1.Router)();
    const controller = (0, feedback_controller_1.feedbackController)(prisma);
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
    router.post('/', (0, validate_request_1.validateRequest)({ body: feedback_schema_1.createFeedbackSchema }), controller.create);
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
    router.get('/', (0, validate_request_1.validateRequest)({ query: feedback_schema_1.getAllFeedbackSchema }), controller.getAll);
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
    router.get('/:id', (0, validate_request_1.validateRequest)({ params: feedback_schema_1.getFeedbackSchema }), controller.getOne);
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
    router.put('/:id', (0, validate_request_1.validateRequest)({ params: feedback_schema_1.getFeedbackSchema, body: feedback_schema_1.updateFeedbackSchema }), controller.update);
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
    router.delete('/:id', (0, validate_request_1.validateRequest)({ params: feedback_schema_1.getFeedbackSchema }), controller.delete);
    return router;
};
exports.feedbackRoutes = feedbackRoutes;
