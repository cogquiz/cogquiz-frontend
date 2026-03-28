/**
 * Syllogisms Test Service
 * API client for Syllogisms Test microservice
 */

import { gatewayClient, ROUTES } from '../../gateway';
import type { StructuredApiResponse, TestResult } from '../../gateway/types';

export interface Syllogism {
  id: number;
  premise1: string;
  premise2: string;
  conclusion: string;
}

export interface SyllogismSubmitParams {
  sessionId: string;
  answers: {
    syllogismId: number;
    userAnswer: 'valid' | 'invalid';
    isCorrect: boolean;
    reactionMs: number;
  }[];
}

export interface SyllogismsStartResponse {
  sessionId: string;
  syllogisms: Syllogism[];
}

export const syllogismsTestService = {
  /**
   * Start a new Syllogisms test session
   */
  async start(): Promise<StructuredApiResponse<SyllogismsStartResponse>> {
    return gatewayClient.post<SyllogismsStartResponse>(ROUTES.SYLLOGISMS.START);
  },

  /**
   * Submit Syllogisms test results
   */
  async submit(params: SyllogismSubmitParams): Promise<StructuredApiResponse<TestResult>> {
    return gatewayClient.post<TestResult>(ROUTES.SYLLOGISMS.SUBMIT, params);
  },

  /**
   * Get user's Syllogisms test results
   */
  async getResults(): Promise<StructuredApiResponse<TestResult[]>> {
    return gatewayClient.get<TestResult[]>(ROUTES.SYLLOGISMS.RESULTS);
  },

  /**
   * Get specific Syllogisms result by session ID
   */
  async getResult(sessionId: string): Promise<StructuredApiResponse<TestResult>> {
    return gatewayClient.get<TestResult>(ROUTES.SYLLOGISMS.RESULT(sessionId));
  },
};

export default syllogismsTestService;
