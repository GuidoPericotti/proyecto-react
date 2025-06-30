import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';  // Usamos el contexto

const RutaProtegida = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Accedemos al estado de autenticación desde el contexto

  if (!isAuthenticated) {
    // Si no está autenticado, redirige al login
    return <Navigate to="/login" />;
  }

  return children; // Si está autenticado, renderiza el contenido
};

export default RutaProtegida;
