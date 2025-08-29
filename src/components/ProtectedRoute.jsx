import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { apiFetch } from "../utils/apiFetch";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
    const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

  useEffect(() => {
    let mounted = true; // evita aggiornamenti su component unmounted

    const checkAuth = async () => {
        const res = await fetch(`${BASE_URL}/auth/protected-check`, { credentials: 'include' });
        if (res.status === 401 || res.status === 403) {
            // Non autenticato, ma non è un errore bloccante
            return { authenticated: false };
        }
        if (!res.ok) {
            throw new Error('Errore nel controllo autenticazione');
        }
        return await res.json();
    };

    checkAuth();

    return () => { mounted = false }; // cleanup
  }, []); // esegue solo una volta

  if (loading) return <p>Caricamento...</p>;
  return authenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
