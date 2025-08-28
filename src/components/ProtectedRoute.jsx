import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { apiFetch } from "../utils/apiFetch";

function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let mounted = true; // evita aggiornamenti su component unmounted

    const checkAuth = async () => {
        const res = await apiFetch('/api/auth/protected-check');
        setAuthenticated(res?.ok);
        setLoading(false);
    };

    checkAuth();

    return () => { mounted = false }; // cleanup
  }, []); // esegue solo una volta

  if (loading) return <p>Caricamento...</p>;
  return authenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
