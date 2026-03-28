/**
 * Gateway API Response Types
 * Standardized response structure for all microservice communications
 */

export interface ApiResponse<T = unknown> {
  statusCode: number;
  message: string;
  data: T;
}

export interface ApiError {
  statusCode: number;
  message: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface HealthCheckResponse {
  status: 'healthy' | 'degraded' | 'unhealthy';
  timestamp: string;
  services: {
    [service: string]: {
      status: 'up' | 'down';
      latency?: number;
      error?: string;
    };
  };
}

export interface ResponseMetadata {
  requestId: string;
  timestamp: string;
  version: string;
  cacheHit?: boolean;
}

export interface StructuredApiResponse<T = unknown> {
  success: boolean;
  data: T;
  metadata: ResponseMetadata;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export interface TestSession {
  sessionId: string;
  startedAt: string;
  metadata?: Record<string, unknown>;
}

export interface TestResult {
  id: string;
  score: number;
  percentile: number;
  accuracyPct: number;
  avgReactionMs: number;
  interpretation: string;
  recommendations: string[];
  completedAt: string;
}
