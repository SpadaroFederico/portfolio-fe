import React from 'react';

export default function CertificazioniList({ certificazioni = [], onEdit, onDelete }) {
  return (
    <div className="lists-section">
      <h2>Lista Certificazioni</h2>
      <ul>
        {certificazioni.map(c => (
          <li key={c.id}>
            <h3>{c.titolo}</h3>
            <p>{c.ente} - {c.data_conseguimento}</p>
            <p>{c.descrizione}</p>
            <a href={c.link_certificato} target="_blank" rel="noopener noreferrer">Link certificato</a>
            <br />
            <button onClick={() => onEdit(c)}>Modifica</button>
            <button onClick={() => onDelete(c)}>Elimina</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
