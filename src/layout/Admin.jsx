import React, { useState, useEffect } from 'react';
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Admin = () => {
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({ titulo: '', descripcion: '', precio: 0, stock: 0, foto: '' });
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Traer productos de la API
  useEffect(() => {
    fetch('https://6856e03221f5d3463e53e7c6.mockapi.io/productos')
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  // Función para manejar la creación o actualización de productos
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      // Actualizar producto
      fetch(`https://6856e03221f5d3463e53e7c6.mockapi.io/productos/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto),
      })
        .then((res) => res.json())
        .then(() => {
          setProductos((prev) =>
            prev.map((p) => (p.id === editId ? { ...p, ...producto } : p))
          );
          setEditing(false);
          setProducto({ titulo: '', descripcion: '', precio: 0, stock: 0, foto: '' });
        });
    } else {
      // Crear producto
      fetch('https://6856e03221f5d3463e53e7c6.mockapi.io/productos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto),
      })
        .then((res) => res.json())
        .then((newProduct) => {
          setProductos([...productos, newProduct]);
          setProducto({ titulo: '', descripcion: '', precio: 0, stock: 0, foto: '' });
        });
    }
  };

  // Eliminar producto
  const handleDelete = (id) => {
    fetch(`https://6856e03221f5d3463e53e7c6.mockapi.io/productos/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setProductos(productos.filter((producto) => producto.id !== id));
    });
  };

  // Editar producto
  const handleEdit = (id) => {
    const productToEdit = productos.find((producto) => producto.id === id);
    setProducto({ ...productToEdit });
    setEditId(id);
    setEditing(true);
  };

  return (
    <>
      <Header />
      <div className="bg-gray-800 flex flex-col mx-auto p-6">
        <h1 className="text-gray-200 text-4xl font-semibold text-center mb-6">Panel de Administración</h1>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 space-y-4 mb-8">
          <h2 className="text-2xl font-medium text-gray-800">{editing ? 'Actualizar Producto' : 'Crear Producto'}</h2>

          {/* Título */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Título</label>
            <input
              type="text"
              value={producto.titulo}
              onChange={(e) => setProducto({ ...producto, titulo: e.target.value })}
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Descripción</label>
            <input
              type="text"
              value={producto.descripcion}
              onChange={(e) => setProducto({ ...producto, descripcion: e.target.value })}
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* Precio */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Precio</label>
            <input
              type="number"
              value={producto.precio}
              onChange={(e) => setProducto({ ...producto, precio: Number(e.target.value) })}
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Stock</label>
            <input
              type="number"
              value={producto.stock}
              onChange={(e) => setProducto({ ...producto, stock: Number(e.target.value) })}
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* Foto */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Foto (URL)</label>
            <input
              type="url"
              value={producto.foto}
              onChange={(e) => setProducto({ ...producto, foto: e.target.value })}
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            {editing ? 'Actualizar Producto' : 'Crear Producto'}
          </button>
        </form>

        <h2 className="text-2xl font-medium text-gray-800 mb-4">Productos</h2>

        <ul className="space-y-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {productos.map((producto) => (
            <li key={producto.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={producto.foto} alt={producto.titulo} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{producto.titulo}</h3>
                <p className="text-gray-600 text-sm mt-2">{producto.descripcion}</p>
                <p className="text-gray-800 font-semibold text-xl mt-2">${parseFloat(producto.precio).toLocaleString()}</p>
                <p className="text-gray-500">Stock: {producto.stock}</p>

                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => handleEdit(producto.id)}
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(producto.id)}
                    className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
