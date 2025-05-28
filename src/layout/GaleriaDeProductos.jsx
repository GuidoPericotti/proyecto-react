import React from "react";
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
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      <main>
        {cargando ? (
          <img src={loading} alt="loading" />
        ) : (
          <ProductList
            borrarProducto={borrarProducto}
            agregarCarrito={agregarCarrito}
            productos={productos}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default GaleriaDeProductos;
