"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upvoteController = void 0;
const upvote_service_1 = require("../services/upvote.service");
const upvoteController = (prisma) => {
    const service = (0, upvote_service_1.upvoteService)(prisma);
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
                const upvotes = await service.getAll(req.query);
                res.status(200).json(upvotes);
            }
            catch (error) {
                next(error);
            }
        },
        getOne: async (req, res, next) => {
            try {
                const upvote = await service.getOne(parseInt(req.params.id));
                res.status(200).json(upvote);
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
exports.upvoteController = upvoteController;
