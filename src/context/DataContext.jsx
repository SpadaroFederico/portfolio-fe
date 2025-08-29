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
      if (res.ok) {
        setState(res.data); // ✅ usa res.data direttamente
      } else if (res.status === 401) {
        console.log(`Non autorizzato per ${endpoint}`);
        setState([]);
      } else {
        console.error(`Errore nel fetch di ${endpoint}:`, res.data?.msg);
      }
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
          body: JSON.stringify(item),
        });
        if (!res.ok) {
          alert(res.data?.msg || 'Errore');
          return false;
        }
        setState([...state, { ...item, id: res.data.id }]);
        return true;
      } catch (error) {
        alert(error.message);
        return false;
      }
    },
    update: async (item) => {
      try {
        const res = await apiFetch(`${endpoint}/${item.id}`, {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(item),
        });
        if (!res.ok) {
          alert(res.data?.msg || 'Errore');
          return false;
        }
        setState(state.map(s => s.id === item.id ? item : s));
        return true;
      } catch (error) {
        alert(error.message);
        return false;
      }
    },
    remove: async (item) => {
      try {
        const res = await apiFetch(`${endpoint}/${item.id}`, {
          method: 'DELETE',
          headers: { 'content-type': 'application/json' },
        });
        if (!res.ok) {
          alert(res.data?.msg || 'Errore');
          return false;
        }
        setState(state.filter(s => s.id !== item.id));
        return true;
      } catch (error) {
        alert(error.message);
        return false;
      }
    },
  });

  const progettiCrud = crud(progetti, setProgetti, '/api/progetti');
  const certificazioniCrud = crud(certificazioni, setCertificazioni, '/api/certificazioni');
  const esperienzeCrud = crud(esperienze, setEsperienze, '/api/esperienze');

  return (
    <DataContext.Provider value={{
      progetti,
      createProgetto: progettiCrud.create,
      updateProgetto: progettiCrud.update,
      deleteProgetto: progettiCrud.remove,

      certificazioni,
      createCertificazione: certificazioniCrud.create,
      updateCertificazione: certificazioniCrud.update,
      deleteCertificazione: certificazioniCrud.remove,

      esperienze,
      createEsperienza: esperienzeCrud.create,
      updateEsperienza: esperienzeCrud.update,
      deleteEsperienza: esperienzeCrud.remove,
    }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext };
