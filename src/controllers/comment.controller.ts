import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from 'express';
import { commentService } from "../services/comment.service";

export const commentController = (prisma: PrismaClient) => {
    const service = commentService(prisma)

    return {
        create: async (req: Request, res: Response, next: NextFunction) => {
            try {
                const created = await service.create(req.body)
                res.status(201).json(created)
            } catch (error) {
                next(error)
            }
        },
        getAll: async (req: Request, res: Response, next: NextFunction) => {
            try {
                const comments = await service.getAll(req.query)
                res.status(200).json(comments)
            } catch (error) {
                next(error)
            }
        },
        getOne: async (req: Request, res: Response, next: NextFunction) => {
            try {
               const comment = await service.getOne(parseInt(req.params.id))
               res.status(200).json(comment)
            } catch (error) {
                next(error)
            }
        },
        update: async (req: Request, res: Response, next: NextFunction) => {
            try {
                const updated = await service.update(parseInt(req.params.id), req.body)
                res.status(200).json(updated)
            } catch (error) {
                next(error)
            }
        },
        delete: async (req: Request, res: Response, next: NextFunction) => {
            try {
                await service.delete(parseInt(req.params.id))
                res.status(204).send()
            } catch (error) {
                next(error)
            }
        }
    }
}