import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useCart } from "../context/CartContext"; // Importamos el hook

const Home = ({ productos }) => {
  // Usamos el hook useCart para acceder a los valores y funciones del carrito
  const { cartItems, addToCart, borrarProducto } = useCart();

  return (
    <>
      <Header cartItems={cartItems} borrarProducto={borrarProducto} /> {/* Pasamos cartItems a Header */}
      <main>
        <section
          className="h-[100vh] bg-cover bg-center relative flex justify-center items-center"
          style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2016/11/23/15/14/jars-1853439_1280.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white py-20">
            <h1 className="text-4xl font-bold mb-4">Bienvenido a MacroBox</h1>
            <p className="text-lg mb-6">
              Tu destino para una alimentación consciente.
            </p>
            <a
              href="/galeria"
              className="font-semibold bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-full text-xl"
            >
              NUESTROS PRODUCTOS
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default Home;
