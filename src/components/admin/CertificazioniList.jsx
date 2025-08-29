import { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import '../../styles/CertificazioniList.css';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

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

      {isAdmin ? (
        <ul>
          {certificazioni.map(cert => {
            const isExpanded = expandedId === cert.id;
            return (
              <li key={cert.id}>
                <h3>{cert.titolo}</h3>
                <p><span>Ente:</span> {cert.ente}</p>
                <p><span>Data:</span> {new Date(cert.data_conseguimento).toLocaleDateString('it-IT', { year: 'numeric', month: 'long' })}</p>
                {cert.img && <img src={cert.img} alt={`Certificato ${cert.titolo}`} />}
                <div className={`descrizione ${isExpanded ? 'expanded' : ''}`}>{cert.descrizione}</div>
                <div className="admin-actions">
                  <button onClick={() => onEdit(cert)}>Modifica</button>
                  <button onClick={() => onDelete(cert)}>Elimina</button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <Swiper
          className="certificazioni-carousel"
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            450: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {certificazioni.map(cert => {
            const isExpanded = expandedId === cert.id;
            const CardWrapper = cert.img ? 'a' : 'div';
            const wrapperProps = cert.img ? { href: cert.img, target: "_blank", rel: "noopener noreferrer" } : {};
            return (
              <SwiperSlide key={cert.id} className="cert-card-link">
                <div className="cert-card">
                  <CardWrapper {...wrapperProps} className="img-wrapper">
                    {cert.img && <img src={cert.img} alt={`Certificato ${cert.titolo}`} />}
                  </CardWrapper>
                  <h3>{cert.titolo}</h3>
                  <p><span>Ente:</span> {cert.ente}</p>
                  <p><span>Data:</span> {new Date(cert.data_conseguimento).toLocaleDateString('it-IT', { year: 'numeric', month: 'long' })}</p>
                  <div className={`descrizione ${isExpanded ? 'expanded' : ''}`}>{cert.descrizione}</div>
                  {cert.descrizione?.length > 150 && (
                    <button onClick={() => setExpandedId(isExpanded ? null : cert.id)}>
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
