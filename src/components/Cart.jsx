import React from 'react'

const Cart = ({ cartItems, isOpen, onClose, borrarProducto }) => {
  return (
<div className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="bg-white w-80 h-full p-6 flex flex-col">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">Carrito de Compras</h2>
          <button onClick={onClose} className="text-2xl font-semibold">x</button>
        </div>

        <div className="mt-4 flex-1 overflow-auto">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">El carrito está vacío</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-900 text-sm font-medium">{item.titulo} - ${item.precio} x {item.quantity}</span>
                  <button onClick={() => borrarProducto(item.id)} className="text-red-500 hover:text-red-700 text-sm">Eliminar</button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-4">
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">Finalizar Compra</button>
        </div>
      </div>
    </div>
  )
}

export default Cart