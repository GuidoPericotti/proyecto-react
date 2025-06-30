import React from 'react';
import { useCart } from '../context/CartContext'; // Asegúrate de importar useCart
import Swal from 'sweetalert2';

const Cart = ({ isOpen, onClose }) => {
  // Usar el hook del contexto para acceder al carrito y la función vaciarCarrito
  const { cartItems, borrarProducto, vaciarCarrito } = useCart();
  const { getTotalProducts } = useCart();
  // Calcular el total
  const total = cartItems.length > 0
    ? cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0)
    : 0;

  const FinalizarCompra = () => {
    Swal.fire({
      title: "Compra finalizada",
      icon: "success",
      draggable: true
    });
  };

  return (
    <div className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="bg-gray-900 w-80 h-full p-6 flex flex-col">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-200">Carrito de Compras</h2>
          <button onClick={onClose} className="cursor-pointer px-4 hover:bg-yellow-600 rounded-full bg-yellow-500 text-2xl font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-900 size-6">
              <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-4 flex-1 overflow-auto">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">El carrito está vacío</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center py-2">
                  <span className="text-gray-200 text-sm">{item.titulo} - ${item.precio} x {item.quantity}</span>
                  <button onClick={() => borrarProducto(item.id)} className="text-red-500 hover:text-red-700 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Mostrar la cantidad total de productos */}
        <p className='text-gray-200 font-semibold'>Total productos en carrito: {getTotalProducts()}</p>
        <div className="mt-4 flex justify-between items-center text-xl font-semibold text-gray-200">
          <span>Total:</span>
          <span>${total.toLocaleString()}</span>
        </div>

        <div className="mt-4">
          {/* Botón para vaciar el carrito */}
          <button
            onClick={vaciarCarrito} // Llamar la función vaciarCarrito al hacer clic
            className="cursor-pointer w-full bg-gray-500 text-gray-200 py-3 rounded-lg hover:bg-yellow-600 transition"
          >
            Vaciar Carrito
          </button>
        </div>

        <div className="mt-4">
          <button onClick={FinalizarCompra} className="cursor-pointer w-full bg-yellow-500 text-gray-900 py-3 rounded-lg hover:bg-yellow-600 transition">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
