import sampleData from '../data/sampleData.json';
import {DomainError, FormatError} from '../utils/errorMessages';
import {Validator} from "./Validator";
import logger from '../utils/logger';

/**
 * EmailService class to derive email addresses based on known formats.
 */
export class EmailService {
    private readonly domainFormatMap: Record<string, string>;

    constructor(data?: Record<string, string>) {
        this.domainFormatMap = this.preprocessData(data ?? sampleData);
    }

    /**
     * Preprocesses the sample data to map domains to known email formats.
     * @param data - The sample data with employee names and email addresses.
     * @returns A map of domains to their corresponding email formats.
     */
    private preprocessData(data: Record<string, string>): Record<string, string> {
        const domainFormatMap: Record<string, string> = {};

        for (const [name, email] of Object.entries(data)) {
            const domain = email.split('@')[1];
            if (!domainFormatMap[domain]) {
                domainFormatMap[domain] = this.extractFormatFromEmail(email, name);
            }
        }

        return domainFormatMap;
    }

    /**
     * Derives an email address based on full name and domain.
     * @param fullName - The full name of the employee.
     * @param domain - The company domain (e.g., domain.com).
     * @param requestId - The request id which will be used to trace the request
     * @returns The derived email address.
     * @throws InputError, DomainError, or FormatError for invalid input, missing domain, or format mismatch.
     */
    public deriveEmail(fullName: string, domain: string, requestId: string): string {
        logger.info({ requestId, action: 'deriveEmail', fullName, domain, message: 'Starting email derivation process'});
        Validator.validateMandatoryInput(fullName, domain);
        Validator.validateFullName(fullName);
        Validator.validateDomain(domain);
        const format = this.domainFormatMap[domain];
        if (!format) {
            throw new DomainError(domain);
        }
        const derivedEmail = this.applyFormat(fullName, format, domain);
        logger.info({ requestId, derivedEmail, message: 'Derived email successfully' });
        return derivedEmail;
    }

    /**
     * Extracts an email format based on an existing email address and full name.
     * @param email - The known email address.
     * @param fullName - The full name corresponding to the email.
     * @returns One of the known formats ('first_name_last_name' or 'first_name_initial_last_name').
     * @throws FormatError if the format cannot be derived from the email.
     */
    private extractFormatFromEmail(email: string, fullName: string): string {
        const [firstName, lastName] = fullName.toLowerCase().split(' ');

        if (email.startsWith(`${firstName}${lastName}`)) {
            return 'first_name_last_name';
        }

        if (email.startsWith(`${firstName[0]}${lastName}`)) {
            return 'first_name_initial_last_name';
        }

        throw new FormatError(fullName);
    }

    /**
     * Applies the derived format to generate the email based on full name and domain.
     * @param fullName - The full name of the employee.
     * @param format - The format to apply ('first_name_last_name' or 'first_name_initial_last_name').
     * @param domain - The company domain (e.g., domain.com).
     * @returns The constructed email address.
     */
    private applyFormat(fullName: string, format: string, domain: string): string {
        const [firstName, lastName] = fullName.split(' ');

        switch (format) {
            case 'first_name_last_name':
                return `${firstName.toLowerCase()}${lastName.toLowerCase()}@${domain}`;
            case 'first_name_initial_last_name':
                return `${firstName[0].toLowerCase()}${lastName.toLowerCase()}@${domain}`;
            default:
                throw new FormatError(fullName);
        }
    }
}
