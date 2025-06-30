import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Nosotros = ({ cart, productos, borrarProducto, agregarCarrito }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      <section className="h-auto py-20 bg-gray-100">
        <div className="flex flex-col md:h-screen md:justify-center mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Conoce a MacroBox
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            En MacroBox, creemos en una alimentación consciente que nutre tanto
            el cuerpo como la mente. Nuestro compromiso es ofrecer productos
            saludables que se adapten a tu estilo de vida.
          </p>

          <div className="flex flex-col items-center md:flex-row justify-center gap-12">
            <div className="md:w-1/3">
              <img
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                src="https://cdn.pixabay.com/photo/2016/11/29/10/09/bakery-1868925_1280.jpg"
                alt="Nuestro equipo"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                Nuestro Equipo
              </h3>
              <p className="text-gray-600">
                Un grupo apasionado y comprometido con la salud y el bienestar
                de nuestros clientes.
              </p>
            </div>

            <div className="md:w-1/3">
              <img
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                src="https://cdn.pixabay.com/photo/2014/07/10/05/02/seasoned-peanuts-388793_1280.jpg"
                alt="Nuestros productos"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                Nuestros Productos
              </h3>
              <p className="text-gray-600">
                Seleccionados cuidadosamente para ofrecer calidad y nutrición en
                cada bocado.
              </p>
            </div>

            <div className="md:w-1/3">
              <img
                className="w-full h-64 object-cover rounded-lg shadow-lg"
                src="https://cdn.pixabay.com/photo/2018/05/24/02/07/peach-3425656_1280.jpg"
                alt="Nuestra misión"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">
                Nuestra Misión
              </h3>
              <p className="text-gray-600">
                Promover hábitos alimenticios saludables que contribuyan a una
                vida plena y activa.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Nosotros;
