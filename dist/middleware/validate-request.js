"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = void 0;
const validateRequest = (options) => {
    return async (req, _res, next) => {
        try {
            if (options.body) {
                options.body.parse(req.body);
            }
            if (options.query) {
                options.query.parse(req.query);
            }
            if (options.params) {
                options.params.parse(req.params);
            }
            next();
        }
        catch (error) {
            const errors = error.issues.map((issue) => ({
                message: issue.message,
                path: issue.path,
            }));
            return next(new Error(JSON.stringify({ message: "Validation failed", errors })));
        }
    };
};
exports.validateRequest = validateRequest;
