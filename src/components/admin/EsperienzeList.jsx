import React from 'react';

export default function EsperienzeList({ esperienze = [], onEdit, onDelete }) {
  return (
    <div className="lists-section">
      <h2>Lista Esperienze</h2>
      <ul>
        {esperienze.map(e => (
          <li key={e.id}>
            <h3>{e.titolo}</h3>
            <p>{e.azienda} ({e.data_inizio} - {e.data_fine})</p>
            <p>{e.descrizione}</p>
            <button onClick={() => onEdit(e)}>Modifica</button>
            <button onClick={() => onDelete(e)}>Elimina</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
