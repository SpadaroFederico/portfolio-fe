import { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import '../../styles/EsperienzeList.css';

export default function EsperienzeList({ isAdmin = false, onEdit, onDelete }) {
  const { esperienze } = useContext(DataContext);
  const [expandedId, setExpandedId] = useState(null);

  if (!esperienze || esperienze.length === 0) {
    return (
      <div className={isAdmin ? 'admin-esperienze' : 'esperienze-page'}>
        <h2>Esperienze</h2>
        <p>Nessuna esperienza disponibile al momento.</p>
      </div>
    );
  }

  return (
    <div className={isAdmin ? 'admin-esperienze' : 'esperienze-page'}>
      <h2>Esperienze</h2>
      <ul className={isAdmin ? 'admin-esperienze-list' : 'esperienze-list'}>
        {esperienze.map(exp => {
          const isExpanded = expandedId === exp.id;

          return (
            <li key={exp.id} className={isAdmin ? '' : 'esperienza-card'}>
              <h3>{exp.titolo}</h3>
              <p><span>Azienda:</span> {exp.azienda}</p>
              <p>
                <span>Periodo:</span>{' '}
                {exp.inizio ? new Date(exp.inizio).toLocaleDateString('it-IT', { month: 'long', year: 'numeric' }) : 'N/A'}
                {exp.fine ? ` - ${new Date(exp.fine).toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}` : ' - Presente'}
              </p>

              {exp.img && (
                <a href={exp.img} target="_blank" rel="noopener noreferrer">
                  <img src={exp.img} alt={`Esperienza presso ${exp.azienda}`} className="img-wrapper" />
                </a>
              )}

              <div className={`descrizione ${isExpanded ? 'expanded' : ''}`}>
                {exp.descrizione}
              </div>

              {!isAdmin && exp.descrizione?.length > 150 && (
                <button onClick={() => setExpandedId(isExpanded ? null : exp.id)}>
                  {isExpanded ? 'Mostra meno' : 'Leggi di più'}
                </button>
              )}

              {isAdmin && (
                <div className="admin-actions">
                  <button onClick={() => onEdit(exp)}>Modifica</button>
                  <button onClick={() => onDelete(exp)}>Elimina</button>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
