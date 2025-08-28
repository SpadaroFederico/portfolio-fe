// utils/apiFetch.js
export const apiFetch = async (url, options = {}) => {
  const res = await fetch(`${BASE_URL}${url}`, { ...options, credentials: 'include' });

  if (res.status === 401) {
    const refresh = await fetch(`${BASE_URL}/auth/refresh`, {
      method: 'POST',
      credentials: 'include',
    });

    if (refresh.ok) {
      return await fetch(`${BASE_URL}${url}`, { ...options, credentials: 'include' });
    } else {
      return { status: 401 }; // non redirect
    }
  }

  return res;
};
