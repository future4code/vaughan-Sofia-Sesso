export abstract class CustomError extends Error {
    public abstract statusCode: number

    constructor(message: string) {
        super(message)
    }
}

export class Unauthorized extends CustomError {
    public statusCode: number = 401
}

export class NotFound extends CustomError {
    public statusCode: number = 404
}

export class Conflict extends CustomError {
    public statusCode: number = 409
}

export class UnprocessableEntity extends CustomError {
    public statusCode: number = 422
}