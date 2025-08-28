import { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';  
import '../../styles/CertificazioniList.css';

export default function CertificazioniList({ isAdmin = false, onEdit, onDelete }) {
  const { certificazioni } = useContext(DataContext);
  const [expandedId, setExpandedId] = useState(null);

  if (!certificazioni || certificazioni.length === 0) {
    return (
      <div className={isAdmin ? 'admin-certificazioni' : 'certificazioni-page'}>
        <h2>Certificazioni</h2>
        <p>Nessuna certificazione disponibile al momento.</p>
      </div>
    );
  }

  return (
    <div className={isAdmin ? 'admin-certificazioni' : 'certificazioni-page'}>
      <h2>Certificazioni</h2>
      <ul className={isAdmin ? '' : 'certificazioni-list'}>
        {certificazioni.map(cert => {
          const isExpanded = expandedId === cert.id;

          // Wrapper per rendere cliccabile tutta la card solo in modalità pubblica
          const CardWrapper = !isAdmin && cert.img ? 'a' : 'div';
          const wrapperProps = !isAdmin && cert.img ? { href: cert.img, target: "_blank", rel: "noopener noreferrer" } : {};

          return (
            <li key={cert.id} className={isAdmin ? '' : 'cert-card'}>
              <CardWrapper {...wrapperProps} className={!isAdmin ? 'cert-card-link' : ''}>
                <div className="img-wrapper">
                  {cert.img && <img src={cert.img} alt={`Certificato ${cert.titolo}`} />}
                </div>
                </CardWrapper>
                <h3>{cert.titolo}</h3>
                <p><span>Ente:</span> {cert.ente}</p>
                <p><span>Data:</span> {new Date(cert.data_conseguimento).toLocaleDateString('it-IT', { year: 'numeric', month: 'long' })}</p>
                <div className={`descrizione ${isExpanded ? 'expanded' : ''}`}>
                  {cert.descrizione}
                </div>

                {!isAdmin && cert.descrizione?.length > 150 && (
                  <button onClick={() => setExpandedId(isExpanded ? null : cert.id)}>
                    {isExpanded ? 'Mostra meno' : 'Leggi di più'}
                  </button>
                )}

                {isAdmin && (
                  <div className="admin-actions">
                    <button onClick={() => onEdit(cert)}>Modifica</button>
                    <button onClick={() => onDelete(cert)}>Elimina</button>
                  </div>
                )}
              
            </li>
          );
        })}
      </ul>
    </div>
  );
}
