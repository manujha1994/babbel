import { EmailService } from '../src/services/EmailService';
import { DomainError, FormatError, InputError } from '../src/utils/errorMessages';

describe('EmailService', () => {
    let emailService: EmailService;

    beforeAll(() => {
        emailService = new EmailService();
    });

    test('should derive email in firstNameInitial_lastName format', () => {
        const fullName = 'Nina Simons';
        const domain = 'babbel.com';
        const expectedEmail = 'nsimons@babbel.com';

        const result = emailService.deriveEmail(fullName, domain);
        expect(result).toBe(expectedEmail);
    });

    test('should derive email in firstName_lastName format', () => {
        const fullName = 'Priya Kuber';
        const domain = 'linkedin.com';
        const expectedEmail = 'priyakuber@linkedin.com';

        const result = emailService.deriveEmail(fullName, domain);
        expect(result).toBe(expectedEmail);
    });

    test('should throw DomainError if no format is found for the domain', () => {
        const fullName = 'Robert Miller';
        const domain = 'slideshare.net';

        expect(() => {
            emailService.deriveEmail(fullName, domain);
        }).toThrow(DomainError);
    });

    test('should throw FormatError if email format is unknown for the name', () => {
        const fullName = 'Manu Jha';
        const domain = 'google.com';

        expect(() => {
            emailService.deriveEmail(fullName, domain);
        }).toThrow(FormatError);
    });

    test('should throw DomainError with correct status code and message', () => {
        const fullName = 'Robert Miller';
        const domain = 'slideshare.net';

        try {
            emailService.deriveEmail(fullName, domain);
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

        try {
            emailService.deriveEmail(fullName, domain);
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

        expect(() => {
            emailService.deriveEmail(fullName, domain);
        }).toThrow(InputError);
    });

    test('should throw InputError for missing domain', () => {
        const fullName = 'Priya Kuber';
        const domain = '';

        expect(() => {
            emailService.deriveEmail(fullName, domain);
        }).toThrow(InputError);
    });

    test('should throw InputError with correct message for missing full name', () => {
        const fullName = '';
        const domain = 'linkedin.com';

        try {
            emailService.deriveEmail(fullName, domain);
        } catch (error) {
            if (error instanceof InputError) {
                expect(error.statusCode).toBe(400);
                expect(error.message).toBe('Full name must be in "First Last" format without special characters.');
            } else {
                throw new Error('Unexpected error type');
            }
        }
    });

    test('should throw InputError with correct message for missing domain', () => {
        const fullName = 'Priya Kuber';
        const domain = '';

        try {
            emailService.deriveEmail(fullName, domain);
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

        expect(() => {
            emailService.deriveEmail(fullName, domain);
        }).toThrow(InputError);
    });

    test('should throw InputError for special characters in full name', () => {
        const fullName = 'John@ Doe';
        const domain = 'example.com';

        expect(() => {
            emailService.deriveEmail(fullName, domain);
        }).toThrow(InputError);
    });

    test('should handle case-insensitive domain matching', () => {
        const fullName = 'Priya Kuber';
        const domain = 'Linkedin.com';
        const expectedEmail = 'priyakuber@linkedin.com';

        const result = emailService.deriveEmail(fullName, domain);
        expect(result).toBe(expectedEmail);
    });

    test('should handle case-insensitive name matching', () => {
        const fullName = 'PRIYA KUBER';
        const domain = 'linkedin.com';
        const expectedEmail = 'priyakuber@linkedin.com';

        const result = emailService.deriveEmail(fullName, domain);
        expect(result).toBe(expectedEmail);
    });
});
