import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false); // Estado para saber si el carrito está abierto o cerrado

  // Función para abrir el carrito
  const abrirCarrito = () => setIsOpen(true);

  // Función para cerrar el carrito
  const cerrarCarrito = () => setIsOpen(false);

  // Función para agregar productos al carrito
  const addToCart = (product, cantidad) => {
    const productInCart = cartItems.find(item => item.id === product.id);
    if (productInCart) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + cantidad } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: cantidad }]);
    }
  };

  // Función para borrar un producto del carrito
  const borrarProducto = (id) => {
    setCartItems(prevItems => prevItems
      .map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
      .filter(item => item.quantity > 0)
    );
  };

  // Función para vaciar el carrito
  const vaciarCarrito = () => {
    setCartItems([]);
  };

  // Función para calcular el total de productos
  const getTotalProducts = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      borrarProducto,
      vaciarCarrito,
      isOpen,
      abrirCarrito,
      cerrarCarrito,
      getTotalProducts
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para acceder al contexto
export const useCart = () => useContext(CartContext);
