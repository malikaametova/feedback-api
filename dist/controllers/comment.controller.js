"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentController = void 0;
const comment_service_1 = require("../services/comment.service");
const commentController = (prisma) => {
    const service = (0, comment_service_1.commentService)(prisma);
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
                const comments = await service.getAll(req.query);
                res.status(200).json(comments);
            }
            catch (error) {
                next(error);
            }
        },
        getOne: async (req, res, next) => {
            try {
                const comment = await service.getOne(parseInt(req.params.id));
                res.status(200).json(comment);
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
exports.commentController = commentController;
