"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upvoteService = void 0;
const upvoteService = (prisma) => {
    return {
        create: async (data) => {
            return prisma.upvote.create({
                data
            });
        },
        getAll: async (params) => {
            const { post_id, user_id } = params;
            const where = {};
            if (post_id) {
                where.post_id = post_id;
            }
            if (user_id) {
                where.user_id = user_id;
            }
            const result = await prisma.upvote.findMany({
                where
            });
            return result;
        },
        getOne: async (id) => {
            return prisma.upvote.findUnique({
                where: {
                    id
                }
            });
        },
        delete: async (id) => {
            return prisma.upvote.delete({
                where: {
                    id
                }
            });
        }
    };
};
exports.upvoteService = upvoteService;
