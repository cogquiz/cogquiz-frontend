/**
 * Tower of London Test Service
 * API client for Tower of London Test microservice
 */

import { gatewayClient, ROUTES } from '../../gateway';
import type { StructuredApiResponse, TestResult } from '../../gateway/types';

export interface LondonMove {
  from: string;
  to: string;
  beadColor: string;
}

export interface LondonSubmitParams {
  sessionId: string;
  moves: LondonMove[];
  totalMoves: number;
  minimumMoves: number;
  planningTimeMs: number;
  executionTimeMs: number;
}

export interface LondonStartResponse {
  sessionId: string;
  problemNumber: number;
}

export interface LondonMoveResponse {
  valid: boolean;
  gameState: {
    pegs: { name: string; beads: { color: string; position: number }[] }[];
    moveCount: number;
  };
}

export const londonTestService = {
  /**
   * Start a new Tower of London session
   */
  async start(): Promise<StructuredApiResponse<LondonStartResponse>> {
    return gatewayClient.post<LondonStartResponse>(ROUTES.LONDON.START);
  },

  /**
   * Make a move in Tower of London
   */
  async move(sessionId: string, from: string, to: string, beadColor: string): Promise<StructuredApiResponse<LondonMoveResponse>> {
    return gatewayClient.post<LondonMoveResponse>(ROUTES.LONDON.MOVE, { sessionId, from, to, beadColor });
  },

  /**
   * Submit Tower of London results
   */
  async submit(sessionId: string): Promise<StructuredApiResponse<TestResult>> {
    return gatewayClient.post<TestResult>(ROUTES.LONDON.SUBMIT, { sessionId });
  },

  /**
   * Get user's Tower of London results
   */
  async getResults(): Promise<StructuredApiResponse<TestResult[]>> {
    return gatewayClient.get<TestResult[]>(ROUTES.LONDON.RESULTS);
  },

  /**
   * Get specific Tower of London result by session ID
   */
  async getResult(sessionId: string): Promise<StructuredApiResponse<TestResult>> {
    return gatewayClient.get<TestResult>(ROUTES.LONDON.RESULT(sessionId));
  },
};

export default londonTestService;
