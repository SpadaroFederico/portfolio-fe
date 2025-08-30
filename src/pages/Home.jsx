import React from 'react';
import '../styles/Home.css';
import Skills from '../components/Skills';
import ContactForm from '../components/ContactForm';
import CertificazioniList from '../components/admin/CertificazioniList';
import EsperienzeList from '../components/admin/EsperienzeList';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

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
          La tecnologia mi ha sempre affascinato, ma è stato durante gli studi in elettronica alle superiori che ho scoperto la mia vera passione: la programmazione. Amo affrontare sfide, trovare soluzioni creative e trasformare idee in progetti concreti. Dopo il diploma ho accumulato esperienza lavorativa come fuori sede, imparando a gestire responsabilità e risorse. Oggi continuo a crescere come sviluppatore web full-stack, esplorando nuove tecnologie e realizzando applicazioni eleganti, performanti e innovative.
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
