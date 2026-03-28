/**
 * Trail Making Test Service
 * API client for Trail Making Test microservice
 */

import { gatewayClient, ROUTES } from '../../gateway';
import type { StructuredApiResponse, TestResult } from '../../gateway/types';

export interface TrailCircles {
  id: number;
  x: number;
  y: number;
  isNumber: boolean;
  value: string;
}

export interface TrailSubmitParams {
  sessionId: string;
  part: 'A' | 'B';
  time: number;
  errors: number;
}

export interface TrailStartResponse {
  sessionId: string;
  part: 'A' | 'B';
  circles: TrailCircles[];
}

export const trailsTestService = {
  /**
   * Start a Trail Making test session (Part A or B)
   */
  async start(part: 'A' | 'B'): Promise<StructuredApiResponse<TrailStartResponse>> {
    return gatewayClient.post<TrailStartResponse>(ROUTES.TRAILS.START, { part });
  },

  /**
   * Submit Trail Making test results
   */
  async submit(params: TrailSubmitParams): Promise<StructuredApiResponse<TestResult>> {
    return gatewayClient.post<TestResult>(ROUTES.TRAILS.SUBMIT, params);
  },

  /**
   * Get user's Trail Making test results
   */
  async getResults(): Promise<StructuredApiResponse<TestResult[]>> {
    return gatewayClient.get<TestResult[]>(ROUTES.TRAILS.RESULTS);
  },

  /**
   * Get specific Trail result by session ID
   */
  async getResult(sessionId: string): Promise<StructuredApiResponse<TestResult>> {
    return gatewayClient.get<TestResult>(ROUTES.TRAILS.RESULT(sessionId));
  },
};

export default trailsTestService;
