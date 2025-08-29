import { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import '../../styles/EsperienzeList.css';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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

      {isAdmin ? (
        <ul className="admin-esperienze-list">
          {esperienze.map(exp => {
            const isExpanded = expandedId === exp.id;
            return (
              <li key={exp.id}>
                <h3>{exp.titolo}</h3>
                <p><span>Azienda:</span> {exp.azienda}</p>
                <p>
                  <span>Periodo:</span>{' '}
                  {exp.inizio ? new Date(exp.inizio).toLocaleDateString('it-IT', { month: 'long', year: 'numeric' }) : 'N/A'}
                  {exp.fine ? ` - ${new Date(exp.fine).toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}` : ' - Presente'}
                </p>
                {exp.img && <img src={exp.img} alt={`Esperienza presso ${exp.azienda}`} />}
                <div className={`descrizione ${isExpanded ? 'expanded' : ''}`}>{exp.descrizione}</div>
                <div className="admin-actions">
                  <button onClick={() => onEdit(exp)}>Modifica</button>
                  <button onClick={() => onDelete(exp)}>Elimina</button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <Swiper
          className="esperienze-carousel"
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            450: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {esperienze.map(exp => {
            const isExpanded = expandedId === exp.id;
            return (
              <SwiperSlide key={exp.id} className="esperienza-card-link">
                <div className="esperienza-card">
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
                  {exp.descrizione?.length > 150 && (
                    <button onClick={() => setExpandedId(isExpanded ? null : exp.id)}>
                      {isExpanded ? 'Mostra meno' : 'Leggi di più'}
                    </button>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}
