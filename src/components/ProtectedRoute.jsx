import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { apiFetch } from "../utils/apiFetch";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let mounted = true;

    const checkAuth = async () => {
      const res = await apiFetch('/auth/protected-check');

      if (!mounted) return;

      if (res.ok) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }

      setLoading(false);
    };

    checkAuth();

    return () => { mounted = false };
  }, []);

  if (loading) return <p>Caricamento...</p>;
  return authenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
