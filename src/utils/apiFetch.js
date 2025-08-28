// utils/apiFetch.js
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const apiFetch = async (url, options = {}) => {
  const res = await fetch(`${BASE_URL}${url}`, { ...options, credentials: 'include' });

  if (res.status === 401) {
    // In produzione non tentare refresh, lascia che ProtectedRoute gestisca il redirect
    return { status: 401 };
  }

  return res;
};
