/**
 * Card Sort Test Service
 * API client for Card Sort Test microservice
 */

import { gatewayClient, ROUTES } from '../../gateway';
import type { StructuredApiResponse, TestResult } from '../../gateway/types';

export interface Card {
  id: number;
  color: string;
  shape: string;
  count: number;
}

export interface CardSortSubmitParams {
  sessionId: string;
  results: {
    cardId: number;
    category: string;
    isCorrect: boolean;
    reactionMs: number;
  }[];
}

export interface CardSortStartResponse {
  sessionId: string;
  cards: Card[];
  currentRule: string;
}

export const cardSortTestService = {
  /**
   * Start a new Card Sort test session
   */
  async start(): Promise<StructuredApiResponse<CardSortStartResponse>> {
    return gatewayClient.post<CardSortStartResponse>(ROUTES.CARD_SORT.START);
  },

  /**
   * Submit Card Sort test results
   */
  async submit(params: CardSortSubmitParams): Promise<StructuredApiResponse<TestResult>> {
    return gatewayClient.post<TestResult>(ROUTES.CARD_SORT.SUBMIT, params);
  },

  /**
   * Get user's Card Sort test results
   */
  async getResults(): Promise<StructuredApiResponse<TestResult[]>> {
    return gatewayClient.get<TestResult[]>(ROUTES.CARD_SORT.RESULTS);
  },

  /**
   * Get specific Card Sort result by session ID
   */
  async getResult(sessionId: string): Promise<StructuredApiResponse<TestResult>> {
    return gatewayClient.get<TestResult>(ROUTES.CARD_SORT.RESULT(sessionId));
  },
};

export default cardSortTestService;
