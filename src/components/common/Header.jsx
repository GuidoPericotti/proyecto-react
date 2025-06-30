import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart';
import { useCart } from '../../context/CartContext'; // Importar el contexto
import { useAuth } from '../../context/AuthContext'; // Importamos el hook de autenticación

const Header = () => {
  const { getTotalProducts, cartItems, borrarProducto, isOpen, abrirCarrito, cerrarCarrito } = useCart(); // Usamos el contexto
  const { isAuthenticated, logout } = useAuth(); // Obtenemos el estado de autenticación y la función de logout

  const [menuOpen, setMenuOpen] = useState(false);  // Estado para gestionar el menú móvil

  const toggleCarrito = () => {
    if (isOpen) {
      cerrarCarrito();  // Cerrar el carrito
    } else {
      abrirCarrito();   // Abrir el carrito
    }
  };

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);  // Alternar el estado del menú
  };

  return (
    <header>
      <nav className="bg-gray-900 font-semibold text-white p-4">
        <div className="flex items-center justify-between">
          {/* Botón de menú (solo en pantallas móviles) */}
          <button
            className="lg:hidden text-white"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" d="M4.5 6h15M4.5 12h15M4.5 18h15" />
            </svg>
          </button>

          {/* Menú de navegación para pantallas grandes */}
          <div className="w-full lg:flex items-center justify-center space-x-6 hidden">
            <ul className="flex gap-6">
              <li><Link to="/" className="no-underline text-white hover:text-yellow-500">HOME</Link></li>
              <li><Link to="/nosotros" className="no-underline text-white hover:text-yellow-500">NOSOTROS</Link></li>
              <li><Link to="/galeria" className="no-underline text-white hover:text-yellow-500">TIENDA</Link></li>
              <li><Link to="/contacto" className="no-underline text-white hover:text-yellow-500">CONTACTO</Link></li>
            </ul>

            {/* Botón de carrito en pantallas grandes */}
            <button
              className="cursor-pointer no-underline text-white hover:text-yellow-500 relative"
              onClick={toggleCarrito}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.0 0 0 1 1.5 0Z" />
              </svg>
              <span className="absolute top-0 right-0 bg-yellow-500 text-black text-xs rounded-full w-4 h-4 flex items-center justify-center">{getTotalProducts()}</span>
            </button>

            {/* Botón de iniciar sesión en pantallas grandes */}
            {!isAuthenticated ? (
              <Link
                to="/login"
                className="no-underline text-white hover:text-yellow-500"
              >
                Iniciar Sesión
              </Link>
            ) : (
              <button
                onClick={() => logout()}
                className="cursor-pointer no-underline text-white hover:text-yellow-500"
              >
                Cerrar Sesión
              </button>
            )}
          </div>

          {/* Botón de iniciar sesión (visible en móviles, junto al botón hamburguesa) */}
          <div className="lg:hidden">
            {!isAuthenticated ? (
              <Link
                to="/login"
                className="no-underline text-white hover:text-yellow-500 ml-4"
              >
                Iniciar Sesión
              </Link>
            ) : (
              <button
                onClick={() => logout()}
                className="no-underline text-white hover:text-yellow-500 ml-4"
              >
                Cerrar Sesión
              </button>
            )}
          </div>
        </div>

        {/* Menú desplegable para móviles */}
        <div
          className={`py-4 lg:hidden ${menuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out absolute top-[56px] left-0 w-full bg-gray-900 shadow-lg z-10`}
        >
          <ul className="flex flex-col gap-6 mt-4 text-center">
            <li><Link to="/" className="no-underline text-white hover:text-yellow-500">HOME</Link></li>
            <li><Link to="/nosotros" className="no-underline text-white hover:text-yellow-500">NOSOTROS</Link></li>
            <li><Link to="/galeria" className="no-underline text-white hover:text-yellow-500">TIENDA</Link></li>
            <li><Link to="/contacto" className="no-underline text-white hover:text-yellow-500">CONTACTO</Link></li>
          </ul>
        </div>
      </nav>

      {/* Carrito modal */}
      <Cart borrarProducto={borrarProducto} cartItems={cartItems} isOpen={isOpen} onClose={cerrarCarrito} />
    </header>
  );
};

export default Header;
