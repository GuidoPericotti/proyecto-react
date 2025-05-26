import React from 'react'
import Productos from './Productos'

const ProductList = ({ agregarCarrito, productos }) => {
  return (
    <>
      <h2>Galeria de Productos</h2>
      <div className="flex flex-wrap justify-spacevenly p-4">
        {
          productos.map(productos=>(
            <Productos agregarCarrito={agregarCarrito} key={productos.id} productos={productos} />
          ))
        }
      </div>
    </>
  )
}

export default ProductList