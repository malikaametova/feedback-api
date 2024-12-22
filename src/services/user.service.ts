import { PrismaClient, User, Prisma } from "@prisma/client";

export const userService = (prisma: PrismaClient) => {
    return {
        create: async (data: Prisma.UserCreateInput): Promise<User> => {
            return prisma.user.create({
                data
            })
        },
        getOne: async (id: number): Promise<User | null> => {
            return prisma.user.findUnique({
                where: {
                    id
                }
            })
        },
        update: async (id: number, data: Prisma.UserUpdateInput): Promise<User> => {
            return prisma.user.update({
                where: {
                    id
                },
                data
            })
        },
        delete: async (id: number): Promise<User> => {
            return prisma.user.delete({
                where: {
                    id
                }
            })
        }
    }
}