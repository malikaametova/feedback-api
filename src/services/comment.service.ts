import { PrismaClient, Comment, Prisma } from "@prisma/client";

export const commentService = (prisma: PrismaClient) => {
    return {
        create: async (data: Prisma.CommentCreateInput): Promise<Comment> => {
            return prisma.comment.create({
                data
            })
        },
        getAll: async (params: any) => {
            const { post_id, author_id } = params
            const where: Prisma.CommentWhereInput = {};

            if (post_id) {
                where.post_id = post_id;
            }
            if(author_id) {
                where.author_id = author_id
            }
             const result = await prisma.comment.findMany({
                where,
            });

            return result
        },
        getOne: async (id: number): Promise<Comment | null> => {
            return prisma.comment.findUnique({
                where: {
                    id
                }
            })
        },
        update: async (id: number, data: Prisma.CommentUpdateInput): Promise<Comment> => {
            return prisma.comment.update({
                where: {
                    id
                },
                data
            })
        },
        delete: async (id: number): Promise<Comment> => {
            return prisma.comment.delete({
                where: {
                    id
                }
            })
        }
    }
}