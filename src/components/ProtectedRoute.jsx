import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { apiFetch } from "../utils/apiFetch";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let mounted = true; // evita aggiornamenti su component unmounted

    const checkAuth = async () => {
      try {
        const res = await apiFetch('/api/auth/protected-check', { method: 'GET' });
        if (!mounted) return;

        setAuthenticated(res ? res.ok : false); // se res è null => false
      } catch (err) {
        if (!mounted) return;
        setAuthenticated(false);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    checkAuth();

    return () => { mounted = false }; // cleanup
  }, []); // esegue solo una volta

  if (loading) return <p>Caricamento...</p>;
  return authenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
