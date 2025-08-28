const BASE_URL = import.meta.env.VITE_API_URL;

export const apiFetch = async (endpoint, options = {}) => {
  const url = `${BASE_URL}${endpoint}`;

  const res = await fetch(url, { ...options, credentials: 'include' });

  if (res.status === 401) { // accessToken scaduto
    const refresh = await fetch(`${BASE_URL}/api/auth/refresh`, {
      method: 'POST',
      credentials: 'include',
    });

    if (refresh.ok) {
      // riprova la chiamata originale
      return await fetch(url, { ...options, credentials: 'include' });
    } else {
      // redirect al login
      window.location.href = '/login';
      return null;
    }
  }

  return res;
};
