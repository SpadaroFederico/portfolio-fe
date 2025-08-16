import React from 'react';
import '../styles/Home.css';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__logo-container">
          <img
            src="/ghibli.png" // deve essere nella cartella public
            alt="Logo Ghibli"
            className="home__logo"
          />
        </div>
        <div className="home__intro">
          <h1>Ciao, sono <span className="highlight">Federico</span></h1>
          <h2>Sviluppatore Full-Stack</h2>
          <p>
            Creo applicazioni web moderne, scalabili e performanti.  
            Lavoro con tecnologie front-end e back-end per trasformare idee in realtà.
          </p>
        </div>
      </section>

      {/* Sezione Skills */}
      <Skills />

      {/* sezione About me */}
      <section className="home__about">
        <h2>Chi sono</h2>
        <p>
          La mia passione per la tecnologia mi accompagna da sempre, ma è stato alle scuole superiori, scegliendo di studiare elettronica, che ho scoperto un interesse profondo per la programmazione. Mi ha sempre affascinato la possibilità di trovare soluzioni diverse a uno stesso problema e la soddisfazione che nasce dal risolvere ostacoli lungo il percorso.

          Dopo il diploma in Elettronica ed Elettrotecnica, ho iniziato a lavorare come fuori sede per una nota azienda produttrice di tabacco. Questa esperienza mi ha permesso di conoscere da vicino il mondo del lavoro e di mettermi da parte le risorse per investire nei miei studi futuri.

          Nonostante la buona posizione, sentivo il richiamo della mia vera passione: la programmazione. Così, dopo un anno, ho deciso di intraprendere un percorso di formazione per diventare sviluppatore web full stack. Oggi ho raggiunto questo obiettivo e continuo a migliorarmi costantemente, con l’intento di approfondire nuove tecnologie e imparare nuovi linguaggi.
        </p>
      </section>

      {/* sezione contattami */}
      <section className="home__contact">
        <div className="contact__socials">
          <h2>Seguimi</h2>
          <ul>
            <li><a href="https://github.com/tuo-username" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com/in/tuo-username" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:tuamail@example.com">Email</a></li>
          </ul>
        </div>

        <div className="contact__form-box">
          <h2>Contattami</h2>
          <form>
            <input type="text" placeholder="Il tuo nome" required />
            <input type="email" placeholder="La tua email" required />
            <textarea placeholder="Il tuo messaggio" required></textarea>
            <button type="submit">Invia</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
