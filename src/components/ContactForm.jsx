import { useState } from 'react';
import { apiFetch } from '../utils/apiFetch';

export default function ContactForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [messaggio, setMessaggio] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const res = await apiFetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, messaggio }),
      });

      if (res.ok) {
        setStatus('✅ Messaggio inviato con successo! Ti risponderò al più presto.');
        setNome(''); setEmail(''); setMessaggio('');
      } else {
        setStatus('❌ ' + (res.data?.msg || 'Errore nell\'invio'));
      }
    } catch (err) {
      console.error(err);
      setStatus('❌ Errore imprevisto');
    } finally {
      setLoading(false);
    }
  };

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
}
