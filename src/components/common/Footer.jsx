import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-900 p-4">
      <div className="container gap-x-4 mx-auto flex justify-between">
        <div>
          <div className="flex items-center">
            <h3 className="text-md font-semibold">MacroBox</h3>
            <p className="text-sm">&copy; 2025 - Tienda Online</p>
          </div>
          <p className="text-sm">Dirección: Calle Ficticia 123, Ciudad, País</p>
          <p className="text-sm">Teléfono: (123) 456-7890</p>
          <p className="text-sm">Email: contacto@macrobox.com</p>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Suscribite</h3>
          <form>
            <input
              type="email"
              placeholder="Tu email"
              className="text-sm bg-white font-semibold p-2 rounded-l-lg"
            />
            <button
              type="submit"
              className="cursor-pointer text-sm font-semibold bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded-r-lg"
            >
              Suscribirme
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
};

export default Footer;