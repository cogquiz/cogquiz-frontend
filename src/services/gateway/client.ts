/**
 * Gateway Client Configuration
 * Handles all API calls to the microservice gateway
 */

import type { StructuredApiResponse, ResponseMetadata } from './types';

const GATEWAY_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.cogquiz.com';

interface RequestConfig {
  headers?: Record<string, string>;
  timeout?: number;
}

class GatewayClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string = GATEWAY_URL) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  private getAuthToken(): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('auth_token');
  }

  private generateRequestId(): string {
    return `req_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
    config: RequestConfig = {}
  ): Promise<StructuredApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    const token = this.getAuthToken();
    
    const headers: Record<string, string> = {
      ...this.defaultHeaders,
      ...config.headers,
    };
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const requestId = this.generateRequestId();
    headers['X-Request-ID'] = requestId;

    const metadata: ResponseMetadata = {
      requestId,
      timestamp: new Date().toISOString(),
      version: '1.0.0',
    };

    try {
      const controller = new AbortController();
      const timeoutId = config.timeout 
        ? setTimeout(() => controller.abort(), config.timeout) 
        : null;

      const response = await fetch(url, {
        ...options,
        headers,
        signal: controller.signal,
      });

      if (timeoutId) clearTimeout(timeoutId);

      const data = await response.json();
      
      if (!response.ok) {
        return {
          success: false,
          data: null as T,
          metadata,
          error: {
            code: data.code || `HTTP_${response.status}`,
            message: data.message || data.error || 'An error occurred',
            details: data,
          },
        };
      }

      const apiResponse = data as { data?: T; statusCode?: number; message?: string };
      return {
        success: true,
        data: apiResponse.data ?? (data as T),
        metadata,
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Network error';
      return {
        success: false,
        data: null as T,
        metadata,
        error: {
          code: 'NETWORK_ERROR',
          message: errorMessage,
        },
      };
    }
  }

  async get<T>(endpoint: string, config?: RequestConfig): Promise<StructuredApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'GET' }, config);
  }

  async post<T>(
    endpoint: string, 
    body?: unknown, 
    config?: RequestConfig
  ): Promise<StructuredApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    }, config);
  }

  async patch<T>(
    endpoint: string, 
    body?: unknown, 
    config?: RequestConfig
  ): Promise<StructuredApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: body ? JSON.stringify(body) : undefined,
    }, config);
  }

  async delete<T>(endpoint: string, config?: RequestConfig): Promise<StructuredApiResponse<T>> {
    return this.request<T>(endpoint, { method: 'DELETE' }, config);
  }

  async healthCheck(): Promise<StructuredApiResponse<{ status: string }>> {
    return this.get<{ status: string }>('/health');
  }
}

export const gatewayClient = new GatewayClient();
export { GatewayClient };
