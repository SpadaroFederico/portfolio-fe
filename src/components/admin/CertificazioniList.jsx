import { useContext, useState } from 'react';
import { DataContext } from '../../context/DataContext';  
import '../../styles/CertificazioniList.css';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function CertificazioniList({ certificazioni }) {
  if (!certificazioni || certificazioni.length === 0) {
    return (
      <div className="certificazioni-page">
        <h2>Certificazioni</h2>
        <p>Nessuna certificazione disponibile al momento.</p>
      </div>
    );
  }

  return (
    <div className="certificazioni-page">
      <h2>Certificazioni</h2>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
      >
        {certificazioni.map(cert => (
          <SwiperSlide key={cert.id}>
            <div className="carousel-card">
              <div className="card-img">
                {cert.img && <img src={cert.img} alt={cert.titolo} />}
              </div>
              <div className="card-content">
                <h3>{cert.titolo}</h3>
                <p><span>Ente:</span> {cert.ente}</p>
                <p><span>Data:</span> {new Date(cert.data_conseguimento).toLocaleDateString('it-IT', { month: 'short', year: 'numeric' })}</p>
                <p className="descrizione">
                  {cert.descrizione?.length > 120
                    ? cert.descrizione.slice(0, 120) + "..."
                    : cert.descrizione}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

