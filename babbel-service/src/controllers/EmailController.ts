import { Request, Response } from 'express';
import { EmailService } from '../services/EmailService';
import { InputError, DomainError, FormatError } from '../utils/errorMessages';
import {ApiResponse, DeriveEmailRequestBody} from "../types";
import { v4 as uuidv4 } from 'uuid';
import logger from "../utils/logger";

const emailService = new EmailService();

class EmailController {

    /**
     * Derives the email address based on full name and domain.
     * @param req - Express request object.
     * @param res - Express response object.
     */
    public deriveEmail(req: Request<{}, {}, DeriveEmailRequestBody>, res: Response<ApiResponse>): void {
        const reqId = req.headers['X-Request-Id'] as string|| uuidv4();
        try {
            const { fullName, domain } = req.body;

            const derivedEmail = emailService.deriveEmail(fullName, domain, reqId);

            res.json({
                status: 'success',
                message: 'Email derived successfully',
                data: {
                    email: derivedEmail
                }
            });
        } catch (error) {
            logger.error({ reqId, error, message : 'Error deriving email' });
            if (error instanceof InputError || error instanceof DomainError || error instanceof FormatError) {
                res.status(error.statusCode).json({
                    status: 'error',
                    message: error.message,
                    error_code: error.statusCode
                });
            } else {
                res.status(500).json({
                    status: 'error',
                    message: `Internal Server Errors : ${error}`,
                    error_code: 500
                });
            }
        }
    }
}

export default new EmailController();
