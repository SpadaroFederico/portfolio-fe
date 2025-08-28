import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { apiFetch } from "../utils/apiFetch"; // importa apiFetch

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await apiFetch('/api/auth/protected-check', { method: 'GET' });
        setAuthenticated(res && res.ok);
      } catch (err) {
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <p>Caricamento...</p>;
  return authenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
