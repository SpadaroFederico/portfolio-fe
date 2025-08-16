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
          <Link to="/certificati" className="navbar__link">
            <FaMedal className="navbar__icon" /> Certificati
          </Link>
        </li>
        <li>
          <Link to="/esperienze" className="navbar__link">
            <FaBriefcase className="navbar__icon" /> Esperienze
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
