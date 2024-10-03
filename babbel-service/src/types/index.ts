export interface DeriveEmailRequestBody {
    fullName: string;
    domain: string;
}

export interface ApiResponse<T = any> {
    status: 'success' | 'error';
    message: string;
    data?: T;
    error_code?: number;
}
