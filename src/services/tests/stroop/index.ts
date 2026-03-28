/**
 * Stroop Test Service
 * API client for Stroop Test microservice
 */

import { gatewayClient, ROUTES } from '../../gateway';
import type { StructuredApiResponse, TestSession, TestResult } from '../../gateway/types';

export interface StroopTrial {
  trialIndex: number;
  inkColor: string;
  word: string;
}

export interface StroopSubmitParams {
  sessionId: string;
  results: {
    trialIndex: number;
    userResponse: string;
    reactionMs: number;
    isCorrect: boolean;
  }[];
}

export interface StroopStartResponse {
  sessionId: string;
  trials: StroopTrial[];
}

export const stroopTestService = {
  /**
   * Start a new Stroop test session
   */
  async start(): Promise<StructuredApiResponse<StroopStartResponse>> {
    return gatewayClient.post<StroopStartResponse>(ROUTES.STROOP.START);
  },

  /**
   * Submit Stroop test results
   */
  async submit(params: StroopSubmitParams): Promise<StructuredApiResponse<TestResult>> {
    return gatewayClient.post<TestResult>(ROUTES.STROOP.SUBMIT, params);
  },

  /**
   * Get user's Stroop test results
   */
  async getResults(): Promise<StructuredApiResponse<TestResult[]>> {
    return gatewayClient.get<TestResult[]>(ROUTES.STROOP.RESULTS);
  },

  /**
   * Get specific Stroop result by session ID
   */
  async getResult(sessionId: string): Promise<StructuredApiResponse<TestResult>> {
    return gatewayClient.get<TestResult>(ROUTES.STROOP.RESULT(sessionId));
  },
};

export default stroopTestService;
