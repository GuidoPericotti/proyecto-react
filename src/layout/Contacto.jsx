import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Contacto = ({ cart, productos, borrarProducto, agregarCarrito }) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      <section className="h-[100vh] py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Contactanos
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Tenés alguna pregunta o comentario? ¡Estamos aca para ayudarte!
          </p>

          <form
            action="https://formsubmit.co/tu-correo@dominio.com"
            method="POST"
            className="max-w-lg mx-auto space-y-6 bg-white p-8 rounded-xl shadow-lg"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contacto;
