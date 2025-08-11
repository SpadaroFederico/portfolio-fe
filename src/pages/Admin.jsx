import React, { useState, useContext } from 'react';
import { DataContext } from '../context/DataContext.jsx';
import '../styles/Admin.css';
import ProgettiList from '../components/admin/ProgettiList';
import CertificazioniList from '../components/admin/CertificazioniList';
import EsperienzeList from '../components/admin/EsperienzeList';


function Admin() {
  // Context: CRUD functions and data arrays
  const {
    createProgetto, updateProgetto, deleteProgetto, progetti,
    createCertificazione, updateCertificazione, deleteCertificazione, certificazioni,
    createEsperienza, updateEsperienza, deleteEsperienza, esperienze
  } = useContext(DataContext);

  // --- Stati form ---
  const [formCreateProgetto, setFormCreateProgetto] = useState({
    titolo: '', descrizione: '', tecnologie: '', link: ''
  });
  const [formCreateCertificazione, setFormCreateCertificazione] = useState({
    titolo: '', ente: '', data_conseguimento: '', descrizione: '', link_certificato: ''
  });
  const [formCreateEsperienza, setFormCreateEsperienza] = useState({
    titolo: '', azienda: '', inizio: '', fine: '', descrizione: ''
  });

  // --- Stati ID per editing ---
  const [editingProgettoId, setEditingProgettoId] = useState(null);
  const [editingCertificazioneId, setEditingCertificazioneId] = useState(null);
  const [editingEsperienzaId, setEditingEsperienzaId] = useState(null);

  // --- Gestione Progetti ---
  const handleSubmitProgetto = async (e) => {
    e.preventDefault();
    const action = editingProgettoId ? updateProgetto : createProgetto;
    const payload = editingProgettoId
      ? { ...formCreateProgetto, id: editingProgettoId }
      : formCreateProgetto;

    const success = await action(payload);
    if (success) {
      alert(editingProgettoId ? 'Progetto aggiornato con successo' : 'Progetto creato con successo');
      setFormCreateProgetto({ titolo: '', descrizione: '', tecnologie: '', link: '' });
      setEditingProgettoId(null);
    }
  };

  const handleEditProgetto = (p) => {
    setFormCreateProgetto({
      titolo: p.titolo || '',
      descrizione: p.descrizione || '',
      tecnologie: p.tecnologie || '',
      link: p.link || ''
    });
    setEditingProgettoId(p.id);
  };

  const handleDeleteProgetto = async (p) => {
    if (await deleteProgetto(p)) alert('Progetto eliminato con successo');
  };

  // --- Gestione Certificazioni ---
  const handleSubmitCertificazione = async (e) => {
    e.preventDefault();
    const action = editingCertificazioneId ? updateCertificazione : createCertificazione;
    const payload = editingCertificazioneId
      ? { ...formCreateCertificazione, id: editingCertificazioneId }
      : formCreateCertificazione;

    const success = await action(payload);
    if (success) {
      alert(editingCertificazioneId ? 'Certificazione aggiornata con successo' : 'Certificazione creata con successo');
      setFormCreateCertificazione({ titolo: '', ente: '', data_conseguimento: '', descrizione: '', link_certificato: '' });
      setEditingCertificazioneId(null);
    }
  };

  const handleEditCertificazione = (c) => {
    setFormCreateCertificazione({
      titolo: c.titolo || '',
      ente: c.ente || '',
      data_conseguimento: c.data_conseguimento || '',
      descrizione: c.descrizione || '',
      link_certificato: c.link_certificato || ''
    });
    setEditingCertificazioneId(c.id);
  };

  const handleDeleteCertificazione = async (c) => {
    if (await deleteCertificazione(c)) alert('Certificazione eliminata con successo');
  };

  // --- Gestione Esperienze ---
  const handleSubmitEsperienza = async (e) => {
    e.preventDefault();
    const action = editingEsperienzaId ? updateEsperienza : createEsperienza;
    const payload = editingEsperienzaId
      ? { ...formCreateEsperienza, id: editingEsperienzaId }
      : formCreateEsperienza;

    const success = await action(payload);
    if (success) {
      alert(editingEsperienzaId ? 'Esperienza aggiornata con successo' : 'Esperienza creata con successo');
      setFormCreateEsperienza({ titolo: '', azienda: '', inizio: '', fine: '', descrizione: '' });
      setEditingEsperienzaId(null);
    }
  };

  const handleEditEsperienza = (eItem) => {
    setFormCreateEsperienza({
      titolo: eItem.titolo || '',
      azienda: eItem.azienda || '',
      inizio: eItem.inizio || '',
      fine: eItem.fine || '',
      descrizione: eItem.descrizione || ''
    });
    setEditingEsperienzaId(eItem.id);
  };

  const handleDeleteEsperienza = async (eItem) => {
    if (await deleteEsperienza(eItem)) alert('Esperienza eliminata con successo');
  };

  return (
  <div className="admin-container">
    {/* --- FORM IN ALTO --- */}
    <div className="forms-row">
      {/* --- PROGETTI --- */}
      <form className="admin-form" onSubmit={handleSubmitProgetto}>
        <h1>{editingProgettoId ? 'Modifica Progetto' : 'Crea Progetto'}</h1>
        <input
          type="text"
          placeholder="Titolo"
          value={formCreateProgetto.titolo}
          onChange={(e) => setFormCreateProgetto({ ...formCreateProgetto, titolo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descrizione"
          value={formCreateProgetto.descrizione}
          onChange={(e) => setFormCreateProgetto({ ...formCreateProgetto, descrizione: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tecnologie"
          value={formCreateProgetto.tecnologie}
          onChange={(e) => setFormCreateProgetto({ ...formCreateProgetto, tecnologie: e.target.value })}
        />
        <input
          type="text"
          placeholder="Link"
          value={formCreateProgetto.link}
          onChange={(e) => setFormCreateProgetto({ ...formCreateProgetto, link: e.target.value })}
        />
        <button type="submit">{editingProgettoId ? 'Salva Modifiche' : 'Crea Progetto'}</button>
        {editingProgettoId && (
          <button
            type="button"
            onClick={() => {
              setEditingProgettoId(null);
              setFormCreateProgetto({ titolo: '', descrizione: '', tecnologie: '', link: '' });
            }}
          >
            Annulla
          </button>
        )}
      </form>

      {/* --- CERTIFICAZIONI --- */}
      <form className="admin-form" onSubmit={handleSubmitCertificazione}>
        <h1>{editingCertificazioneId ? 'Modifica Certificazione' : 'Crea Certificazione'}</h1>
        <input
          type="text"
          placeholder="Titolo"
          value={formCreateCertificazione.titolo}
          onChange={(e) => setFormCreateCertificazione({ ...formCreateCertificazione, titolo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ente"
          value={formCreateCertificazione.ente}
          onChange={(e) => setFormCreateCertificazione({ ...formCreateCertificazione, ente: e.target.value })}
        />
        <input
          type="date"
          value={formCreateCertificazione.data_conseguimento}
          onChange={(e) => setFormCreateCertificazione({ ...formCreateCertificazione, data_conseguimento: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descrizione"
          value={formCreateCertificazione.descrizione}
          onChange={(e) => setFormCreateCertificazione({ ...formCreateCertificazione, descrizione: e.target.value })}
        />
        <input
          type="text"
          placeholder="Link certificato"
          value={formCreateCertificazione.link_certificato}
          onChange={(e) => setFormCreateCertificazione({ ...formCreateCertificazione, link_certificato: e.target.value })}
        />
        <button type="submit">{editingCertificazioneId ? 'Salva Modifiche' : 'Crea Certificazione'}</button>
        {editingCertificazioneId && (
          <button
            type="button"
            onClick={() => {
              setEditingCertificazioneId(null);
              setFormCreateCertificazione({ titolo: '', ente: '', data_conseguimento: '', descrizione: '', link_certificato: '' });
            }}
          >
            Annulla
          </button>
        )}
      </form>

      {/* --- ESPERIENZE --- */}
      <form className="admin-form" onSubmit={handleSubmitEsperienza}>
        <h1>{editingEsperienzaId ? 'Modifica Esperienza' : 'Crea Esperienza'}</h1>
        <input
          type="text"
          placeholder="Titolo"
          value={formCreateEsperienza.titolo}
          onChange={(e) => setFormCreateEsperienza({ ...formCreateEsperienza, titolo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Azienda"
          value={formCreateEsperienza.azienda}
          onChange={(e) => setFormCreateEsperienza({ ...formCreateEsperienza, azienda: e.target.value })}
        />
        <input
          type="date"
          value={formCreateEsperienza.inizio}
          onChange={(e) => setFormCreateEsperienza({ ...formCreateEsperienza, inizio: e.target.value })}
        />
        <input
          type="date"
          value={formCreateEsperienza.fine}
          onChange={(e) => setFormCreateEsperienza({ ...formCreateEsperienza, fine: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descrizione"
          value={formCreateEsperienza.descrizione}
          onChange={(e) => setFormCreateEsperienza({ ...formCreateEsperienza, descrizione: e.target.value })}
        />
        <button type="submit">{editingEsperienzaId ? 'Salva Modifiche' : 'Crea Esperienza'}</button>
        {editingEsperienzaId && (
          <button
            type="button"
            onClick={() => {
              setEditingEsperienzaId(null);
              setFormCreateEsperienza({ titolo: '', azienda: '', inizio: '', fine: '', descrizione: '' });
            }}
          >
            Annulla
          </button>
        )}
      </form>
    </div>

    {/* --- LISTE SOTTO --- */}
    <ProgettiList
  progetti={progetti}
  onEdit={handleEditProgetto}
  onDelete={handleDeleteProgetto}
/>

    <CertificazioniList
  certificazioni={certificazioni}
  onEdit={handleEditCertificazione}
  onDelete={handleDeleteCertificazione}
/>

    <EsperienzeList
  esperienze={esperienze}
  onEdit={handleEditEsperienza}
  onDelete={handleDeleteEsperienza}
/>
  </div>
);

}

export default Admin;
