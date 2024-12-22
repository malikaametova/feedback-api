class ApiError extends Error {
    statusCode: number;
    errors?: string[];

    constructor(statusCode: number, message: string, errors?: string[]) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;

        // Это помогает сохранить правильную трассировку стека
        Object.setPrototypeOf(this, ApiError.prototype);
    }

    static badRequest(message = "Bad Request", errors?: string[]): ApiError {
        return new ApiError(400, message, errors);
    }

    static unauthorized(message = "Unauthorized", errors?: string[]): ApiError {
        return new ApiError(401, message, errors);
    }
    
    static forbidden(message = "Forbidden", errors?: string[]): ApiError {
        return new ApiError(403, message, errors);
    }

    static notFound(message = "Not Found", errors?: string[]): ApiError {
        return new ApiError(404, message, errors);
    }

     static conflict(message = "Conflict", errors?: string[]): ApiError {
        return new ApiError(409, message, errors);
    }

    static internal(message = "Internal Server Error", errors?: string[]): ApiError {
        return new ApiError(500, message, errors);
    }
}

export default ApiError;