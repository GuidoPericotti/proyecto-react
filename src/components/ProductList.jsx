import React from 'react'
import Productos from './Productos'

const ProductList = ({ borrarProducto, agregarCarrito, productos }) => {
  
  return (
    <>
      <div className="flex flex-wrap justify-center p-4">
        {
          productos.map(productos=>(
            <Productos borrarProducto={borrarProducto} agregarCarrito={agregarCarrito} key={productos.id} productos={productos} />
          ))
        }
      </div>
    </>
  )
}

export default ProductList