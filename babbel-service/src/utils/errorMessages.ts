/**
 * Base class for custom errors with a status code.
 */
class CustomError extends Error {
    public readonly statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}

/**
 * Specific error for unknown email formats.
 */
export class FormatError extends CustomError {
    constructor(name: string) {
        super(`Unknown email format for the name: ${name}`, 400);
        Object.setPrototypeOf(this, FormatError.prototype);
    }
}

/**
 * Specific error for domains without a known format.
 */
export class DomainError extends CustomError {
    constructor(domain: string) {
        super(`No known email format for domain: ${domain}`, 404);
        Object.setPrototypeOf(this, DomainError.prototype);
    }
}

/**
 * Specific error for invalid input.
 */
export class InputError extends CustomError {
    constructor(message: string) {
        super(message, 400);
        Object.setPrototypeOf(this, InputError.prototype);
    }
}
