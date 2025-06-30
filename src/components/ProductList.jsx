import React from 'react'
import Productos from './Productos'

const ProductList = ({ borrarProducto, agregarCarrito, productos }) => {

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-4 p-4">
        {
          productos.map(producto => (
            <Productos
              borrarProducto={borrarProducto}
              agregarCarrito={agregarCarrito}
              key={producto.id}
              productos={producto}
            />
          ))
        }
      </div>
    </>
  )
}

export default ProductList
