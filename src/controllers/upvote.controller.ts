import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from 'express';
import { upvoteService } from "../services/upvote.service";

export const upvoteController = (prisma: PrismaClient) => {
    const service = upvoteService(prisma)

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
                const upvotes = await service.getAll(req.query)
                res.status(200).json(upvotes)
            } catch (error) {
                next(error)
            }
        },
         getOne: async (req: Request, res: Response, next: NextFunction) => {
            try {
               const upvote = await service.getOne(parseInt(req.params.id))
               res.status(200).json(upvote)
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