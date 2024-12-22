import { PrismaClient, Upvote, Prisma } from "@prisma/client";

export const upvoteService = (prisma: PrismaClient) => {
    return {
        create: async (data: Prisma.UpvoteCreateInput): Promise<Upvote> => {
            return prisma.upvote.create({
                data
            })
        },
        getAll: async (params: any) => {
            const { post_id, user_id } = params
            const where: Prisma.UpvoteWhereInput = {};

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
        getOne: async (id: number): Promise<Upvote | null> => {
             return prisma.upvote.findUnique({
                where: {
                    id
                }
            })
        },
        delete: async (id: number): Promise<Upvote> => {
            return prisma.upvote.delete({
                where: {
                    id
                }
            })
        }
    }
}