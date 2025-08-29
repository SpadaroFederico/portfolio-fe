// utils/apiFetch.js (FE)
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

/**
 * apiFetch lato frontend per backend con token JWT in cookie HttpOnly.
 * - url: endpoint relativo al BASE_URL
 * - options: { method, headers, body, etc. }
 * - includeCredentials: true per inviare cookie (default true)
 */
export const apiFetch = async (url, options = {}, includeCredentials = true) => {
  try {
    const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };

    // Fetch con cookie HttpOnly (JWT lato server)
    const res = await fetch(`${BASE_URL}${url}`, {
      ...options,
      headers,
      credentials: includeCredentials ? 'include' : 'omit',
    });

    // Parse JSON, se possibile
    let data;
    try { data = await res.json(); } catch { data = null; }

    // Non tentare refresh automatico lato FE: 401 → componente decide cosa fare
    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    console.error('Errore in apiFetch FE:', err);
    return { ok: false, status: 0, data: { msg: 'Errore di connessione al server' } };
  }
};
