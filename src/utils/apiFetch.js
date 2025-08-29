// src/utils/apiFetch.js
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const apiFetch = async (url, options = {}) => {
  try {
    const res = await fetch(`${BASE_URL}${url}`, { ...options, credentials: 'include' });
    let data = null;
    try { data = await res.json(); } catch { data = null; }
    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    console.error('Errore di rete:', err);
    return { ok: false, status: 0, data: { msg: 'Errore di connessione' } };
  }
};
