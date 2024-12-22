"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusController = void 0;
const statuses = ["Idea", "Open", "In progress", "Done", "Closed"];
const statusController = () => {
    return {
        getAll: async (_req, res) => {
            res.status(200).json(statuses);
        }
    };
};
exports.statusController = statusController;
