import React, { createContext, useState, useEffect } from 'react';
import { apiFetch } from '../utils/apiFetch';

const DataContext = createContext();

export default function DataProvider({ children }) {
    // primo fetch progetti
    const [progetti, setProgetti] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await apiFetch('/api/progetti');
                const data = await res.json();
                setProgetti(data);
            } catch (err) {
                console.error('Errore nel fetch dei progetti:', err);
            }
        };
        fetchData();
    }, [])

    // secondo fetch certificazioni
    const [certificazioni, setCertificazioni] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await apiFetch('/api/certificazioni');
                const data = await res.json();
                setCertificazioni(data);
            } catch (err) {
                console.error('Errore nel fetch delle certificazioni:', err);
            }
        };
        fetchData();
    }, [])

    // terzo fetch esperienze
    const [esperienze, setEsperienze] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await apiFetch('/api/esperienze');
                const data = await res.json();
                setEsperienze(data);
            } catch (err) {
                console.error('Errore nel fetch delle esperienze:', err);
            }
        };
        fetchData();
    }, [])

    // funzioni CRUD per progetti
    const createProgetto = async (nuovoProgetto) => {
        try {
            const res = await apiFetch('/api/progetti', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(nuovoProgetto)
            });
            if (!res.ok) {
                const err = await res.json();
                alert('Errore: ' + (err.message || 'Creazione fallita'));
                return false;
            }
            const data = await res.json();
            setProgetti([...progetti, { ...nuovoProgetto, id: data.id }]);
            return true;
        } catch (error) {
            alert('Errore di rete: ' + error.message);
            return false;
        }
    };

    const updateProgetto = async (progettoModificato) => {
        try {
            const res = await apiFetch(`/api/progetti/${progettoModificato.id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(progettoModificato)
            });
            if (!res.ok) {
                const err = await res.json();
                alert('Errore: ' + (err.message || 'Aggiornamento fallito'));
                return false;
            }
            setProgetti(progetti.map(p => p.id === progettoModificato.id ? progettoModificato : p));
            return true;
        } catch (error) {
            alert('Errore di rete: ' + error.message);
            return false;
        }
    };

    const deleteProgetto = async (progettoEliminato) => {
        try {
            const res = await apiFetch(`/api/progetti/${progettoEliminato.id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            });
            if (!res.ok) {
                const err = await res.json();
                alert('Errore: ' + (err.message || 'Eliminazione fallita'));
                return false;
            }
            setProgetti(progetti.filter(p => p.id !== progettoEliminato.id));
            return true;
        } catch (error) {
            alert('Errore di rete: ' + error.message);
            return false;
        }
    };

    // funzioni CRUD per certificazioni
    const createCertificazione = async (nuovaCertificazione) => {
        try {
            const res = await apiFetch('/api/certificazioni', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(nuovaCertificazione)
            });
            if (!res.ok) {
                const err = await res.json();
                alert('Errore: ' + (err.message || 'Creazione fallita'));
                return false;
            }
            const data = await res.json();
            setCertificazioni([...certificazioni, { ...nuovaCertificazione, id: data.id }]);
            return true;
        } catch (error) {
            alert('Errore di rete: ' + error.message);
            return false;
        }
    };

    const updateCertificazione = async (certificazioneModificata) => {
        try {
            const res = await apiFetch(`/api/certificazioni/${certificazioneModificata.id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(certificazioneModificata)
            });
            if (!res.ok) {
                const err = await res.json();
                alert('Errore: ' + (err.message || 'Aggiornamento fallito'));
                return false;
            }
            setCertificazioni(certificazioni.map(p => p.id === certificazioneModificata.id ? certificazioneModificata : p));
            return true;
        } catch (error) {
            alert('Errore di rete: ' + error.message);
            return false;
        }
    };

    const deleteCertificazione = async (certificazioneEliminata) => {
        try {
            const res = await apiFetch(`/api/certificazioni/${certificazioneEliminata.id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            });
            if (!res.ok) {
                const err = await res.json();
                alert('Errore: ' + (err.message || 'Eliminazione fallita'));
                return false;
            }
            setCertificazioni(certificazioni.filter(p => p.id !== certificazioneEliminata.id));
            return true;
        } catch (error) {
            alert('Errore di rete: ' + error.message);
            return false;
        }
    };

    // funzioni CRUD per esperienze
    const createEsperienza = async (nuovaEsperienza) => {
        try {
            const res = await apiFetch('/api/esperienze', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(nuovaEsperienza)
            });
            if (!res.ok) {
                const err = await res.json();
                alert('Errore: ' + (err.message || 'Creazione fallita'));
                return false;
            }
            const data = await res.json();
            setEsperienze([...esperienze, { ...nuovaEsperienza, id: data.id }]);
            return true;
        } catch (error) {
            alert('Errore di rete: ' + error.message);
            return false;
        }
    };

    const updateEsperienza = async (esperienzaModificata) => {
        try {
            const res = await apiFetch(`/api/esperienze/${esperienzaModificata.id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(esperienzaModificata)
            });
            if (!res.ok) {
                const err = await res.json();
                alert('Errore: ' + (err.message || 'Aggiornamento fallito'));
                return false;
            }
            setEsperienze(esperienze.map(p => p.id === esperienzaModificata.id ? esperienzaModificata : p));
            return true;
        } catch (error) {
            alert('Errore di rete: ' + error.message);
            return false;
        }
    };

    const deleteEsperienza = async (esperienzaEliminata) => {
        try {
            const res = await apiFetch(`/api/esperienze/${esperienzaEliminata.id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            });
            if (!res.ok) {
                const err = await res.json();
                alert('Errore: ' + (err.message || 'Eliminazione fallita'));
                return false;
            }
            setEsperienze(esperienze.filter(p => p.id !== esperienzaEliminata.id));
            return true;
        } catch (error) {
            alert('Errore di rete: ' + error.message);
            return false;
        }
    };

    return (
        <DataContext.Provider value={{
            progetti, createProgetto, updateProgetto, deleteProgetto,
            certificazioni, createCertificazione, updateCertificazione, deleteCertificazione,
            esperienze, createEsperienza, updateEsperienza, deleteEsperienza
        }}>
            {children}
        </DataContext.Provider>
    );
}

export { DataContext };
