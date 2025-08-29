// src/utils/apiFetch.js
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const apiFetch = async (url, options = {}, includeCredentials = true) => {
  const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };

  const res = await fetch(`${BASE_URL}${url}`, {
    ...options,
    headers,
    credentials: includeCredentials ? 'include' : 'omit',
  });

  let data;
  try { data = await res.json(); } catch { data = null; }

  return { ok: res.ok, status: res.status, data };
};
