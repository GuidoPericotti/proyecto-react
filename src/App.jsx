import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './layout/Home';
import Nosotros from './layout/Nosotros';
import GaleriaDeProductos from './layout/GaleriaDeProductos';
import Contacto from './layout/Contacto';
import NotFound from './layout/NotFound';
import DetallesProducto from './components/DetallesProducto';
import RutaProtegida from './auth/RutasProtegidas';
import Login from './layout/Login';
import Admin from './layout/Admin';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';  // Importar AuthContext
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);
  const [isAuthenticated, setIsAuth] = useState(false);

  useEffect(() => {
    fetch('https://6856e03221f5d3463e53e7c6.mockapi.io/productos')
      .then(respuesta => respuesta.json())
      .then(datos => {
        setTimeout(() => {
          setProductos(datos);
          setCargando(false);
        }, 2000); // Simulando un retraso
      })
      .catch(error => {
        console.log('Error', error);
        setCargando(false);
        setError(true);
      });
  }, []);

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ToastContainer
            autoClose={3000}
          />
          <Routes>
            <Route path='/' element={<Home productos={productos} />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/galeria' element={<GaleriaDeProductos productos={productos} cargando={cargando} />} />
            <Route path='/galeria/:id' element={<DetallesProducto productos={productos} />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/admin' element={
              <RutaProtegida isAuthenticated={isAuthenticated}>
                <Admin />
              </RutaProtegida>
            } />
            <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
