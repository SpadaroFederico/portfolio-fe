import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

export default function DataProvider({ children }) {
    // primo fetch progetti
    const [progetti, setProgetti] = useState([]);
 
    useEffect(() => {
        const fetchData = async () => {
            fetch('http://localhost:3000/api/progetti')
                .then(res => res.json())
                .then(data => setProgetti(data))
                .catch(err => console.error('Errore nel fetch dei progetti:', err));
        }
        fetchData();
    }, [])

    // secondo fetch certificazioni
    const [certificazioni, setCertificazioni] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            fetch('http://localhost:3000/api/certificazioni')
                .then(res => res.json())    
                .then(data => setCertificazioni(data))
                .catch(err => console.error('Errore nel fetch delle certificazioni:', err));
        }
        fetchData();
    }, [])

    // terzo fetch esperienze
    const [esperienze, setEsperienze] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            fetch('http://localhost:3000/api/esperienze')
                .then(res => res.json())
                .then(data => setEsperienze(data))
                .catch(err => console.error('Errore nel fetch delle esperienze:', err));
        }
        fetchData();    
    }, [])

    // funzioni CRUD per progetti
    // create, update, delete
    const createProgetto = async (nuovoProgetto) => {
        const token = localStorage.getItem('token');
        try {
            const res = await fetch('http://localhost:3000/api/progetti', {
            method: 'POST',
            headers: { 
                'content-type': 'application/json', 
                'Authorization': `Bearer ${token}`
            },
            
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
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`http://localhost:3000/api/progetti/${progettoModificato.id}`, {
            method: 'PUT',
            headers: { 
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },    
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
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`http://localhost:3000/api/progetti/${progettoEliminato.id}`, {
            method: 'DELETE',
            headers: { 
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            
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
        const token = localStorage.getItem('token');
        console.log('Nuova certificazione da inviare:', nuovaCertificazione);

        try {
            const res = await fetch('http://localhost:3000/api/certificazioni', {
            method: 'POST',
            headers: { 
                'content-type': 'application/json', 
                'Authorization': `Bearer ${token}`
            },
            
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
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`http://localhost:3000/api/certificazioni/${certificazioneModificata.id}`, {
            method: 'PUT',
            headers: { 
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },    
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
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`http://localhost:3000/api/certificazioni/${certificazioneEliminata.id}`, {
            method: 'DELETE',
            headers: { 
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            
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
        const token = localStorage.getItem('token');
        try {
            const res = await fetch('http://localhost:3000/api/esperienze', {
            method: 'POST',
            headers: { 
                'content-type': 'application/json', 
                'Authorization': `Bearer ${token}`
            },
            
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
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`http://localhost:3000/api/esperienze/${esperienzaModificata.id}`, {
            method: 'PUT',
            headers: { 
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            },    
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
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`http://localhost:3000/api/esperienze/${esperienzaEliminata.id}`, {
            method: 'DELETE',
            headers: { 
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
            
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

    return(
        <DataContext.Provider value={{
            
            progetti, createProgetto, updateProgetto, deleteProgetto,
            certificazioni, createCertificazione, updateCertificazione, deleteCertificazione,
            esperienze, createEsperienza, updateEsperienza, deleteEsperienza

        }}>
            
            {children}
        </DataContext.Provider>
    )
}

export { DataContext };
