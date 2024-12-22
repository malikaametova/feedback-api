"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryController = void 0;
const categories_1 = require("../data/categories");
const categoryController = () => {
    return {
        getAll: async (_req, res) => {
            return res.status(200).json(categories_1.categories);
        }
    };
};
exports.categoryController = categoryController;
