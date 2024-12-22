"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusRoutes = void 0;
const express_1 = require("express");
const status_controller_1 = require("../controllers/status.controller");
/**
 * @swagger
 * tags:
 *   name: Statuses
 *   description: Operations related to feedback statuses
 */
const statusRoutes = () => {
    const router = (0, express_1.Router)();
    const controller = (0, status_controller_1.statusController)();
    /**
    * @swagger
    * /statuses:
    *  get:
    *    summary: Get all statuses
    *    tags: [Statuses]
    *    responses:
    *      200:
    *         description: List of statuses
    *         content:
    *           application/json:
    *               schema:
    *                   type: array
    *                   items:
    *                       type: string
    *                       example: "Idea"
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
exports.statusRoutes = statusRoutes;
