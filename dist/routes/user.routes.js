"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const validate_request_1 = require("../middleware/validate-request");
const user_schema_1 = require("../schemas/user.schema");
const userRoutes = (prisma) => {
    console.log('User routes initialized');
    const router = (0, express_1.Router)();
    const controller = (0, user_controller_1.userController)(prisma); // Убираем все типы
    router.post('/', (0, validate_request_1.validateRequest)({ body: user_schema_1.createUserSchema }), controller.create);
    router.get('/', controller.getAll);
    router.get('/:id', controller.getById);
    router.put('/:id', (0, validate_request_1.validateRequest)({ body: user_schema_1.createUserSchema }), controller.update);
    router.delete('/:id', controller.delete);
    return router;
};
exports.userRoutes = userRoutes;
