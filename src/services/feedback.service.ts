import { PrismaClient, FeedbackPost, Prisma } from "@prisma/client";
import { PaginatedResult } from "../types";


export const feedbackService = (prisma: PrismaClient) => {
    return {
        create: async (data: Prisma.FeedbackPostCreateInput): Promise<FeedbackPost> => {
            return prisma.feedbackPost.create({
                data
            })
        },
        getAll: async (params: any): Promise<PaginatedResult<FeedbackPost>> => {
            const { category, status, sortBy, order, page, limit } = params;
            const where: Prisma.FeedbackPostWhereInput = {};
            const orderBy: Prisma.FeedbackPostOrderByWithRelationInput = {};

            if (category) {
                where.category = category;
            }

            if (status) {
                where.status = status;
            }


            if (sortBy) {
               (orderBy as Prisma.FeedbackPostOrderByWithRelationInput)[sortBy as keyof Prisma.FeedbackPostOrderByWithRelationInput] = order === 'desc' ? 'desc' : 'asc';
            }

            const total = await prisma.feedbackPost.count({ where });
            const result = await prisma.feedbackPost.findMany({
                where,
                orderBy,
                skip: page && limit ? (page - 1) * limit : undefined,
                take: limit ? limit : undefined,
            });

            return {
                items: result,
                total,
                page: page || 1,
                limit: limit || result.length,
            };
        },
        getOne: async (id: number): Promise<FeedbackPost | null> => {
            return prisma.feedbackPost.findUnique({
                where: {
                    id
                }
            });
        },
        update: async (id: number, data: Prisma.FeedbackPostUpdateInput): Promise<FeedbackPost> => {
            return prisma.feedbackPost.update({
                where: {
                    id
                },
                data,
            });
        },
        delete: async (id: number): Promise<FeedbackPost> => {
            return prisma.feedbackPost.delete({
                where: {
                    id
                }
            });
        },
    };
};