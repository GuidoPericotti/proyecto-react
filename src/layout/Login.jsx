import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importamos el hook de autenticación
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Usamos useNavigate para redirigir
  const { login } = useAuth(); // Accedemos a la función login desde el contexto

  const handleLogin = (e) => {
    e.preventDefault();

    // Verificamos si el usuario y contraseña son correctos
    if (username === 'admin' && password === 'admin') {
      login(); // Llamamos a la función login del contexto
      console.log('Login exitoso');
      navigate('/admin'); // Redirigimos al panel de administración
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex justify-center items-center bg-gray-800 p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Iniciar Sesión</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>

            {/* Mostrar error si las credenciales son incorrectas */}
            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
