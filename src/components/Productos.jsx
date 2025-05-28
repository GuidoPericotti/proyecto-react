import React, {useState} from 'react'

const Product = ({ borrarProducto, productos, agregarCarrito }) => {

  const [cantidad, setCantidad] = useState(1);

  const increase = () => setCantidad(prev => (prev < productos.stock ? prev +1 : prev));
  const decrease = () => setCantidad(prev => (prev > 1 ? prev - 1 : prev));

  return (
    <section className="flex flex-wrap gap-4 p-4">
        <div key={productos.id} className="bg-white shadow-lg rounded-lg overflow-hidden w-80">
          {/* Imagen */}
          <img src={productos.foto} alt="Producto" className="w-full h-48 object-cover" />

          {/* Titulo */}
          <h3 className="text-xl font-semibold mt-4 px-4">{productos.titulo}</h3>

          {/* Descripción */}
          <p className="text-gray-600 text-sm px-4 mt-2">{productos.descripcion}</p>
          <p className="text-gray-600 text-sm px-4 mt-1">${productos.precio}</p>

        <div className="flex items-center justify-center mt-4">
           <button className="cursor-pointer bg-gray-300 p-2 rounded-xl hover:bg-gray-400 transition" onClick={decrease}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
            </svg>
           </button>

           <span className="px-4 text-gray-900">{cantidad}</span>

           <button className="cursor-pointer bg-gray-300 p-2 rounded-xl hover:bg-gray-400 transition" onClick={increase}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
           </button>

        </div>
          {/* Botón "Agregar al carrito" */}
          <button
              onClick={() => {
                agregarCarrito(productos, cantidad);  // Agregar el producto al carrito
                setCantidad(1);  // Resetea el contador de cantidad a 1
              }}
            className="cursor-pointer mt-4 w-full bg-yellow-500 text-white py-3 rounded-b-lg hover:bg-yellow-600 transition"
          >
            Agregar al carrito
          </button>
        </div>
    </section>
  )
}

export default Product