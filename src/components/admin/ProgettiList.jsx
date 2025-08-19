import React, { useState } from 'react';
import '../../styles/ProgettiList.css'; 
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function ProgettiList({ progetti = [], onEdit, onDelete, isAdmin = false }) {
  if (isAdmin) {
    return (
      <div className="lists-section admin-progetti">
        <h2>Lista Progetti</h2>
        <ul>
          {progetti.map((p) => (
            <li key={p.id}>
              <h3>{p.titolo}</h3>
              <img src={p.img} alt={p.titolo} className="project-gif" />
              <p>{p.descrizione}</p>
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
              <br />
              <button onClick={() => onEdit(p)}>Modifica</button>
              <button onClick={() => onDelete(p)}>Elimina</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Pubblico con descrizione troncata
  return (
    <div className="public-progetti">
      <VerticalTimeline>
        {progetti.map((p) => {
          const [expanded, setExpanded] = useState(false);

          return (
            <VerticalTimelineElement
              key={p.id}
              className="timeline-element"
              contentStyle={{ background: 'rgba(20,0,40,0.9)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid rgba(20,0,40,0.9)' }}
              date={p.anno}
              iconStyle={{ background: 'linear-gradient(90deg, #c800ff, #00c8ff)', // gradient come navbar
                border: '2px solid rgba(255,255,255,0.4)',
                boxShadow: '0 0 8px rgba(0,0,0,0.3)', }}
              iconClassName="timeline-icon"
            >
              <h3>{p.titolo}</h3>
              <img src={p.img} alt={p.titolo} className="project-gif" />
              
              <p className={`project-description ${expanded ? 'expanded' : ''}`}>
                {p.descrizione}
              </p>
              {p.descrizione.length > 120 && (
                <button
                  className="read-more-btn"
                  onClick={() => setExpanded(!expanded)}
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
            </VerticalTimelineElement>
          );
        })}

        {/* Coming Soon */}
  <VerticalTimelineElement
    iconStyle={{ background: 'linear-gradient(90deg, #c800ff, #00c8ff)', color: '#fff' }}
    contentStyle={{ 
      background: 'rgba(20,0,40,0.9)', 
      color: '#fff', 
      textAlign: 'center',
      borderRadius: '10px',
      boxShadow: '0 6px 20px rgba(0,0,0,0.2)'
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
