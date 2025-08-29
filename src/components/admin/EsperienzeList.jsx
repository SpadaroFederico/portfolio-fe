import { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import '../../styles/EsperienzeList.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function EsperienzeList({ esperienze }) {
  if (!esperienze || esperienze.length === 0) {
    return (
      <div className="esperienze-page">
        <h2>Esperienze</h2>
        <p>Nessuna esperienza disponibile al momento.</p>
      </div>
    );
  }

  return (
    <div className="esperienze-page">
      <h2>Esperienze</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {esperienze.map(exp => (
          <SwiperSlide key={exp.id}>
            <div className="carousel-card">
              <div className="card-img">
                {exp.img && <img src={exp.img} alt={`Esperienza presso ${exp.azienda}`} />}
              </div>
              <div className="card-content">
                <h3>{exp.titolo}</h3>
                <p><span>Azienda:</span> {exp.azienda}</p>
                <p>
                  <span>Periodo:</span>{" "}
                  {exp.inizio ? new Date(exp.inizio).toLocaleDateString('it-IT', { month: 'short', year: 'numeric' }) : 'N/A'}
                  {exp.fine ? ` - ${new Date(exp.fine).toLocaleDateString('it-IT', { month: 'short', year: 'numeric' })}` : ' - Presente'}
                </p>
                <p className="descrizione">
                  {exp.descrizione?.length > 120
                    ? exp.descrizione.slice(0, 120) + "..."
                    : exp.descrizione}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
