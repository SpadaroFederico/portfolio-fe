import React from 'react';

export default function ProgettiList({ progetti = [], onEdit, onDelete }) {
  return (
    <div className="lists-section">
      <h2>Lista Progetti</h2>
      <ul>
        {progetti.map((p) => (
          <li key={p.id}>
            <h3>{p.titolo}</h3>
            <p>{p.descrizione}</p>
            <p>Tecnologie: {p.tecnologie}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer">Link al progetto</a>
            <br />
            <button onClick={() => onEdit(p)}>Modifica</button>
            <button onClick={() => onDelete(p)}>Elimina</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
