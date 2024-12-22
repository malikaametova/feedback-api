"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackController = void 0;
const feedback_service_1 = require("../services/feedback.service");
const feedbackController = (prisma) => {
    const service = (0, feedback_service_1.feedbackService)(prisma);
    return {
        create: async (req, res, next) => {
            try {
                const created = await service.create(req.body);
                res.status(201).json(created);
            }
            catch (error) {
                next(error);
            }
        },
        getAll: async (req, res, next) => {
            try {
                const feedback = await service.getAll(req.query);
                res.status(200).json(feedback);
            }
            catch (error) {
                next(error);
            }
        },
        getOne: async (req, res, next) => {
            try {
                const feedback = await service.getOne(parseInt(req.params.id));
                res.status(200).json(feedback);
            }
            catch (error) {
                next(error);
            }
        },
        update: async (req, res, next) => {
            try {
                const updated = await service.update(parseInt(req.params.id), req.body);
                res.status(200).json(updated);
            }
            catch (error) {
                next(error);
            }
        },
        delete: async (req, res, next) => {
            try {
                await service.delete(parseInt(req.params.id));
                res.status(204).send();
            }
            catch (error) {
                next(error);
            }
        }
    };
};
exports.feedbackController = feedbackController;
