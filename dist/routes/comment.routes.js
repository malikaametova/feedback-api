"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRoutes = void 0;
const express_1 = require("express");
const comment_controller_1 = require("../controllers/comment.controller");
const validate_request_1 = require("../middleware/validate-request");
const comment_schema_1 = require("../schemas/comment.schema");
/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Operations related to comments
 */
const commentRoutes = (prisma) => {
    const router = (0, express_1.Router)();
    const controller = (0, comment_controller_1.commentController)(prisma);
    /**
     * @swagger
     * /comments:
     *   post:
     *     summary: Create a new comment
     *     tags: [Comments]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Comment'
     *     responses:
     *       201:
     *         description: Created comment
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Comment'
     *       400:
     *         description: Validation error
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     *       500:
     *         description: Internal server error
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     */
    router.post('/', (0, validate_request_1.validateRequest)({ body: comment_schema_1.createCommentSchema }), controller.create);
    /**
     * @swagger
     * /comments:
     *   get:
     *     summary: Get all comments
     *     tags: [Comments]
     *     parameters:
     *       - in: query
     *         name: post_id
     *         schema:
     *           type: integer
     *         description: Filter comments by post ID
     *       - in: query
     *         name: author_id
     *         schema:
     *           type: integer
     *         description: Filter comments by author ID
     *     responses:
     *       200:
     *         description: List of comments
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Comment'
     *       500:
     *         description: Internal server error
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     */
    router.get('/', (0, validate_request_1.validateRequest)({ query: comment_schema_1.getAllCommentSchema }), controller.getAll);
    /**
     * @swagger
     * /comments/{id}:
     *   get:
     *     summary: Get comment by id
     *     tags: [Comments]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the comment to get
     *     responses:
     *       200:
     *         description: Comment details
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Comment'
     *       404:
     *         description: Comment not found
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     *       500:
     *         description: Internal server error
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     */
    router.get('/:id', (0, validate_request_1.validateRequest)({ params: comment_schema_1.getCommentSchema }), controller.getOne);
    /**
    * @swagger
    * /comments/{id}:
    *   put:
    *     summary: Update comment
    *     tags: [Comments]
    *     parameters:
    *       - in: path
    *         name: id
    *         required: true
    *         schema:
    *           type: integer
    *         description: ID of the comment to update
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/Comment'
    *     responses:
    *       200:
    *         description: Updated comment
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Comment'
    *       400:
    *         description: Validation error
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Error'
    *       404:
    *         description: Comment not found
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Error'
    *       500:
    *         description: Internal server error
    *         content:
    *           application/json:
    *             schema:
    *               $ref: '#/components/schemas/Error'
    */
    router.put('/:id', (0, validate_request_1.validateRequest)({ params: comment_schema_1.getCommentSchema, body: comment_schema_1.updateCommentSchema }), controller.update);
    /**
     * @swagger
     * /comments/{id}:
     *   delete:
     *     summary: Delete comment
     *     tags: [Comments]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *         description: ID of the comment to delete
     *     responses:
     *       204:
     *         description: Comment deleted successfully
     *       404:
     *         description: Comment not found
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     *       500:
     *         description: Internal server error
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     */
    router.delete('/:id', (0, validate_request_1.validateRequest)({ params: comment_schema_1.getCommentSchema }), controller.delete);
    return router;
};
exports.commentRoutes = commentRoutes;
