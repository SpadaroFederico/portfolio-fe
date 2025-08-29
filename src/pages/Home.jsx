import React from 'react';
import '../styles/Home.css';
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';
import CertificazioniList from '../components/admin/CertificazioniList';
import EsperienzeList from '../components/admin/EsperienzeList';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import '../../src/index.css';
<div className="" />

const Home = () => {
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
      <section id="about" className="home__about">
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
              <a href="https://www.instagram.com/federicospadarodev?igsh=MWRxc245ZXRwamdqdw==" target="_blank" rel="noopener noreferrer">
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

export default Home;
