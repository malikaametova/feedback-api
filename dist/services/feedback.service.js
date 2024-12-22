"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackService = void 0;
const feedbackService = (prisma) => {
    return {
        create: async (data) => {
            return prisma.feedbackPost.create({
                data
            });
        },
        getAll: async (params) => {
            const { category, status, sortBy, order, page, limit } = params;
            const where = {};
            const orderBy = {};
            if (category) {
                where.category = category;
            }
            if (status) {
                where.status = status;
            }
            if (sortBy) {
                orderBy[sortBy] = order === 'desc' ? 'desc' : 'asc';
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
        getOne: async (id) => {
            return prisma.feedbackPost.findUnique({
                where: {
                    id
                }
            });
        },
        update: async (id, data) => {
            return prisma.feedbackPost.update({
                where: {
                    id
                },
                data,
            });
        },
        delete: async (id) => {
            return prisma.feedbackPost.delete({
                where: {
                    id
                }
            });
        },
    };
};
exports.feedbackService = feedbackService;
