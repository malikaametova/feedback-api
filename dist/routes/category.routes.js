"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = require("express");
const category_controller_1 = require("../controllers/category.controller");
/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Operations related to feedback categories
 */
const categoryRoutes = () => {
    const router = (0, express_1.Router)();
    const controller = (0, category_controller_1.categoryController)();
    /**
    * @swagger
    * /categories:
    *  get:
    *    summary: Get all categories
    *    tags: [Categories]
    *    responses:
    *      200:
    *        description: List of categories
    *        content:
    *           application/json:
    *               schema:
    *                   type: array
    *                   items:
    *                       type: string
    *                       example: "Functionality"
    *      500:
    *         description: Internal server error
    *         content:
    *          application/json:
    *              schema:
    *                 $ref: '#/components/schemas/Error'
    */
    router.get('/', controller.getAll);
    return router;
};
exports.categoryRoutes = categoryRoutes;
