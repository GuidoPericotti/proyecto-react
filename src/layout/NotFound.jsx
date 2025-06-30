import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">La página que buscas no se encuentra.</p>

        <Link
          to="/"
          className="inline-block bg-yellow-500 text-gray-800 font-semibold py-2 px-6 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
        >
          Regresar a inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
