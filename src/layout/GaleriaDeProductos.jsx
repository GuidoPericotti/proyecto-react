import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import loading from "../assets/loading.gif";

const GaleriaDeProductos = ({
  cart,
  productos,
  cargando,
  borrarProducto,
  agregarCarrito,
}) => {
  const [paginaActual, setPaginaActual] = useState(1);
  const [productosFiltrados, setProductosFiltrados] = useState(productos);
  const [busqueda, setBusqueda] = useState("");

  // Definimos cuántos productos queremos mostrar por página
  const productosPorPagina = 4;
  const indexOfLastProducto = paginaActual * productosPorPagina;
  const indexOfFirstProducto = indexOfLastProducto - productosPorPagina;
  const productosPaginaActual = productosFiltrados.slice(
    indexOfFirstProducto,
    indexOfLastProducto
  );

  // Actualizamos los productos filtrados según la búsqueda
  useEffect(() => {
    const filtrados = productos.filter((producto) =>
      producto.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );
    setProductosFiltrados(filtrados);
    setPaginaActual(1); // Volver a la primera página si se filtra
  }, [busqueda, productos]);

  // Función para cambiar de página
  const handlePageChange = (nuevaPagina) => {
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      setPaginaActual(nuevaPagina);
    }
  };

  // Calcular el número total de páginas
  const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina);

  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      <main className="flex flex-col md:h-screen md:justify-center p-4">
        {cargando ? (
          <img src={loading} alt="loading" className="mx-auto my-auto block" />
        ) : (
          <>
            {/* Barra de búsqueda */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Buscar producto..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            {/* Lista de productos */}
            <ProductList
              borrarProducto={borrarProducto}
              agregarCarrito={agregarCarrito}
              productos={productosPaginaActual}
            />

            {/* Paginación */}
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={() => handlePageChange(paginaActual - 1)}
                disabled={paginaActual === 1}
                className="cursor-pointer px-4 py-2 bg-yellow-500 text-black rounded-lg disabled:bg-yellow-600"
              >
                Anterior
              </button>
              <span className="text-lg font-semibold">{paginaActual}</span>
              <button
                onClick={() => handlePageChange(paginaActual + 1)}
                disabled={paginaActual === totalPaginas}
                className="cursor-pointer px-4 py-2 bg-yellow-500 text-black rounded-lg disabled:bg-yellow-600"
              >
                Siguiente
              </button>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default GaleriaDeProductos;
