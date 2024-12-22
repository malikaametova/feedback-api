"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const client_1 = require("@prisma/client");
const feedback_routes_1 = require("./routes/feedback.routes");
const comment_routes_1 = require("./routes/comment.routes");
const upvote_routes_1 = require("./routes/upvote.routes");
const user_routes_1 = require("./routes/user.routes");
const category_routes_1 = require("./routes/category.routes");
const status_routes_1 = require("./routes/status.routes");
const swagger_1 = require("./swagger");
const error_handler_1 = require("./middleware/error-handler");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000; // Измененный порт
const prisma = new client_1.PrismaClient();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Documentation
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
// Routes
app.use('/api/feedback', (0, feedback_routes_1.feedbackRoutes)(prisma));
app.use('/api/comments', (0, comment_routes_1.commentRoutes)(prisma));
app.use('/api/upvotes', (0, upvote_routes_1.upvoteRoutes)(prisma));
app.use('/api/users', (0, user_routes_1.userRoutes)(prisma));
app.use('/api/categories', (0, category_routes_1.categoryRoutes)());
app.use('/api/statuses', (0, status_routes_1.statusRoutes)());
// Error handler middleware
app.use((err, req, res, next) => {
    (0, error_handler_1.errorHandler)(err, req, res, next);
});
app.get('/', (_req, res) => {
    res.send('Feedback API is running!');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
