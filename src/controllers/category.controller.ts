import { categories } from '../data/categories';

export const categoryController = () => {
    return {
        getAll: async (_req: any, res: any) => {
           return res.status(200).json(categories)
        }
    }
};