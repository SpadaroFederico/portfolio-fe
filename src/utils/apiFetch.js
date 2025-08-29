// src/utils/apiFetch.js
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

/**
 * Fetch sicuro lato FE con cookie HttpOnly
 * @param {string} url - endpoint relativo
 * @param {object} options - fetch options
 * @param {boolean} includeCredentials - invio cookie (default true)
 */
export const apiFetch = async (url, options = {}, includeCredentials = true) => {
  try {
    const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };

    const res = await fetch(`${BASE_URL}${url}`, {
      ...options,
      headers,
      credentials: includeCredentials ? 'include' : 'omit',
    });

    let data;
    try { data = await res.json(); } catch { data = null; }

    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    console.error('Errore in apiFetch FE:', err);
    return { ok: false, status: 0, data: { msg: 'Errore di connessione al server' } };
  }
};
