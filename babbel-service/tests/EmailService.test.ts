import { EmailService } from '../src/services/EmailService';
import { DomainError, FormatError, InputError } from '../src/utils/errorMessages';

describe('EmailService', () => {
    let emailService: EmailService;

    beforeAll(() => {
        emailService = new EmailService();
    });

    test('should derive email in firstName_initial_lastName format', () => {
        const fullName = 'Nina Simons';
        const domain = 'babbel.com';
        const requestId = '07e86d2d-32b0-42ed-bcbb-46edc0dbd3c2';
        const expectedEmail = 'nsimons@babbel.com';

        const result = emailService.deriveEmail(fullName, domain, requestId);
        expect(result).toBe(expectedEmail);
    });

    test('should derive email in firstName_lastName format', () => {
        const fullName = 'Priya Kuber';
        const domain = 'linkedin.com';
        const requestId = '07e86d2d-32b0-42ed-bcbb-46edc0dbd3c2';
        const expectedEmail = 'priyakuber@linkedin.com';

        const result = emailService.deriveEmail(fullName, domain, requestId);
        expect(result).toBe(expectedEmail);
    });

    test('should derive email in firstName_lastName format for Matthew Hall', () => {
        const fullName = 'Matthew Hall';
        const domain = 'google.com';
        const requestId = '07e86d2d-32b0-42ed-bcbb-46edc0dbd3c2';
        const expectedEmail = 'matthewhall@google.com';

        const result = emailService.deriveEmail(fullName, domain, requestId);
        expect(result).toBe(expectedEmail);
    });

    test('should throw DomainError if no format is found for the domain', () => {
        const fullName = 'Robert Miller';
        const domain = 'slideshare.net';
        const requestId = '07e86d2d-32b0-42ed-bcbb-46edc0dbd3c2';

        expect(() => {
            emailService.deriveEmail(fullName, domain, requestId);
        }).toThrow(DomainError);
    });

    test('should throw DomainError with correct status code and message', () => {
        const fullName = 'Robert Miller';
        const domain = 'slideshare.net';
        const requestId = '07e86d2d-32b0-42ed-bcbb-46edc0dbd3c2';

        try {
            emailService.deriveEmail(fullName, domain, requestId);
        } catch (error) {
            if (error instanceof DomainError) {
                expect(error.statusCode).toBe(404);
                expect(error.message).toBe(`No known email format for domain: ${domain}`);
            } else {
                throw new Error('Unexpected error type');
            }
        }
    });

    test('should throw FormatError with correct status code and message', () => {
        const fullName = 'Manu Jha';
        const domain = 'google.com';
        const requestId = '07e86d2d-32b0-42ed-bcbb-46edc0dbd3c2';

        try {
            emailService.deriveEmail(fullName, domain, requestId);
        } catch (error) {
            if (error instanceof FormatError) {
                expect(error.statusCode).toBe(400);
                expect(error.message).toBe(`Unknown email format for the name: ${fullName}`);
            } else {
                throw new Error('Unexpected error type');
            }
        }
    });

    test('should throw InputError for missing full name', () => {
        const fullName = '';
        const domain = 'linkedin.com';
        const requestId = '07e86d2d-32b0-42ed-bcbb-46edc0dbd3c2';

        expect(() => {
            emailService.deriveEmail(fullName, domain, requestId);
        }).toThrow(InputError);
    });

    test('should throw InputError for missing domain', () => {
        const fullName = 'Priya Kuber';
        const domain = '';
        const requestId = '07e86d2d-32b0-42ed-bcbb-46edc0dbd3c2';

        expect(() => {
            emailService.deriveEmail(fullName, domain, requestId);
        }).toThrow(InputError);
    });

    test('should throw InputError with correct message for missing full name', () => {
        const fullName = '';
        const domain = 'linkedin.com';
        const requestId = '07e86d2d-32b0-42ed-bcbb-46edc0dbd3c2';

        try {
            emailService.deriveEmail(fullName, domain, requestId);
        } catch (error) {
            if (error instanceof InputError) {
                expect(error.statusCode).toBe(400);
                expect(error.message).toBe('Invalid input: Please provide both full name and domain');
            } else {
                throw new Error('Unexpected error type');
            }
        }
    });

    test('should throw InputError with correct message for missing domain', () => {
        const fullName = 'Priya Kuber';
        const domain = '';
        const requestId = '07e86d2d-32b0-42ed-bcbb-46edc0dbd3c2';

        try {
            emailService.deriveEmail(fullName, domain, requestId);
        } catch (error) {
            if (error instanceof InputError) {
                expect(error.statusCode).toBe(400);
                expect(error.message).toBe('Invalid input: Please provide both full name and domain');
            } else {
                throw new Error('Unexpected error type');
            }
        }
    });

    test('should throw InputError for invalid full name format', () => {
        const fullName = 'John';
        const domain = 'example.com';
        const requestId = '07e86d2d-32b0-42ed-bcbb-46edc0dbd3c2';

        expect(() => {
            emailService.deriveEmail(fullName, domain, requestId);
        }).toThrow(InputError);
    });

    test('should throw InputError for special characters in full name', () => {
        const fullName = 'John@ Doe';
        const domain = 'example.com';
        const requestId = '07e86d2d-32b0-42ed-bcbb-46edc0dbd3c2';

        expect(() => {
            emailService.deriveEmail(fullName, domain, requestId);
        }).toThrow(InputError);
    });

    test('should handle case-insensitive domain matching', () => {
        const fullName = 'Priya Kuber';
        const domain = 'Linkedin.com';
        const requestId = '07e86d2d-32b0-42ed-bcbb-46edc0dbd3c2';
        const expectedEmail = 'priyakuber@linkedin.com';

        const result = emailService.deriveEmail(fullName, domain, requestId);
        expect(result).toBe(expectedEmail);
    });

    test('should handle case-insensitive name matching', () => {
        const fullName = 'PRIYA KUBER';
        const domain = 'linkedin.com';
        const requestId = '07e86d2d-32b0-42ed-bcbb-46edc0dbd3c2';
        const expectedEmail = 'priyakuber@linkedin.com';

        const result = emailService.deriveEmail(fullName, domain, requestId);
        expect(result).toBe(expectedEmail);
    });
});
