/**
 * N-Back Test Service
 * API client for N-Back Test microservice
 */

import { gatewayClient, ROUTES } from '../../gateway';
import type { StructuredApiResponse, TestSession, TestResult } from '../../gateway/types';

export interface NBackTrial {
  trialIndex: number;
  stimulus: string;
  isMatch: boolean;
}

export interface NBackSubmitParams {
  sessionId: string;
  results: {
    trialIndex: number;
    userResponse: 'match' | 'no-match';
    reactionMs: number;
    isCorrect: boolean;
  }[];
}

export interface NBackStartResponse {
  sessionId: string;
  nLevel: number;
  trials: NBackTrial[];
}

export const nbackTestService = {
  /**
   * Start a new N-Back test session
   */
  async start(nLevel: number = 2): Promise<StructuredApiResponse<NBackStartResponse>> {
    return gatewayClient.post<NBackStartResponse>(
      ROUTES.NBACK.START,
      { nLevel }
    );
  },

  /**
   * Submit N-Back test results
   */
  async submit(params: NBackSubmitParams): Promise<StructuredApiResponse<TestResult>> {
    return gatewayClient.post<TestResult>(
      ROUTES.NBACK.SUBMIT,
      params
    );
  },

  /**
   * Get user's N-Back test results
   */
  async getResults(): Promise<StructuredApiResponse<TestResult[]>> {
    return gatewayClient.get<TestResult[]>(ROUTES.NBACK.RESULTS);
  },

  /**
   * Get specific N-Back result by session ID
   */
  async getResult(sessionId: string): Promise<StructuredApiResponse<TestResult>> {
    return gatewayClient.get<TestResult>(ROUTES.NBACK.RESULT(sessionId));
  },
};

export default nbackTestService;
