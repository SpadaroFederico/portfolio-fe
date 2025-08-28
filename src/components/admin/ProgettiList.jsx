import React, { useState } from 'react';
import '../../styles/ProgettiList.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function ProgettiList({
  progetti = [],
  immaginiProgetti = {},
  isAdmin = false, // <-- reintrodotto come prop opzionale
  onEdit,
  onDelete
}) {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (isAdmin) {
  return (
    <div className="admin-progetti">
    <h2>Lista Progetti</h2>
    <div className="carousel-container">
      {progetti.map((p) => (
        <div className="carousel-item" key={p.id}>
          <h3>{p.titolo}</h3>
          <img src={p.img} alt={p.titolo} />
          <p>{p.descrizione}</p>
          <p><strong>Tecnologie:</strong> {p.tecnologie}</p>
          <div>
            {p.link_repo.split(";").map((link, i) => (
              <a
                key={i}
                href={link.trim()}
                target="_blank"
                rel="noopener noreferrer"
              >
                {i === 0 ? "Frontend Repo" : "Backend Repo"}
              </a>
            ))}
          </div>
          <div className="carousel-actions">
            <button onClick={() => onEdit(p)}>Modifica</button>
            <button onClick={() => onDelete(p)}>Elimina</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}


  // Modalità pubblica → timeline
  return (
    <div className="public-progetti" style={{ position: 'relative' }}>
      <VerticalTimeline>
        {progetti.map((p, index) => {
          const expanded = expandedItems[p.id] || false;
          const extraImg = immaginiProgetti[p.titolo.toLowerCase()];

          return (
            <VerticalTimelineElement
              key={p.id}
              className="timeline-element"
              contentStyle={{ background: 'rgba(20,0,40,0.9)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgba(20,0,40,0.9)' }}
              date={p.anno}
              iconStyle={{
                background: 'linear-gradient(90deg, #c800ff, #00c8ff)',
                border: '2px solid rgba(255,255,255,0.4)',
              }}
            >
              <div className="project-main">
                <h3>{p.titolo}</h3>
                <img src={p.img} alt={p.titolo} className="project-gif" />

                <p className={`project-description ${expanded ? 'expanded' : ''}`}>
                  {p.descrizione}
                </p>
                {p.descrizione.length > 120 && (
                  <button
                    className="read-more-btn"
                    onClick={() => toggleExpanded(p.id)}
                  >
                    {expanded ? 'Mostra meno' : 'Leggi tutto'}
                  </button>
                )}

                <p>Tecnologie: {p.tecnologie}</p>
                <div className="project-links">
                  {p.link_repo.split(";").map((link, i) => (
                    <a
                      key={i}
                      href={link.trim()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {i === 0 ? "Frontend Repo" : "Backend Repo"}
                    </a>
                  ))}
                </div>
              </div>

              {extraImg && (
                <img
                  src={extraImg}
                  alt={`${p.titolo} extra`}
                  className={`project-extra-outside ${index % 2 === 0 ? 'left' : 'right'}`}
                />
              )}
            </VerticalTimelineElement>
          );
        })}

        <VerticalTimelineElement
          iconStyle={{
            background: 'linear-gradient(90deg, #c800ff, #00c8ff)',
            color: '#fff',
          }}
          contentStyle={{
            background: 'rgba(20,0,40,0.9)',
            color: '#fff',
            textAlign: 'center',
            borderRadius: '10px',
            boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
          }}
          icon={null}
        >
          <h3 style={{ color: '#ff66ff' }}>Coming Soon...</h3>
          <p style={{ color: '#ddd', fontStyle: 'italic', marginTop: '0.5rem' }}>
            Nuovi progetti in arrivo! 🚀
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
