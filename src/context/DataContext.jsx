import React, { createContext, useState, useEffect } from 'react';
import { apiFetch } from '../utils/apiFetch';

const DataContext = createContext();

export default function DataProvider({ children }) {
  const [progetti, setProgetti] = useState([]);
  const [certificazioni, setCertificazioni] = useState([]);
  const [esperienze, setEsperienze] = useState([]);

  const fetchData = async (endpoint, setState) => {
    try {
      const res = await apiFetch(endpoint);
      if (!res) return; // null se refresh token fallito
      const data = await res.json();
      setState(data);
    } catch (err) {
      console.error(`Errore nel fetch di ${endpoint}:`, err);
    }
  };

  useEffect(() => { fetchData('/api/progetti', setProgetti); }, []);
  useEffect(() => { fetchData('/api/certificazioni', setCertificazioni); }, []);
  useEffect(() => { fetchData('/api/esperienze', setEsperienze); }, []);

  const crud = (state, setState, endpoint) => ({
    create: async (item) => {
      try {
        const res = await apiFetch(endpoint, {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(item)
        });
        if (!res?.ok) { const err = await res?.json(); alert(err?.message || 'Errore'); return false; }
        const data = await res.json();
        setState([...state, { ...item, id: data.id }]);
        return true;
      } catch (error) { alert(error.message); return false; }
    },
    update: async (item) => {
      try {
        const res = await apiFetch(`${endpoint}/${item.id}`, {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(item)
        });
        if (!res?.ok) { const err = await res?.json(); alert(err?.message || 'Errore'); return false; }
        setState(state.map(s => s.id === item.id ? item : s));
        return true;
      } catch (error) { alert(error.message); return false; }
    },
    delete: async (item) => {
      try {
        const res = await apiFetch(`${endpoint}/${item.id}`, {
          method: 'DELETE',
          headers: { 'content-type': 'application/json' }
        });
        if (!res?.ok) { const err = await res?.json(); alert(err?.message || 'Errore'); return false; }
        setState(state.filter(s => s.id !== item.id));
        return true;
      } catch (error) { alert(error.message); return false; }
    }
  });

  return (
    <DataContext.Provider value={{
      progetti, ...crud(progetti, setProgetti, '/api/progetti'),
      certificazioni, ...crud(certificazioni, setCertificazioni, '/api/certificazioni'),
      esperienze, ...crud(esperienze, setEsperienze, '/api/esperienze')
    }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext };
