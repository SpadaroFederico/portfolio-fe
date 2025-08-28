Login.jsx:

<div className='login-container'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder={'Inserisci la mail'} value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
                <input type="text" placeholder={'Inserisci la password'}  value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
                <button type="submit">Accedi</button>
            </form>
        </div>

Home.jsx:

return (
    <div className="home">
      <section className="home__hero">
        <div className="home__logo-container">
          <img
            src="/ghibli.png"
            alt="Logo Ghibli"
            className="home__logo"
          />
        </div>
        <div className="home__intro">
          <h1>Ciao, sono <span className="highlight">Federico</span></h1>
          <h2>Full-Stack Web Developer</h2>
          <p>
            Trasformo idee in applicazioni web moderne, veloci e scalabili. 
            Dal front-end al back-end, creo soluzioni eleganti e funzionali per ogni progetto.
          </p>
        </div>
      </section>

      {/* Sezione Skills */}
      <Skills />

      {/* Sezione certificazioni */}
      <section>
        <CertificazioniList isAdmin={false} />
      </section>

      {/* Sezione esperienze */}
      <section>
        <EsperienzeList isAdmin={false} />
      </section>

      {/* Sezione About me */}
      <section className="home__about">
        <h2>Chi sono</h2>
        <p>
          La tecnologia è sempre stata una mia passione, ma è durante gli studi in elettronica alle superiori che ho scoperto il mio amore per la programmazione. Amo trovare soluzioni diverse a uno stesso problema e superare sfide lungo il percorso.
        </p>
        <p>
          Dopo il diploma, ho maturato esperienza nel mondo del lavoro come fuori sede, imparando a gestire responsabilità e risorse. Questo periodo mi ha permesso di consolidare competenze e disciplina, preparandomi al passo successivo.
        </p>
        <p>
          La mia vera passione però era il coding. Ho quindi intrapreso un percorso formativo per diventare sviluppatore web full-stack, e oggi continuo a crescere, esplorando nuove tecnologie e linguaggi per realizzare progetti innovativi e performanti.
        </p>
      </section>

      {/* Sezione contattami */}
      <section className="home__contact">
        <div className="contact__socials">
          <h2>Seguimi</h2>
          <ul>
            <li>
              <a href="https://github.com/SpadaroFederico" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/federico-spadaro-0951b227b/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:tuamail@example.com">
                <FaInstagram /> Instagram
              </a>
            </li>
          </ul>
        </div>

        <ContactForm />
      </section>
    </div>
  );
};


Admin.jsx:

return (
  <div className="admin-container">
    {/* --- FORM IN ALTO --- */}
    <div className="forms-row">
      {/* --- PROGETTI --- */}
      <form className="admin-form" onSubmit={handleSubmitProgetto}>
        <h1>{editingProgettoId ? 'Modifica Progetto' : 'Crea Progetto'}</h1>
        <input
          type="text"
          placeholder="Titolo"
          value={formCreateProgetto.titolo}
          onChange={(e) => setFormCreateProgetto({ ...formCreateProgetto, titolo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descrizione"
          value={formCreateProgetto.descrizione}
          onChange={(e) => setFormCreateProgetto({ ...formCreateProgetto, descrizione: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tecnologie"
          value={formCreateProgetto.tecnologie}
          onChange={(e) => setFormCreateProgetto({ ...formCreateProgetto, tecnologie: e.target.value })}
        />
        <input
          type="text"
          placeholder="Link"
          value={formCreateProgetto.link_repo}
          onChange={(e) => setFormCreateProgetto({ ...formCreateProgetto, link_repo: e.target.value })}
        />
        <input 
          type="text" 
          placeholder="Link GIF di anteprima" 
          value={formCreateProgetto.img} 
          onChange={(e) => setFormCreateProgetto({ ...formCreateProgetto, img: e.target.value })} 
        />
        <button type="submit">{editingProgettoId ? 'Salva Modifiche' : 'Crea Progetto'}</button>
        {editingProgettoId && (
          <button
            type="button"
            onClick={() => {
              setEditingProgettoId(null);
              setFormCreateProgetto({ titolo: '', descrizione: '', tecnologie: '', link: '' });
            }}
          >
            Annulla
          </button>
        )}
      </form>

      {/* --- CERTIFICAZIONI --- */}
      <form className="admin-form" onSubmit={handleSubmitCertificazione}>
        <h1>{editingCertificazioneId ? 'Modifica Certificazione' : 'Crea Certificazione'}</h1>
        <input
          type="text"
          placeholder="Titolo"
          value={formCreateCertificazione.titolo}
          onChange={(e) => setFormCreateCertificazione({ ...formCreateCertificazione, titolo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ente"
          value={formCreateCertificazione.ente}
          onChange={(e) => setFormCreateCertificazione({ ...formCreateCertificazione, ente: e.target.value })}
        />
        <input
          type="date"
          value={formCreateCertificazione.data_conseguimento}
          onChange={(e) => setFormCreateCertificazione({ ...formCreateCertificazione, data_conseguimento: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descrizione"
          value={formCreateCertificazione.descrizione}
          onChange={(e) => setFormCreateCertificazione({ ...formCreateCertificazione, descrizione: e.target.value })}
        />
        <input
          type="text"
          placeholder="link immagine"
          value={formCreateCertificazione.img}
          onChange={(e) => setFormCreateCertificazione({ ...formCreateCertificazione, img: e.target.value })}
        />
        <button type="submit">{editingCertificazioneId ? 'Salva Modifiche' : 'Crea Certificazione'}</button>
        {editingCertificazioneId && (
          <button
            type="button"
            onClick={() => {
              setEditingCertificazioneId(null);
              setFormCreateCertificazione({ titolo: '', ente: '', data_conseguimento: '', descrizione: '', img: '' });
            }}
          >
            Annulla
          </button>
        )}
      </form>

      {/* --- ESPERIENZE --- */}
      <form className="admin-form" onSubmit={handleSubmitEsperienza}>
        <h1>{editingEsperienzaId ? 'Modifica Esperienza' : 'Crea Esperienza'}</h1>
        <input
          type="text"
          placeholder="Titolo"
          value={formCreateEsperienza.titolo}
          onChange={(e) => setFormCreateEsperienza({ ...formCreateEsperienza, titolo: e.target.value })}
        />
        <input
          type="text"
          placeholder="Azienda"
          value={formCreateEsperienza.azienda}
          onChange={(e) => setFormCreateEsperienza({ ...formCreateEsperienza, azienda: e.target.value })}
        />
        <input
          type="date"
          value={formCreateEsperienza.inizio}
          onChange={(e) => setFormCreateEsperienza({ ...formCreateEsperienza, inizio: e.target.value })}
        />
        <input
          type="date"
          value={formCreateEsperienza.fine}
          onChange={(e) => setFormCreateEsperienza({ ...formCreateEsperienza, fine: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descrizione"
          value={formCreateEsperienza.descrizione}
          onChange={(e) => setFormCreateEsperienza({ ...formCreateEsperienza, descrizione: e.target.value })}
        />
        <input type="text" 
          placeholder='immagine'
          value={formCreateEsperienza.img}
          onChange={(e) => setFormCreateEsperienza({ ...formCreateEsperienza, img: e.target.value })}
        />
        <button type="submit">{editingEsperienzaId ? 'Salva Modifiche' : 'Crea Esperienza'}</button>
        {editingEsperienzaId && (
          <button
            type="button"
            onClick={() => {
              setEditingEsperienzaId(null);
              setFormCreateEsperienza({ titolo: '', azienda: '', inizio: '', fine: '', descrizione: '' });
            }}
          >
            Annulla
          </button>
        )}
      </form>
    </div>


    Skills.jsx:

    const Skills = () => {
  return (
    <section className="skills">
      <h2>Competenze</h2>
      <div className="skills__grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill__card">
            <img src={skill.logo} alt={skill.name} className="skill__logo" />
            <span className="skill__name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

NavBar.jsx:

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaHouse, 
  FaMedal, 
  FaBriefcase, 
  FaDiagramProject 
} from 'react-icons/fa6';
import '../styles/NavBar.css';

const Navbar = () => {
  const [lingua, setLingua] = useState('it');

  const toggleLingua = () => {
    setLingua(prev => (prev === 'it' ? 'en' : 'it'));
  };

  return (
    <nav className="navbar">
      <ul className="navbar__nav">
        <li>
          <Link to="/" className="navbar__link">
            <FaHouse className="navbar__icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/progetti" className="navbar__link">
            <FaDiagramProject className="navbar__icon" /> Progetti
          </Link>
        </li>
      </ul>

      <button 
        className="navbar__toggle-lingua"
        onClick={toggleLingua}
        aria-label="Toggle language"
      >
        {lingua.toUpperCase()}
      </button>
    </nav>
  );
};

export default Navbar;


ContactForm.jsx:

return (
    <div className="contact__form-box">
      <h2>Contattami</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Il tuo nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="La tua email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Il tuo messaggio"
          value={messaggio}
          onChange={(e) => setMessaggio(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? '⏳ Inviando...' : 'Invia'}
        </button>
      </form>

      {status && (
        <p className={`contact__status ${status.includes('✅') ? 'success' : 'error'}`}>
          {status}
        </p>
      )}
    </div>
  );


  ProgettiList.jsx:

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



EsperienzeList.jsx:


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

  CertificazioniList.jsx:

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