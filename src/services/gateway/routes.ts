/**
 * Gateway Routes Configuration
 * Maps service names to their API endpoints per architecture spec
 */

export const ROUTES = {
  // Auth (User Service)
  AUTH: {
    REGISTER: '/api/auth/register',
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    PROFILE: '/api/auth/profile',
    REFRESH: '/api/auth/refresh',
  },

  // Test Catalog
  TESTS: {
    LIST: '/api/tests',
    DETAIL: (slug: string) => `/api/tests/${slug}`,
  },

  // N-Back Service
  NBACK: {
    START: '/api/nback/start',
    SUBMIT: '/api/nback/submit',
    RESULTS: '/api/nback/results',
    RESULT: (sessionId: string) => `/api/nback/results/${sessionId}`,
  },

  // Stroop Service
  STROOP: {
    START: '/api/stroop/start',
    SUBMIT: '/api/stroop/submit',
    RESULTS: '/api/stroop/results',
    RESULT: (sessionId: string) => `/api/stroop/results/${sessionId}`,
  },

  // Trail Making Service
  TRAILS: {
    START: '/api/trails/start',
    SUBMIT: '/api/trails/submit',
    RESULTS: '/api/trails/results',
    RESULT: (sessionId: string) => `/api/trails/results/${sessionId}`,
  },

  // Card Sort Service
  CARD_SORT: {
    START: '/api/card-sort/start',
    SUBMIT: '/api/card-sort/submit',
    RESULTS: '/api/card-sort/results',
    RESULT: (sessionId: string) => `/api/card-sort/results/${sessionId}`,
  },

  // Syllogisms Service
  SYLLOGISMS: {
    START: '/api/syllogisms/start',
    SUBMIT: '/api/syllogisms/submit',
    RESULTS: '/api/syllogisms/results',
    RESULT: (sessionId: string) => `/api/syllogisms/results/${sessionId}`,
  },

  // Hanoi Service
  HANOI: {
    START: '/api/hanoi/start',
    MOVE: '/api/hanoi/move',
    SUBMIT: '/api/hanoi/submit',
    RESULTS: '/api/hanoi/results',
    RESULT: (sessionId: string) => `/api/hanoi/results/${sessionId}`,
  },

  // London Service
  LONDON: {
    START: '/api/london/start',
    MOVE: '/api/london/move',
    SUBMIT: '/api/london/submit',
    RESULTS: '/api/london/results',
    RESULT: (sessionId: string) => `/api/london/results/${sessionId}`,
  },

  // Contact Service
  CONTACT: {
    SUBMIT: '/api/contact/submit',
  },

  // Admin Service
  ADMIN: {
    USERS: '/api/admin/users',
    USER: (id: string) => `/api/admin/users/${id}`,
    TESTS: '/api/admin/tests',
  },

  // Provider Service
  PROVIDER: {
    REGISTER: '/api/providers/register',
    PROFILE: '/api/providers/profile',
    VERIFY: (npi: string) => `/api/providers/verify/${npi}`,
  },

  // Payment Service
  PAYMENTS: {
    SUBSCRIBE: '/api/payments/subscribe',
    STATUS: '/api/payments/status',
    CANCEL: '/api/payments/cancel',
    WEBHOOK: '/api/payments/webhook',
  },
} as const;

export type RouteKeys = keyof typeof ROUTES;
