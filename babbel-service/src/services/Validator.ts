import { InputError, FormatError } from '../utils/errorMessages';

export class Validator {
    /**
     * Validates that the full name and domain are present.
     * @param fullName - The full name to validate.
     * @param domain - The full name to validate.
     * @throws InputError if the full name is invalid.
     */
    public static validateMandatoryInput(fullName: string, domain: string): void {
        if (!fullName || !domain) {
            throw new InputError('Invalid input: Please provide both full name and domain');
        }
    }
    /**
     * Validates that the full name is in "First Last" format.
     * @param fullName - The full name to validate.
     * @throws InputError if the full name is invalid.
     */
    public static validateFullName(fullName: string): void {
        const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
        if (!nameRegex.test(fullName)) {
            throw new InputError("Full name must be in 'FirstName LastName' format without special characters.");
        }
    }

    /**
     * Validates that the domain is in a valid format like "example.com".
     * @param domain - The domain to validate.
     * @throws FormatError if the domain is invalid.
     */
    public static validateDomain(domain: string): void {
        const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!domainRegex.test(domain)) {
            throw new FormatError('Please enter a valid email domain (e.g., example.com).');
        }
    }
}
