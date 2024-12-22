"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const userService = (prisma) => {
    return {
        create: async (data) => {
            return prisma.user.create({
                data
            });
        },
        getOne: async (id) => {
            return prisma.user.findUnique({
                where: {
                    id
                }
            });
        },
        update: async (id, data) => {
            return prisma.user.update({
                where: {
                    id
                },
                data
            });
        },
        delete: async (id) => {
            return prisma.user.delete({
                where: {
                    id
                }
            });
        }
    };
};
exports.userService = userService;
