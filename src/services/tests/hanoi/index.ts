/**
 * Tower of Hanoi Test Service
 * API client for Tower of Hanoi Test microservice
 */

import { gatewayClient, ROUTES } from '../../gateway';
import type { StructuredApiResponse, TestResult } from '../../gateway/types';

export interface HanoiMove {
  from: string;
  to: string;
  diskSize: number;
}

export interface HanoiSubmitParams {
  sessionId: string;
  moves: HanoiMove[];
  totalMoves: number;
  minimumMoves: number;
  timeMs: number;
}

export interface HanoiStartResponse {
  sessionId: string;
  disks: number;
  roundNumber: number;
}

export interface HanoiMoveResponse {
  valid: boolean;
  gameState: {
    pegs: { name: string; disks: number[] }[];
    moveCount: number;
  };
}

export const hanoiTestService = {
  /**
   * Start a new Tower of Hanoi session
   */
  async start(disks: number = 3): Promise<StructuredApiResponse<HanoiStartResponse>> {
    return gatewayClient.post<HanoiStartResponse>(ROUTES.HANOI.START, { disks });
  },

  /**
   * Make a move in Tower of Hanoi
   */
  async move(sessionId: string, from: string, to: string): Promise<StructuredApiResponse<HanoiMoveResponse>> {
    return gatewayClient.post<HanoiMoveResponse>(ROUTES.HANOI.MOVE, { sessionId, from, to });
  },

  /**
   * Submit Tower of Hanoi results
   */
  async submit(params: HanoiSubmitParams): Promise<StructuredApiResponse<TestResult>> {
    return gatewayClient.post<TestResult>(ROUTES.HANOI.SUBMIT, params);
  },

  /**
   * Get user's Tower of Hanoi results
   */
  async getResults(): Promise<StructuredApiResponse<TestResult[]>> {
    return gatewayClient.get<TestResult[]>(ROUTES.HANOI.RESULTS);
  },

  /**
   * Get specific Tower of Hanoi result by session ID
   */
  async getResult(sessionId: string): Promise<StructuredApiResponse<TestResult>> {
    return gatewayClient.get<TestResult>(ROUTES.HANOI.RESULT(sessionId));
  },
};

export default hanoiTestService;
