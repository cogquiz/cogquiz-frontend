/**
 * useApi Hook
 * React hook for making API calls with loading and error states
 */

'use client';

import { useState, useCallback } from 'react';
import type { StructuredApiResponse } from '@/services/gateway/types';

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseApiReturn<T> extends UseApiState<T> {
  execute: () => Promise<StructuredApiResponse<T> | null>;
  reset: () => void;
}

export function useApi<T>(
  apiCall: () => Promise<StructuredApiResponse<T>>
): UseApiReturn<T> {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(async () => {
    setState({ data: null, loading: true, error: null });
    
    try {
      const response = await apiCall();
      
      if (response.success) {
        setState({ data: response.data, loading: false, error: null });
      } else {
        setState({ 
          data: null, 
          loading: false, 
          error: response.error?.message || 'An error occurred' 
        });
      }
      
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Network error';
      setState({ data: null, loading: false, error: errorMessage });
      return null;
    }
  }, [apiCall]);

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null });
  }, []);

  return { ...state, execute, reset };
}

/**
 * Hook for saving test results
 */
export function useSaveTestResult<T>() {
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [savedData, setSavedData] = useState<T | null>(null);

  const save = useCallback(async (
    saveFunction: () => Promise<StructuredApiResponse<T>>
  ) => {
    setSaving(true);
    setSaveError(null);

    try {
      const response = await saveFunction();
      
      if (response.success) {
        setSavedData(response.data);
        setSaving(false);
        return { success: true, data: response.data };
      } else {
        const errorMsg = response.error?.message || 'Failed to save';
        setSaveError(errorMsg);
        setSaving(false);
        return { success: false, error: errorMsg };
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Network error';
      setSaveError(errorMsg);
      setSaving(false);
      return { success: false, error: errorMsg };
    }
  }, []);

  const reset = useCallback(() => {
    setSaving(false);
    setSaveError(null);
    setSavedData(null);
  }, []);

  return { save, saving, saveError, savedData, reset };
}
