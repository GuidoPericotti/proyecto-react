import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';  // Asegurarse de importar el contexto
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ productos }) => {
  const [cantidad, setCantidad] = useState(1);
  const { addToCart } = useCart();  // Obtener la función addToCart del contexto

  const increase = () => setCantidad(prev => (prev < productos.stock ? prev + 1 : prev));
  const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : prev));

  const notify = () => {
    toast.success("¡Producto agregado al carrito!");
  };

  return (
    <section className="flex ring-1 ring-gray-900 rounded-lg">
      <div key={productos.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-full">
        <img src={productos.foto} alt="Producto" className="w-full h-48 object-cover" />
        <h3 className="h-10 text-xl font-semibold my-4 px-4">{productos.titulo}</h3>
        <p className="h-10 text-gray-600 text-sm px-4 mt-2">{productos.descripcion}</p>
        <p className="text-center text-gray-600 font-bold text-xl px-4 mt-2">${parseFloat(productos.precio).toLocaleString()}</p>

        <div className="flex items-center justify-center mt-4">
          <button className="cursor-pointer bg-gray-300 p-2 rounded-xl hover:bg-gray-400 transition" onClick={decrease}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" d="M5 12h14" />
            </svg>
          </button>

          <span className="px-4 font-semibold text-xl text-gray-900">{cantidad}</span>

          <button className="cursor-pointer bg-gray-300 p-2 rounded-xl hover:bg-gray-400 transition" onClick={increase}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>

        <button
          onClick={() => {
            addToCart(productos, cantidad);
            setCantidad(1);  // Resetea el contador después de agregar
            notify()
          }}
          className="cursor-pointer mt-4 w-full bg-gray-900 text-white py-3 hover:bg-yellow-600 transition"
        >
          Agregar al carrito
        </button>

        <div className="flex items-center justify-center cursor-pointer w-full text-gray-900 py-3 rounded-b-lg hover:text-yellow-600 transition">
          <Link to={`/galeria/${productos.id}`}> Ver más </Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
