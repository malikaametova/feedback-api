import { Request, Response } from 'express';

const statuses = ["Idea", "Open", "In progress", "Done", "Closed"];

export const statusController = () => {
    return {
        getAll: async (_req: Request, res: Response) => {
            res.status(200).json(statuses)
        }
    }
}