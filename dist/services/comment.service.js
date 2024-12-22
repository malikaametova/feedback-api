"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentService = void 0;
const commentService = (prisma) => {
    return {
        create: async (data) => {
            return prisma.comment.create({
                data
            });
        },
        getAll: async (params) => {
            const { post_id, author_id } = params;
            const where = {};
            if (post_id) {
                where.post_id = post_id;
            }
            if (author_id) {
                where.author_id = author_id;
            }
            const result = await prisma.comment.findMany({
                where,
            });
            return result;
        },
        getOne: async (id) => {
            return prisma.comment.findUnique({
                where: {
                    id
                }
            });
        },
        update: async (id, data) => {
            return prisma.comment.update({
                where: {
                    id
                },
                data
            });
        },
        delete: async (id) => {
            return prisma.comment.delete({
                where: {
                    id
                }
            });
        }
    };
};
exports.commentService = commentService;
