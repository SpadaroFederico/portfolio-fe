import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHouse, FaDiagramProject, FaUser, FaRightFromBracket } from 'react-icons/fa6';
import '../styles/NavBar.css';
import { apiFetch } from '../utils/apiFetch'; // importa apiFetch

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  // Controllo login tramite endpoint /protected-check
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await apiFetch('/api/auth/protected-check', { method: 'GET' });
        setLoggedIn(res && res.ok);
      } catch {
        setLoggedIn(false);
      }
    };
    checkAuth();
  }, [location]);

  const onAboutClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      let attempts = 0;
      const scrollWhenReady = () => {
        const el = document.getElementById('about');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempts < 20) {
          attempts++;
          requestAnimationFrame(scrollWhenReady);
        }
      };
      requestAnimationFrame(scrollWhenReady);
    }
  };

  const logout = async () => {
    await apiFetch('/api/auth/logout', { method: 'POST' });
    setLoggedIn(false);
    navigate('/login');
  };

  const aboutTo = location.pathname === '/' ? '#about' : '/#about';

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
        <li>
          <Link to={aboutTo} onClick={onAboutClick} className="navbar__link">
            <FaUser className="navbar__icon" /> About
          </Link>
        </li>
        {loggedIn && (
          <li>
            <button onClick={logout} className="navbar__link navbar__button">
              <FaRightFromBracket className="navbar__icon" /> Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
