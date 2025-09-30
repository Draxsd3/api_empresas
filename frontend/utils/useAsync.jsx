import React from "react";

export function useAsync(asyncFn, deps = []) {
  const [state, set] = React.useState({ loading: false, error: null, data: null });
  const run = React.useCallback(async (...args) => {
    set(s => ({ ...s, loading: true, error: null }));
    try {
      const data = await asyncFn(...args);
      set({ loading: false, error: null, data });
      return data;
    } catch (e) {
      set({ loading: false, error: e.message || String(e), data: null });
      throw e;
    }
  }, deps);
  return [state, run, set];
}