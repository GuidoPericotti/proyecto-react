import React from 'react'
import { useParams } from 'react-router-dom'

const DetallesProducto = ({ productos }) => {

  const { id } = useParams()

  const product = productos.find(producto => producto.id === parseInt(id))
  console.log(product)
  return (
    <div>
      <h1>Detalle del producto: {id}</h1>
      {product ? (<h2>{product.titulo}</h2>) : (<p>Producto no encontrado</p>)}
    </div>
  )
}

export default DetallesProducto