import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'

const Home = ({ cart, productos, cargando, borrarProducto, agregarCarrito }) => {
  return (
    <>
      <Header cartItems={cart} />
      <main>
        <h1>Bienvenido a MacroBox</h1>

        <p>
          Somos un concepto de tienda saludable nuevo.
          Productos con su macros.
        </p>

        {cargando ? (
          <img src={loading} alt='loading' />
        ) : (
          <ProductList borrarProducto={borrarProducto} agregarCarrito={agregarCarrito} productos={productos} />
        )}
      </main>

      <Footer />
    </>
  )
}

export default Home