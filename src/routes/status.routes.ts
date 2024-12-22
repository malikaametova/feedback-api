import { Router } from 'express';
import { statusController } from '../controllers/status.controller';


/**
 * @swagger
 * tags:
 *   name: Statuses
 *   description: Operations related to feedback statuses
 */
export const statusRoutes = (): Router => {
  const router = Router();
  const controller = statusController();

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