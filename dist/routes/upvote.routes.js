"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upvoteRoutes = void 0;
const express_1 = require("express");
const upvote_controller_1 = require("../controllers/upvote.controller");
const validate_request_1 = require("../middleware/validate-request");
const upvote_schema_1 = require("../schemas/upvote.schema");
/**
 * @swagger
 * tags:
 *   name: Upvotes
 *   description: Operations related to upvotes
 */
const upvoteRoutes = (prisma) => {
    const router = (0, express_1.Router)();
    const controller = (0, upvote_controller_1.upvoteController)(prisma);
    /**
     * @swagger
     * /upvotes:
     *   post:
     *     summary: Create a new upvote
     *     tags: [Upvotes]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/Upvote'
     *     responses:
     *       201:
     *         description: Upvote created successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Upvote'
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
    router.post('/', (0, validate_request_1.validateRequest)({ body: upvote_schema_1.createUpvoteSchema }), controller.create);
    /**
     * @swagger
     * /upvotes:
     *   get:
     *     summary: Get all upvotes
     *     tags: [Upvotes]
     *     parameters:
     *       - in: query
     *         name: post_id
     *         schema:
     *           type: integer
     *         description: Filter by post id
     *         example: 1
     *       - in: query
     *         name: user_id
     *         schema:
     *           type: integer
     *         description: Filter by user id
     *         example: 1
     *     responses:
     *       200:
     *         description: Upvotes
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Upvote'
     *       500:
     *         description: Internal server error
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Error'
     */
    router.get('/', (0, validate_request_1.validateRequest)({ query: upvote_schema_1.getAllUpvoteSchema }), controller.getAll);
    /**
     * @swagger
     * /upvotes/{id}:
     *   get:
     *     summary: Get upvote by id
     *     tags: [Upvotes]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID of the upvote to get
     *         schema:
     *           type: integer
     *           example: 1
     *     responses:
     *       200:
     *         description: Upvote details
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Upvote'
     *       404:
     *         description: Upvote not found
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
    router.get('/:id', (0, validate_request_1.validateRequest)({ params: upvote_schema_1.getUpvoteSchema }), controller.getOne);
    /**
     * @swagger
     * /upvotes/{id}:
     *   delete:
     *     summary: Delete upvote
     *     tags: [Upvotes]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: ID of the upvote to delete
     *         schema:
     *           type: integer
     *           example: 1
     *     responses:
     *       204:
     *         description: Upvote deleted successfully
     *       404:
     *         description: Upvote not found
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
    router.delete('/:id', (0, validate_request_1.validateRequest)({ params: upvote_schema_1.getUpvoteSchema }), controller.delete);
    return router;
};
exports.upvoteRoutes = upvoteRoutes;
