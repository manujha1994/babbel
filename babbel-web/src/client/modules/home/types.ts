export interface FormData {
  fullName: string;
  domain: string;
}

export interface FormInput {
  onSubmit: (formData: FormData) => void;
  isLoading: boolean;
}

export interface ResponseComputedData {
  email: string;
}

export interface ErrorResponse {
  status: string;
  message: string;
  error_code: number;
}

export interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}

export interface ApiErrorResponse {
  status: string;
  message: string;
  error_code: number;
}
